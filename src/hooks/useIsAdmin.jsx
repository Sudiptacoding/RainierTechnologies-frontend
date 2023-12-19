import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';
import { useContext } from 'react';
import { UserProvider } from '../context/AuthContext';

const useIsAdmin = () => {
    const { user, loader } = useContext(UserProvider)
    const axiosData = useAxios();
    const { isPending, error, data, refetch } = useQuery({
        queryKey: ['repoData'],
        enabled: !loader,
        queryFn: () =>
            axiosData.get(`/isAdmin?email=${user?.email}`)
                .then(res => {
                    return res.data
                })
    })
    return { isPending, error, data, refetch }
};

export default useIsAdmin;