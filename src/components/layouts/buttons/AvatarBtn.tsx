import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeCurrentToken } from "../../../redux/reducers/user/userSlice";
import { useState } from "react";

const AvatarBtn = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleLogout = () => {
    dispatch(removeCurrentToken());
    setModalOpen(false);
  };

  return (
    <>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Avatar Icon"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li>
            <Link to={`/`}>Profile</Link>
          </li>
          <li>
            <button onClick={() => setModalOpen(true)}>Logout</button>
          </li>
        </ul>
      </div>

      {/* Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal modal-open">
            <div className="modal-box">
              <h2 className="font-bold text-lg">
                Are you sure you want to logout?
              </h2>
              <div className="modal-action">
                <button className="btn" onClick={handleLogout}>
                  Confirm
                </button>
                <button
                  className="btn btn-ghost"
                  onClick={() => setModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AvatarBtn;
