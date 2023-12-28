import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IPosts } from "../interfaces";
import { useState } from "react";
import { HiOutlineHeart, HiOutlineHandThumbDown } from "react-icons/hi2";
import { likeOrDislike } from "../api";

interface IProp {
  post: IPosts;
}
type IState = boolean | null;

export const LikeDislikeButtons = ({ post }: IProp) => {
  const initial = post.like;

  const [like, setLike] = useState<IState>(initial);
  const [dislike, setDislike] = useState<IState>(initial);
  const likeColor = initial === true ? "red" : "none";
  const dislikeColor = initial === false ? "#242424" : "none";

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
      if (like === null) {
        setLike(true);
        setDislike(false);
        handleLikeOrDislike.mutate({ id, like: true });
        console.log("Liked");
      } else if (like) {
        setLike(null);
        handleLikeOrDislike.mutate({ id, like: null });
        console.log("Removed like");
      } else {
        setLike(true);
        setDislike(false);
        handleLikeOrDislike.mutate({ id, like: true });
        console.log("Changed from dislike to like");
      }
    };

  const handleDislike =
    (id: number) => (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
      if (dislike === null) {
        setDislike(true);
        setLike(false);
        handleLikeOrDislike.mutate({ id, like: false });
        console.log("Disliked");
      } else if (dislike) {
        if(like === true) {
          setDislike(null);
          handleLikeOrDislike.mutate({ id, like: false });
          console.log("like === true");
        }else {
          setDislike(null);
          handleLikeOrDislike.mutate({ id, like: null });
          console.log("Removed dislike");
        }
      }
      else {
        setDislike(true);
        setLike(false);
        handleLikeOrDislike.mutate({ id, like: false });
        console.log("Changed from like to dislike");
      }
    };

  return (
    <>
      <span
        onClick={handleLike(post.id)}
        className="cursor-pointer inline-block rounded-full text-sm font-semibold text-gray-700 mr-2 mb-2"
      >
        <HiOutlineHeart size={20} fill={likeColor} color="red" />
      </span>
      <span
        onClick={handleDislike(post.id)}
        className="cursor-pointer inline-block rounded-full text-sm font-semibold text-gray-700 mr-2 mb-2"
      >
        <HiOutlineHandThumbDown size={20} fill={dislikeColor} />
      </span>
    </>
  );
};
