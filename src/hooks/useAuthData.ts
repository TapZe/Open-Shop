import { useGetUserDetailQuery } from '../redux/reducers/user/userAPI';
import { RootState } from './../redux/store';
import { useSelector } from "react-redux";

const useAuthData = () => {
    const { tokenPayload } = useSelector((state: RootState) => state.persist.user);
    const id = Number(tokenPayload?.sub) || 0;
    const { data, isLoading, error } = useGetUserDetailQuery(id);
    return { data, isLoading, error };
}

export default useAuthData;