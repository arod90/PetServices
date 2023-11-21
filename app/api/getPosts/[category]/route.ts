import { NextResponse } from 'next/server';

import { prisma } from '../../../../utils/db';

export async function GET({ params }: any) {
  const posts = await prisma.post.findMany({
    where: { category: { name: params.category } },
  });
  return NextResponse.json(posts);
}
