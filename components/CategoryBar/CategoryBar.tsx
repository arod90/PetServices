'use client';
import { useState } from 'react';
import './CategoryBar.css';

const navigation = [
  { name: 'Peluqueria', href: '#' },
  { name: 'Paseadores', href: '#' },
  { name: 'Veterinarios', href: '#' },
  { name: 'Productos', href: '#' },
];

export default function Example() {
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
