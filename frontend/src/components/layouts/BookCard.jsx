import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { useEffect } from "react";
import AOS from "aos";

export default function BookCard({title, author, cover, price, tag, dataAosDelay}) {
  useEffect(() => {
    AOS.init();
  },[])
  return (
    <div className="bg-white rounded-md box-shadow overflow-hidden w-full max-w-sm transform transition-transform duration-200 hover:shadow-2xl my-7" data-aos="flip-left" data-aos-duration="1000" data-aos-delay={dataAosDelay}>
      
      {/* Book cover */}
      <div className="relative h-65 w-full overflow-hidden">
        <img src={cover} alt={title} className="w-full h-full object-cover" />
        
        {/* Badge on top-right */}
        <div className="absolute top-2 right-2 bg-gray-100 text-primary-blue text-xs font-semibold px-4 py-2 rounded-full">
          {tag}
        </div>
      </div>

      {/* Main content */}
      <div className="p-6 space-y-3 border-b border-gray-200">
        {/* Title and author */}
        <h3 className="text-xl text-gray-600">{title}</h3>
        <p className="text-gray-500 text-sm">By {author}</p>
        {/* Price */}
        <span className="text-lg font-bold text-gray-800">XAF {price}</span>
      </div>

      {/* Action buttons */}
      <div className="flex gap-2 p-4">
        <button className="flex-1 bg-primary-blue hover:bg-blue-600 text-white px-4 py-2 rounded-full transition-colors duration-300 cursor-pointer">
          Buy Now
        </button>
        <button className="flex-1 bg-accent-gold hover:bg-yellow-400 text-white px-4 py-2 rounded-full transition-colors duration-300 cursor-pointer">
          Details
        </button>
        <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full transition-colors duration-300 flex items-center justify-center cursor-pointer hover:text-primary-blue hover:bg-blue-200 hover:border-blue-200">
          <FontAwesomeIcon icon={faHeart} />
        </button>
      </div>

      {/* Bottom decorative element */}
      <div className="h-1 bg-primary-blue"></div>
    </div>
  );
}
