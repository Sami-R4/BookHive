import Navbar from "../components/layouts/Navbar";
import HeroHome from "../components/layouts/HeroHome";
import NewBooks from "../components/layouts/NewBooks";
import DiscusionSec from "../components/layouts/DiscussionSec";

export default function Home(){
    return(
        <div className="font-manrope">
            <Navbar/>
            <HeroHome/>
            <NewBooks/>
            <DiscusionSec/>
        </div>
    );
}