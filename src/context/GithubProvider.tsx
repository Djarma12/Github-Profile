import { ReactNode, createContext, useContext, useState } from "react";
import { useGithubProfile } from "../hooks/useGithubProfie";
import { useGithubRepos } from "../hooks/useGithubRepos";
import {
  GithubProfileData,
  GithubProfileError,
  RepoType,
} from "../services/apiGithub";

type GithubContextType = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  isLoadingProfile: boolean;
  githubProfile?: GithubProfileData | GithubProfileError;
  isLoadingRepos: boolean;
  githubRepos?: RepoType[] | GithubProfileError;
};

const githubContextObj = {
  search: "",
  setSearch: () => {},
  isLoadingProfile: false,
  githubProfile: undefined,
  isLoadingRepos: false,
  githubRepos: [],
};

const GithubContext = createContext<GithubContextType>(githubContextObj);

type ChildrenType = {
  children?: ReactNode;
};

const GithubProvider = ({ children }: ChildrenType) => {
  const [search, setSearch] = useState("github");
  const { isLoadingProfile, githubProfile } = useGithubProfile(search);
  const { isLoadingRepos, githubRepos } = useGithubRepos(search);

  return (
    <GithubContext.Provider
      value={{
        search,
        setSearch,
        isLoadingProfile,
        githubProfile,
        isLoadingRepos,
        githubRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

function useGithub() {
  const context = useContext(GithubContext);

  if (JSON.stringify(context) === JSON.stringify(githubContextObj))
    throw new Error("GithubContext was used outside the  GithubProvider");
  return context;
}

export { GithubProvider, useGithub };
