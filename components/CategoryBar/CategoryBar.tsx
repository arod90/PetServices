import './CategoryBar.css';
import NavLink from '../NavLink/NavLink';

// const navigation = [
//   { name: 'Peluqueria', href: '/peluqueria', tab: 'tab1' },
//   { name: 'Paseadores', href: '/paseadores', tab: 'tab2' },
//   { name: 'Veterinarios', href: '/veterinarios', tab: 'tab3' },
//   { name: 'Productos', href: '/productos', tab: 'tab4' },
// ];

export default function Example() {
  console.log('CategoryBar render');

  return (
    <div className="bg-background">
      <div className="subnav text-textBlack text-lg">
        {/* {navigation.map((item, index) => {
          return (
            <NavLink
              // role="tabpanel"
              // id={item.tab}
              key={item.name}
              href={item.href}
              // aria-selected={selected}
              // @ts-ignore
            >
              <span>{item.name}</span>
            </NavLink>
          );
        })} */}
        <NavLink href="/peluqueria">Peluqueria</NavLink>
        <NavLink href="/paseadores">Paseadores</NavLink>
        <NavLink href="/veterinarios">Veterinarios</NavLink>
        <NavLink href="/productos">Productos</NavLink>
      </div>
    </div>
  );
}
