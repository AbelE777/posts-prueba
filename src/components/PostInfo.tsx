interface IProps {
  postTitle: string;
  postBody: string;
}

export const PostInfo = ({ postTitle, postBody }: IProps) => {
  return (
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2 text-gray-600">{postTitle}</div>
      <p className="text-gray-700 text-base">{postBody}</p>
    </div>
  );
};
