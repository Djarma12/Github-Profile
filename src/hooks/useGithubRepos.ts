import { useQuery } from "@tanstack/react-query";
import { getGithubRepos } from "../services/apiGithub";
import { SearchType } from "../context/GithubProvider";

export function useGithubRepos(search: SearchType) {
  const {
    isLoading: isLoadingRepos,
    data: githubRepos,
    error,
  } = useQuery({
    queryKey: ["githubRepos", search],
    queryFn: () => getGithubRepos(search),
  });

  return { isLoadingRepos, githubRepos, error };
}
