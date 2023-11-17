import { getImage } from '../../utils/formidable';
import { uploadImage } from '../../utils/cloudinary';
import prisma from '../../utils/db';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handleUpload(req, res) {
  const imageUploaded = await getImage(req);

  const imageData = await uploadImage(imageUploaded.path);
  console.log(prisma);
  const result = await prisma.image.create({
    data: {
      publicId: imageData.public_id,
      format: imageData.format,
      version: imageData.version.toString(),
    },
  });

  res.json(result);
}
