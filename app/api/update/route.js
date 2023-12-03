import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/utils/db';
import { currentUser } from '@clerk/nextjs';
import { revalidatePath, revalidateTag } from 'next/cache';
import { v2 as cloudinary } from 'cloudinary';
import { redirect } from 'next/navigation';

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// export const revalidate = true;

export async function PATCH(request) {
  const user = await currentUser();

  const data = await request.formData();
  const title = data.get('title');
  const description = data.get('description');
  const category = data.get('category');
  const images = data.getAll('image');
  const phone = data.get('phone');
  const city = data.get('city');
  const hood = data.get('hood');
  const postid = data.get('postid');

  if (images.size === 0) {
    let updatedPost = await prisma.post.update({
      where: {
        id: postid,
      },
      data: {
        userId: user.clerkId,
        title: title,
        description: description,
        category: {
          connectOrCreate: {
            where: { name: category },

            create: { name: category },
          },
        },
        city: city,
        hood: hood,
        phone: phone,
        imageUrl: undefined,
        user: {
          connect: { clerkId: user.id },
        },
      },
    });
    revalidatePath(`/singlepost/${postid}`);

    return NextResponse.json({
      data: updatedPost,
    });
  } else {
    // Get the existing images
    const existingImages = await prisma.image.findMany({
      where: {
        postId: postid,
      },
    });

    // Delete the images from Cloudinary
    existingImages.forEach(async (image) => {
      const publicId = image.url.split('/').pop().split('.')[0];
      await cloudinary.uploader.destroy(publicId);
    });

    await prisma.image.deleteMany({
      where: {
        postId: postid,
      },
    });

    let buffers = [];
    for (const image of images) {
      const bytes = await image.arrayBuffer();
      const buffer = Buffer.from(bytes);
      // Upload buffer to Cloudinary
      buffers.push(buffer);
    }

    const uploads = buffers.map((buffer) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream({}, (err, result) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        });
        stream.end(buffer);
      });
    });

    const responses = await Promise.all(uploads);

    let updatedPost = await prisma.post.update({
      where: {
        id: postid,
      },
      data: {
        userId: user.clerkId,
        title: title,
        description: description,
        category: {
          connectOrCreate: {
            where: { name: category },

            create: { name: category },
          },
        },
        city: city,
        hood: hood,
        phone: phone,
        imageUrl: {
          create: responses.map((response) => ({
            url: response.secure_url,
          })),
        },
        user: {
          connect: { clerkId: user.id },
        },
      },
    });
    // request.revalidate(`/singlepost/${postid}`);
    // !SHITS NOT WORKING
    revalidatePath(`/singlepost/${postid}`);

    return NextResponse.json({
      data: updatedPost,
    });
  }
}
