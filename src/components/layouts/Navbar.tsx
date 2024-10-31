import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeBtn from "./buttons/ThemeBtn";
import { Link, NavLink } from "react-router-dom";
import useAuthCheck from "../../hooks/useAuthCheck";
import SignUpBtn from "./buttons/SignUpBtn";
import AvatarBtn from "./buttons/AvatarBtn";
import ProductCartBtn from "./buttons/ProductCartBtn";

const Navbar: React.FC = () => {
  const isAuthenticated = useAuthCheck();

  return (
    <>
      <div className="navbar bg-base-200 md:px-6 sticky top-0 z-50">
        <div className="navbar-start">
          <Link to={`/`} className="btn btn-ghost text-xl">
            <p>
              <span className="text-cyan-600">O</span>pen
              <span className="text-cyan-600">Shop</span>
            </p>
          </Link>
        </div>
        <div className="navbar-end md:pr-4 gap-1">
          <div className="tooltip tooltip-bottom" data-tip="Wishlist">
            <NavLink
              to={`/product/wishlist`}
              className={({ isActive }) =>
                isActive
                  ? "btn btn-circle btn-ghost text-primary"
                  : "btn btn-circle btn-ghost"
              }
            >
              <FontAwesomeIcon icon={faHeart} size="lg" />
            </NavLink>
          </div>
          <ProductCartBtn />
          {isAuthenticated ? <AvatarBtn /> : <SignUpBtn />}
          <ThemeBtn />
        </div>
      </div>
    </>
  );
};

export default Navbar;
