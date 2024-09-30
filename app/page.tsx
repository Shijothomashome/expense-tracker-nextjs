import Guest from "@/components/Guests";
import { currentUser } from "@clerk/nextjs/server";
import AddTransaction from "@/components/AddTransaction";
const HomePage = async () => {
  const user = await currentUser();

  if (!user) {
    return <Guest />;
  }

  return (
    <main>
      <h1>Welcome, {user.firstName}</h1>
      <AddTransaction />
    </main>
  );
};

export default HomePage;
