import React, {useState} from "react";
import tankDataJSON from "../../lib/tankData";
import tanksImg from "../../assets/SVGs/tanks/germany_heavy_tanks.svg";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css'

const tankURL = "https://eu-wotp.wgcdn.co/static/5.117.1_a28195/wotp_static/img/core/frontend/scss/common/blocks/about-technic/img/overlap/";
const largeFlagURL = "https://eu-wotp.wgcdn.co/static/5.117.1_a28195/wotp_static/img/core/frontend/scss/common/blocks/about-technic/img/flags/";
const smallFlagURL = "https://eu-wotp.wgcdn.co/static/5.117.1_a28195/wotp_static/img/core/frontend/scss/common/blocks/img/flags/";
const {tankData} = tankDataJSON;



const FlagSlider = (props) => {
const [selectedCountry, setSelectedCountry] = useState("germany");
const {tankCategory} = props;
const numberOfTanks = tankData[tankData.findIndex(country => country.name === selectedCountry)].number;
const listOfTanks = tankData[tankData.findIndex(country =>
     country.name === selectedCountry)].tanks.join(", ");


let countryAdjective = "";
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

let sliderSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };


    return(<div className="flag-slider">
        
        <div className="flag-container">
            <img src={largeFlagURL + selectedCountry +".webp"} alt="flag" className="flag"/>
        </div>
        <div className="tanks-container">
            <img src={tankURL + selectedCountry +".webp"} alt="tanks" className="tanks" />
        </div>
        <div className="country-title">
            <p>{selectedCountry}</p>
        </div>
        <div className="slider-bottom">
            <div className="bottom-gradient"></div>
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
            <div className="slider-section">
            
                {tankData.length > 0 && tankData.map((country, index) => (
                    <img key={country.name+index} src={smallFlagURL + country.name +"_small.png"} alt="slider-flag" className="slider-flag" onClick={() => setSelectedCountry(country.name)} />
                    ))}
            
            </div>
        </div>
    </div>)
}

export default FlagSlider;