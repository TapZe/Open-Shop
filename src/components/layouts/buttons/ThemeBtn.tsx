import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { saveTheme } from "../../../redux/reducers/themeSlice";

const ThemeBtn: React.FC = () => {
  const { isDark } = useSelector((state: RootState) => state.persist.theme);
  const dispatch = useDispatch();

  const handleChangeTheme = () => {
    dispatch(saveTheme(!isDark));
  };

  return (
    <>
      <div className="tooltip tooltip-bottom" data-tip="Switch Theme">
        <label className="btn btn-circle btn-ghost swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            className="theme-controller"
            value="light"
            onClick={handleChangeTheme}
            checked={!isDark}
          />

          {/* sun icon */}
          <FontAwesomeIcon icon={faSun} size="lg" className="swap-on" />

          {/* moon icon */}
          <FontAwesomeIcon icon={faMoon} size="lg" className="swap-off" />
        </label>
      </div>
    </>
  );
};

export default ThemeBtn;
