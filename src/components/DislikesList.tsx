import { IPosts } from "../interfaces/index";
import { PostInfo } from "./PostInfo";
import { LikeDislikeButtons } from ".";

interface IProps {
  posts: IPosts[];
}

export const DislikesList = ({ posts }: IProps) => {
  

  return (
    <div className="flex items-center justify-center">
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id} className="m-3">
              <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                <PostInfo postBody={post.body} postTitle={post.title} />
                <div className="px-6 pt-4 pb-2 flex justify-between">
                  <p className="text-black"># {post.id}</p>
                  <div>
                    <LikeDislikeButtons post={post} />
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
