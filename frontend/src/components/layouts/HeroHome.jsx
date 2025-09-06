import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import { useEffect } from 'react';
export default function HeroHome(){
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="home-hero space-y-4 mt-0" data-aos="fade-up" data-aos-duration="1000">
            {/* Title */}
            <h1 className="font-bold text-5xl text-accent-gold" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1500">Welcome to Booklyn</h1>
            <p className="text-xl text-gray-300 italic" data-aos="fade-down" data-aos-delay="600" data-aos-duration="1500">Discover, Discuss, and Collect Books You Love.</p>
            {/* Search Bar */}
            <div className='relative w-3/4 max-w-xl mx-auto my-3' data-aos="zoom-in" data-aos-delay="900" data-aos-duration="1500">
                <input type="text" className="w-full px-4 py-3 rounded-full border border-gray-300 focus:border-accent-gold focus:ring-1 focus:ring-accent-gold outline-none placeholder-gray-500 relative backdrop-blur-lg" placeholder="Search for books..."/>
                <button className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-accent-gold text-white px-3 py-2 rounded-full hover:bg-yellow-400 transition cursor-pointer transform-translate transition duration-300 hover:scale-108'>
                    <FontAwesomeIcon icon={faSearch} className="w-4 h-4"></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
}