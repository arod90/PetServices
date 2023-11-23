// import { writeFile } from 'fs/promises';
import { NextResponse } from 'next/server';
// import { getUserByClerkID } from '@/utils/auth';
import { prisma } from '@/utils/db';
import { currentUser } from '@clerk/nextjs';

// import path from 'path';
// import { uploadImage } from '../../../utils/cloudinary';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export async function POST(request) {
  // const user = await getUserByClerkID();
  const user = await currentUser();

  const data = await request.formData();
  console.log('DATA API', data);
  const title = data.get('title');
  const description = data.get('description');
  const category = data.get('category');
  const image = data.get('image');
  const phone = data.get('phone');
  const city = data.get('city');
  const hood = data.get('hood');

  if (!image) {
    return NextResponse.json('no image uploaded API');
  }

  const bytes = await image.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // save in a file
  // const filePath = path.join(process.cwd(), 'public', image.name);
  // writeFile(filePath, buffer);

  const response = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({}, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      })
      .end(buffer);
  });
  console.log(response);

  const newPost = await prisma.post.create({
    data: {
      // userId: user.id,
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
      imageUrl: response.secure_url,

      // for image array!
      // imageUrl: {
      //   create: {
      //     url: response.secure_url,
      //   },
      // },
      user: {
        connect: { clerkId: user.id },
      },
    },
  });

  return NextResponse.json({
    data: newPost,
  });
}
