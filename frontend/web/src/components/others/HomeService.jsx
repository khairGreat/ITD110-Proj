


import { Container } from "@mui/material"
import WebIcon from "@mui/icons-material/Web" ;
import serviceImg1 from "../../assets/HomeServicesImage/BROWSING AND SEARCHING RECIPE.png";
import serviceImg2  from "../../assets/HomeServicesImage/COOKING INSTRUCTIONS.png";
import serviceImg3  from "../../assets/HomeServicesImage/UPLOAD AND DOWNLOADABLE.png";


export const HomeService = () => {

    return ( 
        
        <Container
            classname = "flex flex-col border-2 h-[150px]"
            sx = {{  mt : '100px' }}
        >

            <div
                className="flex flex-col font-bold font-secondary text-center uppercase  text-2xl"
            >
                our services
                <span>_____</span>
            </div>

            <div
                className="flex flex-row justify-between"
            >
                <div
                    className="flex-1 flex flex-col "
                >
                    
                <img src={serviceImg1} alt="" />

                </div>

                <div
                    className="flex-1"
                >

                   <img src= {serviceImg2} alt="" />

                </div>

                <div
                    className="flex-1"
                >
                    <img src= {serviceImg3} alt="" />
                </div>



            </div>
        </Container>

    ) ;
}