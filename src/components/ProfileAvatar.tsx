type ProfileAvatarType = {
  avatar: string | undefined;
};

function ProfileAvatar({ avatar }: ProfileAvatarType) {
  return (
    <div className="profile__item profile__item--light">
      {avatar ? (
        <img className="profile__img" src={avatar} alt="GitHub avatar" />
      ) : (
        <span className="profile__img profile__img--no">/</span>
      )}
    </div>
  );
}

export default ProfileAvatar;
