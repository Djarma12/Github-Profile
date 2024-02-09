import { ReactNode, createContext, useContext, useState } from "react";
import { useGithubProfile } from "../hooks/useGithubProfie";

type GithubContextType = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  githubProfile: unknown;
};

const githubContextObj = {
  search: "",
  setSearch: () => {},
  isLoading: false,
  githubProfile: {},
};

const GithubContext = createContext<GithubContextType>(githubContextObj);

type ChildrenType = {
  children?: ReactNode;
};

const GithubProvider = ({ children }: ChildrenType) => {
  const [search, setSearch] = useState("github");
  const { isLoading, githubProfile } = useGithubProfile(search);

  return (
    <GithubContext.Provider
      value={{ search, setSearch, isLoading, githubProfile }}
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
