const UserAvatar = ({ userData }) => {
  return (
    <span className="user-avatar">
      <a href={userData.url}>{userData.username}</a>
    </span>
  )
};

export default UserAvatar
