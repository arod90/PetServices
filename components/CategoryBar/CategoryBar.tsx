import './CategoryBar.css';
import PostList from '@/components/PostList/PostList';
import { getPostsByCategory } from '@/utils/api';

const navigation = [
  { name: 'Peluqueria', href: 'peluqueria' },
  { name: 'Paseadores', href: 'paseadores' },
  { name: 'Veterinarios', href: 'veterinarios' },
  { name: 'Productos', href: 'productos' },
];

export default async function Example() {
  // console.log(getGroomPosts);
  return (
    <div className="bg-white shadow">
      <div className="subnav">
        {navigation.map((item) => {
          return (
            <a key={item.name} href={item.href} className="subnav-item">
              {item.name}
            </a>
          );
        })}
      </div>
    </div>
  );
}
