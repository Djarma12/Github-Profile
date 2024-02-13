import { useQuery } from "@tanstack/react-query";
import { getGithubProfile } from "../services/apiGithub";

export function useGithubProfile(userName: string) {
  const {
    isLoading: isLoadingProfile,
    data: githubProfile,
    error,
  } = useQuery({
    queryKey: ["githubProfile", userName],
    queryFn: () => getGithubProfile(userName),
  });

  return { isLoadingProfile, githubProfile, error };
}
