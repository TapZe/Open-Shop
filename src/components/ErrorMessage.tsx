import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { errorMsgProps } from "../types/generalTypes";

const ErrorMessage: React.FC<errorMsgProps> = ({ error }) => {
  if ("status" in error) {
    const errMsg = "error" in error ? error.error : JSON.stringify(error.data);
    return (
      <div role="alert" className="alert alert-error m-5">
        <FontAwesomeIcon icon={faCircleXmark} />
        <p>
          An error has occurred:
          <span> {errMsg}</span>
        </p>
      </div>
    );
  }

  return (
    <div role="alert" className="alert alert-error m-5">
      <FontAwesomeIcon icon={faCircleXmark} />
      <p>
        An error has occurred:
        <span> {error.message}</span>
      </p>
    </div>
  );
};

export default ErrorMessage;
