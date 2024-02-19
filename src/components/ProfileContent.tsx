import { useGithub } from "../context/GithubProvider";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

function ProfileContent() {
  const { githubProfile, isLoadingProfile } = useGithub();

  return (
    <>
      {isLoadingProfile && <Heading type="heading-1">Loading...</Heading>}

      {githubProfile && "name" in githubProfile ? (
        <>
          <Heading type="heading-1">{githubProfile?.name}</Heading>
          {githubProfile.bio && (
            <Paragraph type="paragraph-1">{githubProfile.bio}</Paragraph>
          )}
        </>
      ) : (
        <Heading type="heading-1">No user</Heading>
      )}
    </>
  );
}

export default ProfileContent;
