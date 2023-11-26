// useRole.js
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useRole = (email) => {
  const axiosPublic = useAxiosPublic();

  const { data: role, isLoading } = useQuery({
    queryKey: ['role', email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/user/${email}`);
      return res.data.role;
    },
  });

  return { role, isLoading };
};

export default useRole;
