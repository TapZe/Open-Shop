import { Link } from "react-router-dom";
import { useGetAllUserQuery } from "../../redux/reducers/user/userAPI";
import ErrorMessage from "../../components/ErrorMessage";
import Fallback from "../../components/Fallback";

const Register: React.FC = () => {
  const { data, isLoading, error } = useGetAllUserQuery();

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="rounded-lg bg-base-300 p-6">
          <h2 className="text-2xl font-bold text-center mb-4">
            Registration Page
          </h2>
          {error && <ErrorMessage error={error} />}
          {isLoading && <Fallback />}
          {data && (
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th className="text-center">Username</th>
                    <th className="text-center">Password</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((user) => (
                    <tr key={user.id}>
                      <td className="text-center">{user.username}</td>
                      <td className="text-center">{user.password}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <p className="text-center text-accent mt-2">
            Because this is a mock website using a mock API, you can use one of
            the accounts above as a test.
          </p>
          <Link to="/auth/login">
            <button className="btn btn-primary w-full mt-4">
              Back to Login
            </button>
          </Link>
          <Link to="/">
            <button className="btn btn-secondary w-full mt-4">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Register;
