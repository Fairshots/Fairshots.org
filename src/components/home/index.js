import React from "react";
import HeroSlider from "./heroslider";
import SoFarBanner from "./sofarbanner";
import FeatureHolder from "../../containers/featureHolder";
import BePart from "./bepart";

export default function Home() {
    return (
        <div>
            <HeroSlider />
            <SoFarBanner />
            <FeatureHolder />
        </div>
    );
}
