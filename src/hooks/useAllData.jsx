import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';

const useAllData = () => {
    const axiosData = useAxios();
    const { isPending, error, data: course, refetch } = useQuery({
        queryKey: ['course'],
        queryFn: () =>
            axiosData.get(`/api/course`)
                .then(res => {
                    return res.data
                })
    })
    return { isPending, error, course, refetch }
};

export default useAllData;