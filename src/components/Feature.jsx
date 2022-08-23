import React from 'react'
import styled from 'styled-components'
import Grid from '@mui/material/Grid';
import { HistoryData } from './HistoryData';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import '../components/Slider.css';

const Container = styled.div`
    display: flex;
    padding: 20px;
    z-index: 3;
`

export const BirdImage = styled.div`
display: flex;
flex: 1;
flex-wrap: wrap;

align-items: flex-end;
    justify-content: center;

background-image: url(${props => props.img });
    background-repeat:no-repeat;
  position: relative;
  object-fit: cover;

  width: 80%;
    border-radius: 5%;
    height: 80%;
`

export const OnlyBackground = styled.div`
    background-color: #60dd66;
    padding: 5px;
    border-radius: 10px;

`

const Title = styled.h1`
    font-size: 60px;
    @media only screen and (max-width: 600px) {
        font-size: 45px;
    }
`

const Desc = styled.p`
font-size: small;
background: white;
border-radius: 20px;

&:hover{
        transform: scale(1.01);
    }


box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
padding: 20px;
@media only screen and (max-width: 600px) {
        font-size: smaller;
    }
`
const ImageContent = styled.div`


    color: white;
    border-radius: 20px;
    background-color: #F4A460;
    /* font-size: 14px; */
    font-weight: normal;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

    @media only screen and (max-width: 2560px) {
      font-size: 14px;
      margin-top: -50px;
      padding: 10px;
    }
    @media only screen and (max-width: 1440px) {
      font-size: 14px;
      margin-top: -50px;
      padding: 10px;
    }
    @media only screen and (max-width: 1024px) {
      font-size: 14px;
      margin-top: -50px;
      padding: 10px;
    }
    @media only screen and (max-width: 768px) {
      font-size: 14px;
      margin-top: -50px;
      padding: 10px;
    }
    @media only screen and (max-width: 700px) {
      font-size: 12px;
      margin-top: -30px;
      padding: 5px;
    }
    @media only screen and (max-width: 425px) {
      font-size: 12px;
      margin-top: -30px;
      padding: 5px;
    }
    @media only screen and (max-width: 375px) {
      font-size: 10px;
      margin-top: -30px;
      padding: 5px;
    }
    @media only screen and (max-width: 320px) {
      font-size: 10px;
      margin-top: -30px;
      padding: 5px;
    }
`
const Feature = () => {


  return (
    <Container>
      <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} 
            style={{display: 'flex',flexDirection: 'column',alignItems: 'center',justifyContent: 'center'}}>
                 <Title>
                        History
                </Title>
                <Desc>
                During the 18th century, Kurnool was formed by the Jagir of semi independent Pathan-Nawab whose descendant was dispossessed by the British Government for treason in 1838. The Nawabs formed territory, which became a District of Madras Presidency, with Kurnool as its capital. After India’s Independence in 1947, Kurnool became part of the State of Madras. Britishers gifted the Districts of Bellary, Anantapur, Kadapa and Kurnool.

                Kurnool is the crest jewel of Rayalaseema – The visage of Rayalaseema. On 01-10-1953 the State of Andhra was formed. Formation of State was celebrated in S.T.B.C. College ground. Pandit Jawaharlal Nehru and Sarvepalli Radhakrishnan participated; Kurnool was capital of Andhra state from 01-10-1953 to 31-10-1956. 

                When capital was in Kurnool, the present District Court building was used for Legislative Assembly. Laws were made from this building the-the District Court.  The Speaker of the Assembly was sitting in the chair where the District Judge now sits. The Governor of Andhra also sat in that Chair, when the addressed the Assembly. All the District Judges or Additional District Judges worked here and elevated to the High Court of Andhra Pradesh. Our District Court seat is such a powerful seat.  We had and we have eminent Judges and eminent lawyers who have inherited a wealth of tradition and talent. There was only one District Court for all the four revenue divisions of Kurnool, Nandyal, Adoni and Markapur, in response to call of Mahatma Gandhi for non-Cooperation Movement, Advocates here boycotted Courts in the year 1920. 

                  In the record room of the Kurnool District Court, there are Judgments of the District Court and other Courts of Kurnool District dating back to 1873 and these Judgments show that the District Court, Kurnool and the Mofusil courts in Kurnool were there from 1873, that is everslnce the Madras Civil Court Act of 1873. These Judgments further show that the than District Judges were mostly ICS officers and the Lawyers were only pleaders. Judgments are short, written by hand and in excellent English.               

                    Earlier Andhra was in Madras State and the High Court of Madras was having jurisdiction over Andhra Courts. The High Court of Andhra was established in 1954 at Guntur under the Andhra State Act. It had all the powers hitherto being exercised by the High Court of Madras in respect of the Territories included in the State of Andhra. In 1956 with the establishment of one High Court of Andhra Pradesh, the jurisdiction of the High Court of Andhra was extended to the whole of Telangana Area of the erstwhile Hyderabad State and the High Court of Hyderabad was abolished.

                    The Bar Association of Kurnool was registered under the societies Act in 1964.

                  The name Kurnool is said to have been derived from “Kandanavolu”. When the capital of Andhra State was in Kurnool, the Present District Court building was used for Legislative Assembly.

                  The Konda Reddy Buruju in Kurnool has history of more than 2300 years, built by the Rajas of Vijayanagaram, Konda Reddy Buruju was a part of Kurnool fort and was used as a prison, one revolutionary Konda reddy attained martyrdom in this prison. There is a bastian named Konda Reddy Buruju, constructed as a strategic watch tower by the rules of the Vijayanagara Empire. There is an underground passage (tunnel) from this buruju to Gadwal which is 52 km away. The specialty of this tunnel is that it crosses under the river Tungabadra. History tells that the ruler of Gadwal Kingdom utilized this tunnel to escape from the Muslim conquerors in 17th century. The government of Andhra Pradesh closed the tunnel somewhere around the 1950s.

                    The rare bird in the world, the great Indian Bustard Bird (Batta Meka) which is a heavy ground bird like a yound ostrich or peahen is in Rollapadu sanctuary in this District.
                </Desc>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{display:'flex',padding:'10px',justifyContent:'center',
                                                                        alignItems:'center'}}>
                
            <Swiper
                    breakpoints={{
                      // when window width is >= 640px
                      640: {
                        width: 640,
                        slidesPerView: 1,
                      },
                      
                    }}
                    spaceBetween={10}
                    centeredSlides={true}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                  >
                    {
                      HistoryData.map(item => {
                        return (
                                  <SwiperSlide>
                                      <img src={item.image}/>
                                      <ImageContent>
                                      {
                                            item.Title
                                      }
                                      </ImageContent>
                                  </SwiperSlide>

                                )
                        
                      })
                    }
            </Swiper>
            </Grid>
      </Grid>
     
    </Container>
  )
}

export default Feature
