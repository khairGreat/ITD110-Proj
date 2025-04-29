import { } from 'react';
import BgPic from "../../assets/bgPic.png"
import { LoginForm } from '../../components/forms/LoginForm';

export const LoginPage = () => { 
    
   
    
    return ( 
        <div
            className="h-screen w-full bg-cover bg-center"
            style={{

                backgroundImage: `url(${BgPic})`
            }}
        >

        <LoginForm/>
          
             
        </div>
    ) ;
}