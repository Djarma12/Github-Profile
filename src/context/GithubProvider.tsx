import { ReactNode, createContext, useContext, useState } from "react";
import { useGithubProfile } from "../hooks/useGithubProfie";
import { useGithubRepos } from "../hooks/useGithubRepos";
import {
  GithubProfileData,
  GithubProfileError,
  RepoType,
} from "../services/apiGithub";
import { scrollToTop } from "../utils/helpers";

type GithubContextType = {
  search: SearchType;
  setUserName: (newUserName: string) => void;
  setFetchAll: (isFetchAll: boolean) => void;
  isLoadingProfile: boolean;
  githubProfile?: GithubProfileData | GithubProfileError;
  isLoadingRepos: boolean;
  githubRepos?: RepoType[] | GithubProfileError;
};

const githubContextObj = {
  search: {
    userName: "",
    fetchAll: false,
  },
  setUserName: () => {},
  setFetchAll: () => {},
  isLoadingProfile: false,
  githubProfile: undefined,
  isLoadingRepos: false,
  githubRepos: [],
};

const GithubContext = createContext<GithubContextType>(githubContextObj);

type ChildrenType = {
  children?: ReactNode;
};

export type SearchType = {
  userName: string;
  fetchAll: boolean;
};

const GithubProvider = ({ children }: ChildrenType) => {
  const [search, setSearch] = useState<SearchType>({
    userName: "github",
    fetchAll: false,
  });
  const { isLoadingProfile, githubProfile } = useGithubProfile(search.userName);
  const { isLoadingRepos, githubRepos } = useGithubRepos(search);

  const setUserName = (newUserName: string) =>
    setSearch((search) => {
      return { ...search, userName: newUserName || "github", fetchAll: false };
    });

  const setFetchAll = (isFetchAll = false) =>
    setSearch((search) => {
      if (!isFetchAll) scrollToTop();
      return { ...search, fetchAll: isFetchAll };
    });

  return (
    <GithubContext.Provider
      value={{
        search,
        setUserName,
        setFetchAll,
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
