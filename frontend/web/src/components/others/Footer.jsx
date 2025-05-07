import {


} from "react" ;

import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import kCorp from "../../assets/Kcorp.png"; 

export const Footer = () => {


    return (


        <div
            className="
                w-full h-35 flex flex-col justify-evenly
            "

            style={ {backgroundColor : "#E2DFD2"}}
            
        >

           

                <div
                className="text-[1.2rem] self-center flex flex-row items-center gap-x-2"
                >

                <div>developed by</div>
                <a href="">
                        <img src={kCorp} alt="K Corp Logo" className="w-12" />
                </a>

                </div>


                <div className="self-center flex gap-4">
                    <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                        <FacebookIcon sx={{ fontSize: 30, color: '#1877F2', cursor: 'pointer' }} />
                    </a>
                    <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon sx={{ fontSize: 30, color: '#0A66C2', cursor: 'pointer' }} />
                    </a>
                    <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                        <InstagramIcon sx={{ fontSize: 30, color: '#C13584', cursor: 'pointer' }} />
                    </a>
                </div>

            

            
        </div>
    )
}