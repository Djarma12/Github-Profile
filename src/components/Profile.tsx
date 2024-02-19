import ProfileDetail from "./ProfileDetail";
import { useGithub } from "../context/GithubProvider";
import ProfileAvatar from "./ProfileAvatar";

function Profile() {
  const { githubProfile } = useGithub();
  let profileExists;
  if (githubProfile && "name" in githubProfile) profileExists = githubProfile;

  return (
    <div className="profile">
      <ProfileAvatar avatar={profileExists?.avatar_url} />
      <ProfileDetail name="Followers" value={profileExists?.followers} />
      <ProfileDetail name="Following" value={profileExists?.following} />
      <ProfileDetail name="Location" value={profileExists?.location} />
    </div>
  );
}

export default Profile;
