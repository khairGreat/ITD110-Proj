import {  } from "react"; 
import {Container, Pagination, PaginationItem } from "@mui/material";
import { Carousel } from 'react-bootstrap';
import pgpic1 from "../../assets/PaginationImage/pgpic1.png";
import pgpic2 from "../../assets/PaginationImage/pgpic2.png";
import pgpic3 from "../../assets/PaginationImage/pgpic3.png";
import pgpic4 from "../../assets/PaginationImage/pgpic4.png";
import 'bootstrap/dist/css/bootstrap.min.css';



const pagination_image = [pgpic1, pgpic2, pgpic3, pgpic4];
const carousel_items = pagination_image.map((image, index)=>{

    return <Carousel.Item key={index}>
        <img
        className=""
        src={image}
        alt={`Slide ${index + 1}`}
        />
    </Carousel.Item>
})

export const FoodPagination = () => {

  
    return (
        <div className="w-full overflow-hidden">
            <Carousel className="w-full " >
                {carousel_items}
            </Carousel>
        </div>
    );
};
