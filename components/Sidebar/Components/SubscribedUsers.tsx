import style from './SubscribedUsers.module.css';
import prisma from '@lib/prismadb';
import { getServerSession } from 'next-auth';

export default async function SubscribedUsers() {

  const session = await getServerSession(); 

  return (
    <>

    </>
  )
}