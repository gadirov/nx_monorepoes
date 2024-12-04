import { useQuery } from '@tanstack/react-query';
import { get } from '@react-monorepo/config';

export const useTest = () => {
  const { data, isLoading } = useQuery<any>({
    queryKey: ['test'],
    queryFn: async () => {
      try {
        return await get('https://jsonplaceholder.typicode.com/todos');
      } catch (error) {}
    },
  });

  return { data, isLoading };
};
