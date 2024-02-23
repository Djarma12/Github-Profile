import { SearchType } from "../context/GithubProvider";

export type GithubProfileData = {
  name: string;
  bio: string;
  followers: number;
  following: number;
  location: string;
  avatar_url: string;
};

export type GithubProfileError = { message: string };

export async function getGithubProfile(
  userName: string
): Promise<GithubProfileData | GithubProfileError> {
  const res = await fetch(`https://api.github.com/users/${userName}`);
  const data = await res.json();

  return data;
}

export type RepoType = {
  id: number;
  name: string;
  description: string;
  forks: number;
  watchers: number;
  updated_at: string;
  license: { spdx_id: string };
  html_url: string;
};

export async function getGithubRepos({
  fetchAll,
  userName,
}: SearchType): Promise<RepoType[] | GithubProfileError> {
  const isFetchAllData = fetchAll ? "" : "?per_page=4";

  const res = await fetch(
    `https://api.github.com/users/${userName}/repos${isFetchAllData}`
  );

  const data = await res.json();
  return data;
}
