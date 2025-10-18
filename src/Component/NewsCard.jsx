import React from "react";
import { FaShareAlt, FaStar, FaEye } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, rating, total_view, author, thumbnail_url, details, tags } = news;

  return (
    <div className="card bg-base-100 shadow-xl border border-gray-200 mb-6">
      {/* Header */}
      <div className="flex bg-base-200 justify-between items-center p-4 border-b">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-sm">{author?.name}</h2>
            <p className="text-xs text-gray-500">
              {new Date(author?.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <button className="btn btn-ghost btn-circle text-gray-500 hover:text-gray-700">
          <FaRegBookmark size={20} />
          <FaShareAlt  size={20}/>
        </button>
      </div>

      {/* Title */}
      <h2 className="font-bold text-lg px-4 pt-4 leading-snug hover:text-primary cursor-pointer">
        {title}
      </h2>

      {/* Thumbnail */}
      <figure className="px-4 pt-4">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-xl w-full object-cover"
        />
      </figure>

      {/* Details */}
      <div className="px-4 py-3 text-sm text-gray-700">
        {details.length > 200 ? (
          <>
            {details.slice(0, 200)}...
            <span className="text-primary cursor-pointer font-semibold">
              {" "}
              Read More
            </span>
          </>
        ) : (
          details
        )}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 pb-4 text-sm text-gray-600">
        <div className="flex items-center gap-1 text-orange-500">
          <FaStar />
          <span className="font-semibold">{rating?.number}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
