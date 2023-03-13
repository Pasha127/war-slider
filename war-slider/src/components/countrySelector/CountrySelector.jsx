import React from "react";
import RegisterBtn from "../buttons/RegisterBtn";
import largeGermanFlag from "../../assets/SVGs/flags/germany_large_faded.svg"
import FlagSlider from "./FlagSlider";
import backgroundImg from "../../assets/SVGs/backgrounds/background_field_dusty.svg";
const placeholderTankCategory = "HEAVY TANKS";                                  //Placeholder text for the tank category - will be replaced by the tank category selected by the user
const tagLine = "Over 600 vehicles from the largest tank-building superpowers"; //Tagline for the slider page
const subTagLine = "Each model has been recreated with surgical precision";     //Subtagline for the slider page



const CountrySelector = () => {
    return ( 
        <div className="country-selector">
            <img src={backgroundImg} className="background"></img>
            {/* <div className="large-flag-container">
            <img src={largeGermanFlag} className="large-flag"/>
        </div> */}
        <div className="slider-container">
            <FlagSlider tankCategory={"heavy"}/>
        </div>
            <div className="tank-type-header">{placeholderTankCategory}</div>
            <div className="call-to-action-container">
                <div className="taglines">
                    <div className="tag-line">{tagLine}</div>
                    <div className="sub-tag-line">{subTagLine}</div>
                </div>
                <RegisterBtn/>
            </div>
        </div>
        )        
    };

export default CountrySelector;