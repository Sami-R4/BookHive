import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

export default function Hero_home(){
    return (
        <div className="home-hero space-y-4 mt-0">
            {/* Title */}
            <h1 className="font-bold text-5xl text-accent-gold">Welcome to Booklyn</h1>
            <p className="text-xl text-gray-300 italic">Discover, Discuss, and Collect Books You Love.</p>
            {/* Search Bar */}
            <div className='relative w-3/4 max-w-xl mx-auto my-3'>
                <input type="text" className="w-full px-4 py-3 rounded-full border border-gray-300 focus:border-accent-gold focus:ring-1 focus:ring-accent-gold outline-none placeholder-gray-500 relative backdrop-blur-lg" placeholder="Search for books..."/>
                <button className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-accent-gold text-white px-3 py-2 rounded-full hover:bg-yellow-400 transition cursor-pointer transform-translate transition duration-300 hover:scale-108'>
                    <FontAwesomeIcon icon={faSearch} className="w-4 h-4"></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
}