import { useQuery } from "react-query";
import axios from 'axios';
import jwt_decode from "jwt-decode";

const getRowsWithID = (rows) => {
    let id = 1;
    let CompleteRowListArray = []

    for(let row of rows){
      const rowWithID = {
        id: id,
        ...row
      }
      id++
      CompleteRowListArray.push(rowWithID)
    }

    return CompleteRowListArray
  }

const getBarMemebers = async() => {
        const response = await axios.get(`https://kdbaapi.herokuapp.com/api/kdba/getBarMembers`);
        return getRowsWithID(response.data['object']);
  }

  const tokenCheck = ()=> {
    if(jwt_decode(localStorage.getItem('token')).exp < Date.now() / 1000){
      localStorage.setItem('token', null)
      localStorage.setItem('mail', null)
      localStorage.setItem('kdbaAdminId', null)
    } 
  }

  const whichFilter = (copyBarMembers,copyMembersForEnroll, advocates )=> {
    if(copyBarMembers.length !== 0){
      return  advocates.filter((advocate)=> advocate.firstname.toLowerCase().includes(copyBarMembers))
    }
    else if(copyMembersForEnroll !== 0){
      return  advocates.filter((advocate)=> advocate.enrollmentNo.toLowerCase().includes(copyMembersForEnroll))
    }
  }

export const useAdvocateHook = (onSuccess, onError, copyBarMembers,copyMembersForEnroll) => {
  return useQuery('catch-Advocates', getBarMemebers,
  {
      tokenCheck,
      cacheTime:600000, // It basically describes how long data should be kept in the cache before it can be garbage collected.
      // staleTime: 30000, // you're guaranteed to not get another network request for prescribed minutes after the first successful one.
      staleTime: 60000,
      refetchOnMount: true, // This makes API call whenever you visit the page
      // refetchOnWindowFocus: true, // This is already set to true
      // We dont need refetchInterval
      // We dont need refetchINterval in background also
      onSuccess,
      onError,
      select : (advocates) => whichFilter(copyBarMembers, copyMembersForEnroll, advocates)
  },
  
  
  )
  
}

