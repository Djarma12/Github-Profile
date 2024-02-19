import { useGithub } from "../context/GithubProvider";
import Spinner from "./Spinner";

type ProfileDetail = {
  name: "Followers" | "Following" | "Location";
  value: string | number | undefined;
};

function ProfileDetail({ name, value }: ProfileDetail) {
  const { isLoadingProfile } = useGithub();

  return (
    <div className="profile__item profile__item--dark">
      <span className="profile__name">{name}</span>
      <span className="profile__bar"></span>
      <span className="profile__value">
        {isLoadingProfile ? <Spinner /> : String(value ?? "/")}
      </span>
    </div>
  );
}

export default ProfileDetail;
