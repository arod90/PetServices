import { prisma } from '@/utils/db';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
// NextAuth.js pakcage to roll own auth
const createNewUser = async () => {
  //clerk method to get current user info
  const user = await currentUser();
  console.log(user);

  // findUnique wont throw error if not found
  const match = await prisma.user.findUnique({
    where: {
      //@ts-ignore
      clerkId: user.id as string,
    },
  });
  if (!match) {
    // if no match this a new user
    await prisma.user.create({
      data: {
        //@ts-ignore
        clerkId: user.id,
        //@ts-ignore
        email: user?.emailAddresses[0].emailAddress,
      },
    });
  }

  redirect('/');
};

const NewUser = async () => {
  await createNewUser();
  // creating a loading.tsx file in route folder give loading animation for free
  return <div>loading...</div>;
};

export default NewUser;
