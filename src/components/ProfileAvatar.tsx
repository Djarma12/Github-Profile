type ProfileAvatarType = {
  avatar: string;
};

function ProfileAvatar({ avatar }: ProfileAvatarType) {
  return (
    <div className="profile__item profile__item--light">
      <img className="profile__img" src={avatar} alt="GitHub avatar" />
    </div>
  );
}

export default ProfileAvatar;
