import { useTest } from '../hooks/useTest';

const Home = () => {
  const { data, isLoading } = useTest();
  if (isLoading) {
    return <h1 className="h-screen">Loading...</h1>;
  }
  return (
    <div>
      {data?.map((item: any) => (
        <li key={item.id}>{item?.title}</li>
      ))}
    </div>
  );
};

export default Home;
