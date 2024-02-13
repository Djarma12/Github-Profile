import "./App.scss";

import Header from "./components/Header";
import HeaderSearch from "./components/HeaderSearch";
import Heading from "./components/Heading";
import Main from "./components/Main";
import Paragraph from "./components/Paragraph";
import Profile from "./components/Profile";
import ProfileAvatar from "./components/ProfileAvatar";
import ProfileDetail from "./components/ProfileDetail";
import { useGithub } from "./context/GithubProvider";

type githubProfileData = {
  name?: string;
  bio?: string;
  followers?: number;
  following?: number;
  location?: string;
  avatar_url?: string;
  message?: string;
};

function App() {
  const { githubProfile, isLoadingProfile, githubRepos, isLoadingRepos } =
    useGithub();

  if (isLoadingProfile || isLoadingRepos) return null;

  const {
    name,
    bio,
    followers,
    following,
    location,
    avatar_url: avatar,
    message,
  } = githubProfile as githubProfileData;

  // console.log(githubProfile);

  return (
    <>
      <Header>
        <HeaderSearch />
      </Header>
      <Main>
        <Profile>
          <ProfileAvatar avatar={avatar ?? ""} />
          <ProfileDetail name="Followers" value={String(followers ?? "/")} />
          <ProfileDetail name="Following" value={String(following ?? "/")} />
          <ProfileDetail name="Location" value={String(location ?? "/")} />
        </Profile>
        <Heading type="heading-1">{name}</Heading>
        <Paragraph type="paragraph-1">{bio}</Paragraph>
      </Main>
    </>
  );
}

export default App;
