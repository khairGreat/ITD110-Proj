import { } from "react";
import {
    Navbar
} from "../../components/others/Navbar.jsx"

import { 
    Container 
} from "@mui/material"

import { FoodPagination } from "../../components/others/FoodPagination.jsx";
import { HomeContent } from "../../components/others/HomeContent.jsx";
import { Footer } from "../../components/others/Footer.jsx";
import { HomeService } from "../../components/others/HomeService.jsx";
export const HomePage = () => {

    return ( 
        <div className="">

          <Navbar/>

        {/* Home content */}
          <div
            className="flex flex-col "
          >
            
            <FoodPagination/>
            <HomeContent/>
            <HomeService/>
            <Footer/>

            
          </div>

        </div>
    
    ); 
}