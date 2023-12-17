import Logo from "./Logo";
import User from "./User";

const Header = () => {
  return (
    <header>
      <div className="container header-custom">
        <Logo />
        <User userName="Jonathan" />
      </div>
    </header>
  );
};

export default Header;
