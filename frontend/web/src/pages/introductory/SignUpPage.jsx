import {} from 'react';
import BgPic from "../../assets/bgPic.png" ; 
import { SignupForm  } from '../../components/forms/SignupForm'; 


export const SignUpPage = () => {  


    return ( 

        <div
             className="h-screen  bg-cover bg-center  min-w-[730px] w-full"
                        style={{
            
                            backgroundImage: `url(${BgPic})`
                        }}
        >

            <SignupForm/>
        
        </div>
    )
} 