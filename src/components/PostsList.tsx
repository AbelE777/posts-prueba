import { useState } from "react";
import { IPosts } from "../interfaces/index";
import { HiOutlineHeart, HiOutlineHandThumbDown } from "react-icons/hi2";

interface IProps {
  posts: IPosts[];
}

export const PostsList = ({ posts }: IProps) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLikeClick = () => {
    if (liked) setLiked(false);
    else setLiked(true);
    setDisliked(false);
  };

  const handleDislikeClick = () => {
    if (disliked) setDisliked(false);
    else setDisliked(true);
    setLiked(false);
  };
  return (
    <div className="flex items-center justify-center">
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="m-3">
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-gray-600">
                  {post.title}
                </div>
                <p className="text-gray-700 text-base">{post.body}</p>
              </div>
              <div className="px-6 pt-4 pb-2 flex justify-between">
                <p className="text-black"># {post.id}</p>
                <div>
                  <span
                    onClick={handleLikeClick}
                    className={`${
                      liked ? "bg-gray-200" : "bg-gray-200"
                    } cursor-pointer inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}
                  >
                    <HiOutlineHeart
                      size={20}
                      fill={liked ? "red" : "none"}
                      color={liked ? "red" : ""}
                    />
                  </span>
                  <span
                    onClick={handleDislikeClick}
                    className={`${
                      disliked ? "bg-gray-200" : "bg-gray-200"
                    } cursor-pointer inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`}
                  >
                    <HiOutlineHandThumbDown
                      size={20}
                      fill={disliked ? "#242424" : "none"}
                      color={disliked ? "#242424" : ""}
                    />
                  </span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
