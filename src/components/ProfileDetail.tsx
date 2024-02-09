type ProfileDetail = {
  name: "Followers" | "Following" | "Location";
  value: string;
};

function ProfileDetail({ name, value }: ProfileDetail) {
  return (
    <div className="profile__item">
      <span className="profile__item-name">{name}</span>
      <span className="profile__item-bar"></span>
      <span className="profile__item-value">{value}</span>
    </div>
  );
}

export default ProfileDetail;
