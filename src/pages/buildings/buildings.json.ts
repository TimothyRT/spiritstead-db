import { getCollection } from 'astro:content';

export async function GET() {
  const buildings = await getCollection('buildings');

  return new Response(
    JSON.stringify(
      buildings.map((b) => ({
        id: b.id,
        ...b.data,
      })),
      null,
      2
    ),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}
