import { useInfiniteQuery } from "@tanstack/react-query";
import { getGithubRepos } from "../services/apiGithub";

export function useAllGithubRepos(userName: string) {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["githubRepos"],
    queryFn: getGithubRepos,
    getNextPageParam: (lastPage, pages) => lastPage.message,
  });

  return {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  };
}
