import { prisma } from '../utils/db';
import Navbar from '@/components/Navbar/Navbar';

export default function Home() {
  // const getUsers = async () => {
  //   const users = await prisma.user.findMany({});
  //   return users;
  // };
  // const users = getUsers();
  // console.log(users);

  return (
    <body>
      <Navbar />
    </body>
  );
}
