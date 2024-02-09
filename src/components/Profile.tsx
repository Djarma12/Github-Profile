import { ReactNode } from "react";

type ProfileType = {
  children: ReactNode;
};

function Profile({ children }: ProfileType) {
  return <div className="profile">{children}</div>;
}

export default Profile;
