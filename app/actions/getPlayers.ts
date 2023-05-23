import prisma from '@/app/libs/prismadb';

export default async function getPlayers() {
  const players = await prisma.player.findMany({});

  if (!players || players.length === 0) {
    return [];
  }

  return players;
}
