import { useQuery } from '@tanstack/react-query';

export const useTest = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['test'],
    queryFn: async () => {
      try {
        return await fetch('https://jsonplaceholder.typicode.com/todos').then(
          (res) => res.json()
        );
      } catch (error) {}
    },
  });

  return { data, isLoading };
};
