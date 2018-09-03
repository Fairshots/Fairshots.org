import React from "react";
import HeroSlider from "./heroslider";
import SoFarBanner from "./sofarbanner";
import Featured from "./featured";
import BePart from "./bepart";


export default function Home(props) {
    return (
        <div>
            <HeroSlider />
            <SoFarBanner />
            <Featured />
            <BePart />
        </div>
    );
}
