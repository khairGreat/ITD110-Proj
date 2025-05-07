import { } from "react";

import { Container } from "@mui/material";

import dessert from "../../assets/HomeContentImage/DESSERT.png";
import appetizer from "../../assets/HomeContentImage/APPETIZER.png";
import sunday_roaster from "../../assets/HomeContentImage/SUNDAY ROASTER.png";

export function HomeContent() {
    return (
        <Container className="mt-10 w-full h-[500px] flex gap-4">
            {/* Left Column */}
            <div
                className="flex-1 transition-transform duration-300 hover:scale-105"
                style={{
                    backgroundImage: `url(${dessert})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
            
                }}
            ></div>

            {/* Middle Column (Stacked) */}
            <div className="flex-1 transition-transform duration-300 hover:scale-105"
            
            style={{
                backgroundImage: `url(${appetizer})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            >
        
            </div>

            {/* Right Column */}
            <div
                 className="flex-1 transition-transform duration-300 hover:scale-105"
                style={{
                    backgroundImage: `url(${sunday_roaster})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            ></div>
        </Container>
    );
}
