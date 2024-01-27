import React, {useState} from "react";
import tankDataJSON from "../../lib/tankData";
import {Swiper, SwiperSlide, useSwiper, useSwiperSlide} from "swiper/react";
import 'swiper/css'
import arrowBtn from "../../assets/images/buttons/button_back_arrow_cutout_blk.svg"
import arrowBtn2 from "../../assets/images/buttons/button_back_arrow_cutout_hover.svg"


const backgroundURL = "https://eu-wotp.wgcdn.co/static/5.117.1_a28195/wotp_static/img/core/frontend/scss/common/blocks/about-technic/img/bg-nation-t.jpg";
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
        }}
};


const FlagSlider = (props) => {
    const swiper = useSwiper();
    const swiperSlide = useSwiperSlide();
    const [selectedCountry, setSelectedCountry] = useState("germany");
    const [activeSlide, setActiveSlide] = useState(0);
    const [rightArrow, setRightArrow] = useState(arrowBtn);
    const [leftArrow, setLeftArrow] = useState(arrowBtn);
    const [vw, setVw] = useState(window.innerWidth);
    const [page, setPage] = useState(1);
    const [tankKey, setTankKey] = useState(0);
    const [countryKey, setCountryKey] = useState(2);
    const [flagKey, setFlagKey] = useState(3);
    const {tankCategory} = props;
    const numberOfTanks = tankData[tankData.findIndex(country => country.name === selectedCountry)].number;
    const listOfTanks = tankData[tankData.findIndex(country =>country.name === selectedCountry)].tanks.join(", ");
    
    const animate = () => {
         setTankKey(Math.floor(Math.random() * 100000))
         setCountryKey(Math.floor(Math.random() * 100000))
         setFlagKey(Math.floor(Math.random() * 100000))
    }

    useState(() => {
        window.addEventListener("resize", () => {
            setVw(window.innerWidth);
        });
        
        return () => window.removeEventListener("resize", () => {
            setVw(window.innerWidth);
        });
    }, []);
    
    
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
    

    const turnPage = (page) => {
        if (page === 1) {
            setPage(2);
        } else {
            setPage(1);
        }
    }



    
    return(<div className="flag-slider">
        <div className="tanks-container">
            <div className="flag-container" >
                <img src={largeFlagURL + selectedCountry +".webp"} alt="flag" key={flagKey} className="large-flag"/>
            </div>
            <div className="background">
            <img src={tankURL + selectedCountry +".webp"} alt="tanks" className="tanks" key={tankKey} />
            </div>
            {/* <img src={backgroundURL} className="background"></img> */}
        </div>
        <div className="country-title" key={countryKey}>
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
            {vw < 800 ? <Swiper {...sliderSettings}
            onSlideChange={(swiper) => {
                animate();
                setSelectedCountry(tankData[swiper.realIndex]?.name);
                setActiveSlide(swiper.realIndex);}}
                >
                {tankData.length > 0 && tankData.map((country, index) => (
                    <SwiperSlide key={country.name+index} className="slider-flag" >
                        <div  className={`flag-img${index === activeSlide ? '-active' : ''}`}>
                        <div className="slider-highlight"></div>
                        {<img src={smallFlagURL + country.name +"_small.png"} 
                        alt="slider-flag" 
                        />}</div>
                        <div className="flag-subtitle">{country.name}</div>
    
                    </SwiperSlide>
                    ))} 

            </Swiper>:
            <div className="custom-slider">
                <div className="left-sldr-btn">
                    <img src={leftArrow} alt="arrow"
                    onMouseEnter={()=> setLeftArrow(arrowBtn2)}
                    onMouseLeave={()=> setLeftArrow(arrowBtn)}
                    onClick={()=> turnPage(page)}/>
                </div>
                <div className={`first-row-${page}`}>
                {tankData.slice(1,6).map((country,index)=>{
                   return (<div key={"row 1 flag"+index} className="flag-item"
                    onClick={()=> {
                        setSelectedCountry(country.name);
                        animate();
                    }}
                   >
                        <img src={smallFlagURL+country.name+"_small.png"} alt="flag"/>
                        <div className="flag-subtitle">{country.name}</div>
                    </div>)
                })}
                </div>
                <div className={`second-row-${page}`}>
                {tankData.slice(7,11).map((country,index)=>{
                   return (<div key={"row 2 flag"+index} className="flag-item"
                   onClick={()=> {
                    setSelectedCountry(country.name);
                    animate();
                }}
                   >
                    
                     <img src={smallFlagURL+country.name+"_small.png"} alt="flag"/>
                    <div className="flag-subtitle">{country.name}</div>
                    </div>)
                })}
            </div>
                <div className="right-sldr-btn">
                    <img src={rightArrow} alt="arrow"
                    onMouseEnter={()=> setRightArrow(arrowBtn2)}
                    onMouseLeave={()=> setRightArrow(arrowBtn)}
                    onClick={()=> turnPage(page)}/>
                </div>
            </div>
            }
            </div>
        </div>
    </div>)

}
export default FlagSlider;