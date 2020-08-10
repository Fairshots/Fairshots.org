import React from "react";
import HeroSlider from "./heroslider";
import SoFarBanner from "./sofarbanner";
import FeatureHolder from "../../containers/featureHolder";

export default function Home() {
    return (
        <div>
            <HeroSlider />
            <SoFarBanner />
            <FeatureHolder />
        </div>
    );
}
