import { Navbar } from "../../components/others/Navbar.jsx";
import aboutUsImg from "../../assets/about us.png"; // Best to rename to avoid space issues

export const AboutUsPage = () => {
    return ( 
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <div className="flex-1 flex justify-center items-center p-4">
                <img 
                    src={aboutUsImg} 
                    alt="About Us" 
                    className="max-w-full h-auto rounded-b-xs shadow-lg"
                />
            </div>
        </div>
    );
}
