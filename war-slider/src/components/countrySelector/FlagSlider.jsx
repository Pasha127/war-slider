import React, {useState} from "react";
import tankDataJSON from "../../lib/tankData";
import tanksImg from "../../assets/SVGs/tanks/germany_heavy_tanks.svg";
import {Swiper, SwiperSlide, useSwiper, useSwiperSlide} from "swiper/react";
import 'swiper/css'

const backgroundURL = "https://eu-wotp.wgcdn.co/static/5.117.1_a28195/wotp_static/img/core/frontend/scss/common/blocks/about-technic/img/bg-nation.jpg";
const tankURL = "https://eu-wotp.wgcdn.co/static/5.117.1_a28195/wotp_static/img/core/frontend/scss/common/blocks/about-technic/img/overlap/";
const largeFlagURL = "https://eu-wotp.wgcdn.co/static/5.117.1_a28195/wotp_static/img/core/frontend/scss/common/blocks/about-technic/img/flags/";
const smallFlagURL = "https://eu-wotp.wgcdn.co/static/5.117.1_a28195/wotp_static/img/core/frontend/scss/common/blocks/img/flags/";
const {tankData} = tankDataJSON;
let countryAdjective = "";

let sliderSettings = {
    slideToClickedSlide: true,
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    319: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 6,
      spaceBetween: 40
    }
  }
  };

  
  const FlagSlider = (props) => {

    const swiper = useSwiper();
    const swiperSlide = useSwiperSlide();
    const [selectedCountry, setSelectedCountry] = useState("germany");
    const [activeSlide, setActiveSlide] = useState(0);
    const {tankCategory} = props;
    const numberOfTanks = tankData[tankData.findIndex(country => country.name === selectedCountry)].number;
    const listOfTanks = tankData[tankData.findIndex(country =>country.name === selectedCountry)].tanks.join(", ");


    switch (selectedCountry) {
        case "germany": countryAdjective = "german"; break;
        case "usa": countryAdjective = "american"; break;
        case "ussr": countryAdjective = "soviet"; break;
        case "uk": countryAdjective = "british"; break;
        case "france": countryAdjective = "french"; break;
        case "china": countryAdjective = "chinese"; break;
        case "japan": countryAdjective = "japanese"; break;
        case "czech": countryAdjective = "czech"; break;
        case "sweden": countryAdjective = "swedish"; break;
        case "poland": countryAdjective = "polish"; break;
        case "italy": countryAdjective = "italian"; break;
        default: break;
    }


    return(<div className="flag-slider">
        <div className="tanks-container">
            <div className="flag-container">
                <img src={largeFlagURL + selectedCountry +".webp"} alt="flag" className="large-flag"/>
            </div>
            <img src={tankURL + selectedCountry +".webp"} alt="tanks" className="tanks" />
            <img src={backgroundURL} className="background"></img>
        </div>
        <div className="country-title">
            <p>{selectedCountry}</p>
        </div>
        <div className="slider-bottom">
            <div className="bottom-gradient"></div>
            <div className="slider-section">
                <div className="stats">
                    <div className="number">
                        {numberOfTanks}
                    </div>
                    <div className="number-subtitle">
                        {`${countryAdjective} vehicles in the game`}
                    </div>
                    <div className="tanks-list">
                        {listOfTanks}
                    </div>
                </div>
            <Swiper {...sliderSettings}
            onSlideChange={(swiper) => {
                setSelectedCountry(tankData[swiper.realIndex]?.name);
                setActiveSlide(swiper.realIndex);}}
                >
                {tankData.length > 0 && tankData.map((country, index) => (
                    <SwiperSlide key={country.name+index} className="slider-flag" >
                        {<img src={smallFlagURL + country.name +"_small.png"} 
                        alt="slider-flag" 
                        className={`flag-img${index === activeSlide ? '-active' : ''}`}/>}
                        <div className="flag-subtitle">{country.name}</div>
    
                    </SwiperSlide>
                    ))} 

            </Swiper>
            </div>
        </div>
    </div>)
}

export default FlagSlider;