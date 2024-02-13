type ProfileDetail = {
  name: "Followers" | "Following" | "Location";
  value: string;
};

function ProfileDetail({ name, value }: ProfileDetail) {
  return (
    <div className="profile__item profile__item--dark">
      <span className="profile__name">{name}</span>
      <span className="profile__bar"></span>
      <span className="profile__value">{value}</span>
    </div>
  );
}

export default ProfileDetail;
