import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IPosts } from "../interfaces";
import { useState } from "react";
import { HiOutlineHeart, HiOutlineHandThumbDown } from "react-icons/hi2";
import { likeOrDislike } from "../api/postsAPI";

interface IProp {
  post: IPosts;
}
type IState = boolean | null;

export const LikeDislikeButtons = ({ post }: IProp) => {
  const [like, setLike] = useState<IState>(post.like);
  const [dislike, setDislike] = useState<IState>(post.like);
  const likeColor = like === true ? "red" : "none";
  const dislikeColor = dislike === true ? "#242424" : "none";

  const queryClient = useQueryClient();

  const handleLikeOrDislike = useMutation({
    mutationFn: likeOrDislike,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },
  });

  const handleLike =
    (id: number) => (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
      if (like) {
        setLike(false);
        handleLikeOrDislike.mutate({ id, like: false });
      }
      else {
        setLike(true);
        handleLikeOrDislike.mutate({ id, like: true });
      }
      setDislike(false);
    };
  const handleDislike =
    (id: number) => (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
      if (dislike) {
        setDislike(false);
        handleLikeOrDislike.mutate({ id, like: false });
      }
      else {
        setDislike(true);
        handleLikeOrDislike.mutate({ id, like: true });
      }
      setLike(false);
      // 
    };

  return (
    <>
      <span
        onClick={handleLike(post.id)}
        className="cursor-pointer inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
      >
        <HiOutlineHeart size={20} fill={likeColor} color="red" />
      </span>
      <span
        onClick={handleDislike(post.id)}
        className="cursor-pointer inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
      >
        <HiOutlineHandThumbDown size={20} fill={dislikeColor} />
      </span>
    </>
  );
};
