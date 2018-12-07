import React from "react";
import HeroSlider from "./heroslider";
import SoFarBanner from "./sofarbanner";
import FeatureHolder from "../../containers/featureHolder";
import BePart from "./bepart";


export default function Home(props) {
    return (
        <div>
            <HeroSlider />
            <SoFarBanner />
            <FeatureHolder />

        </div>
    );
}
