import { Link } from "react-router-dom";

const SignUpBtn: React.FC = () => {
  return (
    <>
      <Link to={`/auth/login`} className="btn btn-primary">
        Sign Up
      </Link>
    </>
  );
};

export default SignUpBtn;
