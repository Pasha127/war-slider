import React from "react";
import tankData from "../../lib/tankData";
import RegisterBtn from "../buttons/RegisterBtn";

const placeholderTankCategory = "HEAVY TANKS";                                  //Placeholder text for the tank category - will be replaced by the tank category selected by the user
const tagLine = "Over 600 vehicles from the largest tank-building superpowers"; //Tagline for the slider page
const subTagLine = "Each model has been recreated with surgical precision";     //Subtagline for the slider page



const CountrySelector = () => {
    return ( 
        <div className="country-selector">
            <div className="tank-type-header">{placeholderTankCategory}</div>
            <div className="call-to-action-container">
                <div className="tag-line">{tagLine}</div>
                <div className="sub-tag-line">{subTagLine}</div>
                <RegisterBtn/>
            </div>

        </div>
        )
        
    };

export default CountrySelector;