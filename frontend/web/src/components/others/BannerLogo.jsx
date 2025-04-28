
import { } from 'react' ; 
import RecipeSVG from '../../assets/Recipe.svg'

export function BannerLogo({className = ""}) {  


    return ( 
             <img 
            className= { className }
             src = {RecipeSVG} alt="" />       
    
    ) ;
} 
