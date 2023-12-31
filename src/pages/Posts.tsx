import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../api";
import { CustomSpinner, ErrorMsg, PostsList } from "../components";

export const Posts = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (isLoading) return <CustomSpinner />;
  if (isError) return <ErrorMsg err={error.message} />;

  return (
    <div>
      {data?.data.length > 0 ? (
        <PostsList posts={data?.data} />
      ) : (
        <p className="flex justify-center items-center p-4">Sin datos</p>
      )}
    </div>
  );
};
