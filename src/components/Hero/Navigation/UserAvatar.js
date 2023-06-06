import Link from "../../Link";

const UserAvatar = () => {  
  //IRL we probably would use useEffect to load up the current user out of the session or whereevs.
  //here I am hardcoding for now
  return (
    <span className="user-avatar">
      <Link url="/users/jimm-joe" text="J" />
    </span>
  );
};

export default UserAvatar;