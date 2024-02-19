import { useQuery } from "@tanstack/react-query";
import { getGithubRepos } from "../services/apiGithub";

export function useGithubRepos(userName: string) {
  const {
    isLoading: isLoadingRepos,
    data: githubRepos,
    error,
    refetch,
  } = useQuery({
    queryKey: ["githubRepos", userName],
    queryFn: () => getGithubRepos(userName),
  });

  return { isLoadingRepos, githubRepos, error, refetch };
}
