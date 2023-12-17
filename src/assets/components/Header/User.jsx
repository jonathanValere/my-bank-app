const User = ({ userName }) => {
  return (
    <div className="user">
      <p>{userName}</p>
      <i class="fa-solid fa-circle-user"></i>
    </div>
  );
};

export default User;
