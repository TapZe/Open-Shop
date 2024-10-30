import { UserProfileProps } from "../types/types";

const ProfileHero: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <>
      <div className="hero bg-base-200 rounded-xl p-6">
        <div className="hero-content flex-col lg:flex-row">
          <img
            alt="Avatar Icon"
            src="https://avatar.iran.liara.run/public"
            className="w-56 rounded-lg"
          />
          <div className="mx-4">
            <h1 className="text-5xl font-bold">
              {user.name.firstname} {user.name.lastname}
            </h1>
            <p className="text-lg mt-2">Username: {user.username}</p>
            <p className="text-lg mt-2">Email: {user.email}</p>
            <p className="text-lg mt-2">Phone: {user.phone}</p>
            <p className="text-lg mt-2">
              Address: {user.address.street} {user.address.number},{" "}
              {user.address.city}, {user.address.zipcode}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileHero;
