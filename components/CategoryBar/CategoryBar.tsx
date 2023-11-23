'use client';

import { useState } from 'react';
import './CategoryBar.css';

const navigation = [
  { name: 'Peluqueria', href: 'peluqueria', tab: 'tab1' },
  { name: 'Paseadores', href: 'paseadores', tab: 'tab2' },
  { name: 'Veterinarios', href: 'veterinarios', tab: 'tab3' },
  { name: 'Productos', href: 'productos', tab: 'tab4' },
];

export default function Example() {
  const [selectedIdx, setSelectedIdx] = useState();

  return (
    <div className="bg-background">
      <div className="subnav text-textBlack text-lg">
        {navigation.map((item, index) => {
          return (
            <a
              role="tabpanel"
              id={item.tab}
              key={item.name}
              href={item.href}
              // aria-selected={selected}
              // @ts-ignore
              onClick={() => setSelectedIdx(index)}
              className={`subnav-item ${
                index === selectedIdx ? 'selected' : ''
              }}`}
            >
              <span>{item.name}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
