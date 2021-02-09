import React from "react";
import User from "../../types/User";
import "./UserAvatar.css";

const UserAvatar = ({ user }: { user: User }) => (
  <img
    className="UserAvatar"
    src={user.avatar_url}
    alt={`User avatar for ${user.login}`}
  />
);

export default UserAvatar;
