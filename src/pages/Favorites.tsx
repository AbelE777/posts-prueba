import { useQuery } from "@tanstack/react-query";
import { getFavorites } from "../api";
import { CustomSpinner, ErrorMsg, FavoritesList } from "../components";

export const Favorites = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: getFavorites,
  });

  if (isLoading) return <CustomSpinner />;
  if (isError) return <ErrorMsg err={error.message} />;


  return (
    <div>
      {data?.data.length > 0 ? (
        <FavoritesList posts={data?.data} />
      ) : (
        <p className="flex justify-center items-center p-4">Sin favoritos</p>
      )}
    </div>
  );
};
