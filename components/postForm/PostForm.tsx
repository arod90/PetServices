import React, { useRef, useState } from 'react';
import Router from 'next/router';
import './postForm.css';
import { RiCloseLine } from 'react-icons/ri';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';

// @ts-ignore
export default function postForm({ setIsOpen }) {
  const [imageUploaded, setImageUploaded] = useState();
  const form = useRef(null);

  // @ts-ignore
  const handleChange = (event) => {
    setImageUploaded(event.target.files[0]);
  };

  async function submitData(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!imageUploaded) {
      return;
    }

    try {
      // @ts-ignore
      const formData = new FormData(form.current);

      console.log(formData);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
        // headers: { 'Content-Type': 'multipart/form-data' },
      });

      const data = await response.json();
      console.log(data);

      // Router.push('/');
    } catch (error) {
      console.error(error);
    }
  }
  console.log('render');

  return (
    <>
      <div className="darkBG">
        <div className="form-cont">
          {/* <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: '-3px' }} />
          </button> */}
          {/* <form ref={form} onSubmit={submitData}>
            <h1>Publica un nuevo anuncio</h1>
            <label htmlFor="title">Titulo para tu anuncio</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Titulo de tu publicacion"
            />
            <label htmlFor="description">Descripcion</label>
            <textarea
              name="description"
              id="description"
              placeholder="describe tu producto"
            />
            <fieldset>
              <legend>Escogera la categoria de tu anuncio:</legend>
              <div>
                <input
                  // @ts-ignore
                  type="radio"
                  id="Peluqueria"
                  name="category"
                  value="Peluqueria"
                />
                <label htmlFor="Peluqueria">Peluqueria</label>
                <input
                  type="radio"
                  id="Paseadores"
                  name="category"
                  value="Paaseadores"
                />
                <label htmlFor="Paseadores">Paseadores</label>
                <input
                  type="radio"
                  id="Veterinarios"
                  name="category"
                  value="Veterinarios"
                />
                <label htmlFor="Veterinarios">Veterinarios</label>
                <input
                  type="radio"
                  id="Productos"
                  name="category"
                  value="Productos"
                />
                <label htmlFor="Productos">Productos</label>
              </div>
            </fieldset>
            <input
              onChange={handleChange}
              name="image"
              accept=".jpg, .png, .gif, .jpeg"
              type="file"
            ></input>
            <label htmlFor="image">carga tus imagenes</label>
            <input type="submit" value="Upload" />
          </form> */}
          <form ref={form} onSubmit={submitData}>
            <div className="space-y-8">
              <div className="border-b border-gray-900/10 pb-8">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Profile
                </h2>
                {/* <p className="mt-1 text-sm leading-6 text-gray-600">
                  This information will be displayed publicly so be careful what
                  you share.
                </p> */}

                <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Titulo
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                          type="text"
                          id="title"
                          name="title"
                          autoComplete="username"
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="Titulo para tu publicacion"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      About
                    </label>
                    <div className="mt-2">
                      <p className="mt-1 text-sm leading-6 text-gray-600">
                        Escribe una descripcion para tu publicacion
                      </p>
                      <textarea
                        name="description"
                        id="description"
                        rows={4}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        defaultValue={''}
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="cover-photo"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Imagenes
                    </label>
                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-6">
                      <div className="text-center">
                        <PhotoIcon
                          className="mx-auto h-12 w-12 text-gray-300"
                          aria-hidden="true"
                        />
                        <div className="mt-2 flex text-sm leading-6 text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Sube tus imagenes</span>
                            <input
                              id="file-upload"
                              type="file"
                              onChange={handleChange}
                              name="image"
                              // accept=".jpg, .png, .gif, .jpeg"
                              // // @ts-ignore
                              // multiple="multiple"
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1">o arrastralas aqui</p>
                        </div>
                        <p className="text-xs leading-5 text-gray-600">
                          PNG, JPG, GIF hasta 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-900/10 pb-6">
                <div className="mt-4 space-y-10">
                  <fieldset>
                    <legend className="text-sm font-semibold leading-6 text-gray-900">
                      Categoria de tu publicacion
                    </legend>
                    {/* <p className="mt-1 text-sm leading-6 text-gray-600">
                      These are delivered via SMS to your mobile phone.
                    </p> */}
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center gap-x-3">
                        <input
                          type="radio"
                          id="Peluqueria"
                          name="category"
                          value="Peluqueria"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="push-everything"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Peluqueria
                        </label>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <input
                          type="radio"
                          id="Paseadores"
                          name="category"
                          value="Paseadores"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="push-email"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Paseadores
                        </label>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <input
                          type="radio"
                          id="Veterinarios"
                          name="category"
                          value="Veterinarios"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="push-nothing"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Veterinarios
                        </label>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <input
                          type="radio"
                          id="Productos"
                          name="category"
                          value="Productos"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="push-nothing"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Productos
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-end gap-x-6">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
