import "./App.scss";

import Header from "./components/Header";
import HeaderSearch from "./components/HeaderSearch";
import Main from "./components/Main";
import Profile from "./components/Profile";
import Repo from "./components/Repo";
import ProfileContent from "./components/ProfileContent";

function App() {
  return (
    <>
      <Header>
        <HeaderSearch />
      </Header>
      <Main>
        <Profile />
        <ProfileContent />
        <Repo />
      </Main>
    </>
  );
}

export default App;
