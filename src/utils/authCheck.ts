import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { removeCurrentToken } from '../redux/reducers/user/userSlice';

const AuthCheck = () => {
    const { tokenPayload } = useSelector((state: RootState) => state.persist.user);

    // Get the current time in seconds
    const now = () => Math.floor(Date.now() / 1000);

    // / Calculate token expiration time (assuming 'iat' is issued at time)
    const tokenExpiration = tokenPayload?.iat + (6 * 60 * 60) || 0;

    const isTokenExpired = tokenExpiration ? now() > tokenExpiration : true;

    if (isTokenExpired) {
        removeCurrentToken();
    }

    return isTokenExpired;
}

export default AuthCheck;
