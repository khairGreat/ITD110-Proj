
import { } from 'react' ; 
import RecipeSvg from '../../assets/Recipe.svg'

export function BannerLogo({className = ""}) {  


    return ( 
             <img 
            className= { className }
             src = {RecipeSvg} alt="" />       

    ) ;
} 
