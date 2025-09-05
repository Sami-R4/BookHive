import Navbar from "../components/layouts/Navbar";
import Hero_home from "../components/layouts/Hero_home";

export default function Home(){
    return(
        <div className="font-manrope">
            <Navbar/>
            <Hero_home/>
        </div>
    );
}