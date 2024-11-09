import useAuthContext from "../context/AuthContext";

function Home() {
  const { user } = useAuthContext();
  return <div>salam {user.name}</div>;
}

export default Home;
