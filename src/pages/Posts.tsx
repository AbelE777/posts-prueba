import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getPosts } from "../api";
import { CustomSpinner, ErrorMsg, PostsList } from "../components";

export const Posts = () => {
  const queryClient = useQueryClient();
  const {data, isLoading, isError, error} = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts
  })

  if(isLoading) return <CustomSpinner />
  if(isError) return <ErrorMsg err={error.message}/>


  
  return (
    <div>
      <PostsList posts={data?.data}/>
    </div>
  )
}
