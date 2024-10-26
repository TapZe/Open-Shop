import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { removeCurrentToken } from '../redux/reducers/user/userSlice';
import { useEffect } from 'react';

const useAuthCheck = (): boolean => {
    const { tokenPayload } = useSelector((state: RootState) => state.persist.user);
    const dispatch = useDispatch();

    // Get the current time in seconds
    const now = () => Math.floor(Date.now() / 1000);

    // Calculate token expiration time (assuming 'iat' is issued at time)
    // 6 Hours since login before expired
    const tokenExpiration = tokenPayload?.iat + (6 * 60 * 60) || 0;

    // Check authentication
    const isAuthenticated = tokenExpiration ? now() <= tokenExpiration : false;

    useEffect(() => {
        if (!isAuthenticated) {
            dispatch(removeCurrentToken());
        }
    }, [isAuthenticated, dispatch]);

    return isAuthenticated;
}

export default useAuthCheck;
