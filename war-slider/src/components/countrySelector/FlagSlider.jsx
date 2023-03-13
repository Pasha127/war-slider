import React, {useState} from "react";
import tankData from "../../lib/tankData";
import tanksImg from "../../assets/SVGs/tanks/germany_heavy_tanks.svg";

const FlagSlider = (props) => {
const [selectedCountry, setSelectedCountry] = useState("germany");

const {tankCategory} = props;

    return(<div className="flag-slider">
        <div className="country-title">{selectedCountry}</div>
        <div className="tanks-container">
            <img src={tanksImg} alt="tanks" className="tanks" />
        </div>
    </div>)
}

export default FlagSlider;