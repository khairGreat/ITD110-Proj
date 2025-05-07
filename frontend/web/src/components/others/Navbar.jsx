import { AppBar 

 } from "@mui/material"
import { LoginBtn  } from "../buttons/loginBtn"
import { SignupBtn  } from "../buttons/SignUpBtn"
import { BannerLogo } from "./BannerLogo";
import { HomeBtn } from "../buttons/HomeBtn";
import { AboutBtn } from "../buttons/AboutBtn";
import { Link} from "react-router-dom" ;

const btnWIDTH_HEIGHT = 'h-10 w-30' ; 


export function Navbar() {
    return (
      <div className= 'bg-white h-30 w-full sticky z-50  top-0 flex justify-center '

      >

        <Link
          to="/"
        >
          <BannerLogo className="h-40" />
        </Link>
        <div className="w-250  flex justify-evenly  pt-12">
          <HomeBtn className= {btnWIDTH_HEIGHT} />
          <AboutBtn className= {btnWIDTH_HEIGHT}/>
          <LoginBtn  className= { btnWIDTH_HEIGHT}/>
          <SignupBtn
          
          className= { btnWIDTH_HEIGHT } />

        </div>
      </div>
    );
  }