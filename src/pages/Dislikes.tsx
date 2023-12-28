import { useQuery } from "@tanstack/react-query";
import { getDislikes } from "../api";
import { CustomSpinner, DislikesList, ErrorMsg, FavoritesList } from "../components";

export const Dislikes = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: getDislikes,
  });

  if (isLoading) return <CustomSpinner />;
  if (isError) return <ErrorMsg err={error.message} />;


  return (
    <div>
      {data?.data.length > 0 ? (
        <DislikesList posts={data?.data} />
      ) : (
        <p className="flex justify-center items-center p-4">Sin dislikes</p>
      )}
    </div>
  );
};
