import ErrorMessage from "../components/ErrorMessage";
import Fallback from "../components/Fallback";
import ProfileHero from "../components/ProfileHero";
import useAuthData from "../hooks/useAuthData";

const Profile = () => {
  const { data, isLoading, error } = useAuthData();

  return (
    <>
      {isLoading && <Fallback />}
      {error && <ErrorMessage error={error} />}
      {data && <ProfileHero user={data} />}
    </>
  );
};

export default Profile;
