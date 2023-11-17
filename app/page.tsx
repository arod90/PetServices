import { prisma } from '../utils/db';
import Navbar from '@/components/Navbar/Navbar';
import Gallery from '@/components/Gallery/Gallery';

// @ts-ignore
export default function Home(props) {
  return (
    <body>
      <Navbar />
      {/* <Gallery props={props} /> */}
    </body>
  );
}
