import { Navbar } from "../../components/others/Navbar";
import { Button } from "@mui/material";
import { ShrimpVisual } from "../../components/others/ShrimpVisual";

export function WelcomePage() {
  return (
    <div className="w-[90vw] max-w-full min-w-[600px] mx-auto">

      {/* NAVBAR */}
      <Navbar />

      {/* WELCOME PAGE CONTENT */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between h-auto md:h-[70vh] py-10 min-w-[600px]">

        {/* LEFT */}
        <div className="flex-1 flex flex-col justify-center items-start px-6 md:pl-20">
          <h1 className="font-unlock font-bold text-4xl md:text-7xl mb-4">
            Learn. Cook. Share
          </h1>
          <h1 className="font-bold font-unlock text-4xl md:text-7xl mb-6">
            Cooking Made Easy.
          </h1>

          <p className="text-lg md:text-2xl mb-8 text-justify w-[70%]">
            Say good bye to boring meals and hello to a world of flavor.
            Discover new recipes, share your culinary creations, and connect with food lovers around the globe.
          </p>

          <Button
            variant="contained"
            sx={{ backgroundColor: "#FF1F06" }}
            className="capitalize font-primary w-40"
          >
            Browse Recipe
          </Button>
        </div>

        {/* RIGHT */}
        <ShrimpVisual className="flex-1 w-full max-w-[400px] md:max-w-[500px]" />

      </div>
    </div>
  );
}
