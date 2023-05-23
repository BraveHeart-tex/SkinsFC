import prisma from '@/app/libs/prismadb';

export default async function getHallOfFamers() {
  const hallOfFamers = await prisma.player.findMany({
    where: {
      isHallOfFamer: true,
    },
  });

  return hallOfFamers;
}
