import "./App.scss";

import Header from "./components/Header";
import HeaderSearch from "./components/HeaderSearch";
import Main from "./components/Main";
import Profile from "./components/Profile";
import ProfileDetail from "./components/ProfileDetail";
import { useGithub } from "./context/GithubProvider";

type githubProfileData = {
  followers?: number;
  following?: number;
  location?: string;
  message?: string;
};

function App() {
  const { githubProfile, isLoading } = useGithub();

  if (isLoading) return null;

  const { followers, following, location, message } =
    githubProfile as githubProfileData;

  // console.log(githubProfile);

  return (
    <>
      <Header>
        <HeaderSearch />
      </Header>
      <Main>
        <Profile>
          <ProfileDetail name="Followers" value={String(followers || "/")} />
          <ProfileDetail name="Following" value={String(following || "/")} />
          <ProfileDetail name="Location" value={String(location || "/")} />
        </Profile>
      </Main>
    </>
  );
}

export default App;
