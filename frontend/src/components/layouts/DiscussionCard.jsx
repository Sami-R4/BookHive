import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown, faComment, faCircleUser } from "@fortawesome/free-solid-svg-icons";

export default function DiscussionCard({ title, user, snippet, likes, comments, dataAosDelay }) {
  return (
    <div
      className="bg-white rounded-2xl shadow-md w-80 hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col justify-between"
      data-aos="fade-up"
      data-aos-delay={dataAosDelay}
    >
      {/* Author & time */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center text-gray-500 text-sm hover:text-blue-700 cursor-pointer transition-colors">
          <FontAwesomeIcon icon={faCircleUser} className="w-5 h-5 mr-2" />
          <span>{user}</span>
        </div>
        <span className="text-xs text-gray-400 italic">3 years ago</span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:underline hover:text-blue-700 cursor-pointer">
        {title}
      </h3>

      {/* Snippet */}
      <p className="text-gray-600 text-sm mb-5 line-clamp-3 leading-relaxed">
        {snippet}
      </p>

      {/* Actions */}
      <div className="flex items-center justify-between text-gray-600 text-sm">
        {/* Likes/Dislikes */}
        <div className="flex items-center gap-3 bg-gray-50 rounded-full px-3 py-1 shadow-inner">
          <button className="flex items-center gap-1 hover:text-blue-700 transition-colors cursor-pointer">
            <FontAwesomeIcon icon={faThumbsUp} />
            {likes}
          </button>
          <button className="flex items-center gap-1 hover:text-red-500 transition-colors cursor-pointer">
            <FontAwesomeIcon icon={faThumbsDown} />
          </button>
        </div>

        {/* Comments */}
        <button className="flex items-center gap-1 hover:text-blue-700 transition-colors cursor-pointer text-gray-600">
          <FontAwesomeIcon icon={faComment} />
          <span>{comments} Comments</span>
        </button>
      </div>
    </div>
  );
}
