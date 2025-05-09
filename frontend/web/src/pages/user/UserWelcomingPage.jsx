


import bgW from "../../assets/bgW.png";
import { HomeDishCard } from "../../components/card/HomeDishCard";
import { Container } from "@mui/material";

import card1 from "../../assets/ProfileIntroPics/card1.png";
import card2 from "../../assets/ProfileIntroPics/card2.png";
import card3 from "../../assets/ProfileIntroPics/card3.png";
import card4 from "../../assets/ProfileIntroPics/card4.png";


export const UserWelcomingPage = () => {
    return (
        <div
            className="w-full min-h-screen flex flex-col bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${bgW})` }}
        >
           

            <div className="text-center p-10 flex flex-col">
                <span className="text-4xl font-unlock font-bold">
                    WHAT'S COOKING?
                </span>
                <span>_____________________________</span>
            </div>

            <Container className="flex flex-col items-center gap-10 pb-10">
                {/* Row 1 */}
                <div className="flex flex-col sm:flex-row gap-8">
                    <HomeDishCard
                        imgClassName="h-40 relative left-5"
                        card_img={card1}
                        dish_name="Dish One"
                        dish_type="Vegan"
                        dish_calories="250 cal"
                    />
                    <HomeDishCard
                        imgClassName="h-40 relative left-5"
                        card_img={card2}
                        dish_name="Dish Two"
                        dish_type="Meat"
                        dish_calories="500 cal"
                    />
                </div>

                {/* Row 2 */}
                <div className="flex flex-col sm:flex-row gap-8">
                    <HomeDishCard
                        imgClassName="h-40 relative left-5"
                        card_img={card3}
                        dish_name="Dish Three"
                        dish_type="Dessert"
                        dish_calories="350 cal"
                    />
                    <HomeDishCard
                        imgClassName="h-40 relative left-5"
                        card_img={card4}
                        dish_name="Dish Four"
                        dish_type="Seafood"
                        dish_calories="400 cal"
                    />
                </div>
            </Container>
           
        </div>
    );
};
