import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { errorMsgProps } from "../types/generalTypes";

const ErrorMessage: React.FC<errorMsgProps> = ({ error }) => {
  if ("status" in error) {
    const errMsg =
      "data" in error && error.data
        ? error.data
        : "error" in error
        ? error.error
        : "Unknown error";
    return (
      <div role="alert" className="alert alert-error">
        <FontAwesomeIcon icon={faCircleXmark} />
        <p>
          An error has occurred:
          <span> {JSON.stringify(errMsg)}</span>
        </p>
      </div>
    );
  }

  return (
    <div role="alert" className="alert alert-error">
      <FontAwesomeIcon icon={faCircleXmark} />
      <p>
        An error has occurred:
        <span> {error.message}</span>
      </p>
    </div>
  );
};

export default ErrorMessage;
