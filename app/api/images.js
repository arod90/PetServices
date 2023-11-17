// Might need many of these fetch fuctions for filtering images for different sections
export default async function handleFetch(req, res) {
  const images = await prisma.image.findMany();
  res.json(images);
}
