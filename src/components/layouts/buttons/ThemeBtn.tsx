import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { saveTheme } from "../../../redux/reducers/themeSlice";
import { faPalette } from "@fortawesome/free-solid-svg-icons";

const ThemeBtn: React.FC = () => {
  const { isDark } = useSelector((state: RootState) => state.persist.theme);
  const dispatch = useDispatch();

  const handleChangeTheme = (toDark: boolean) => {
    dispatch(saveTheme(toDark));
  };

  return (
    <>
      <div className="tooltip tooltip-bottom" data-tip="Switch Theme">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1">
            <FontAwesomeIcon icon={faPalette} />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl"
          >
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Light"
                value="light"
                onChange={() => handleChangeTheme(false)} // Update theme to light
                checked={!isDark} // Set the initial checked state based on the saved value
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Dark"
                onChange={() => handleChangeTheme(true)} // Update theme to dark
                checked={isDark} // Set the initial checked state based on the saved value
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ThemeBtn;
