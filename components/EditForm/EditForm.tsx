import React, { useRef, useState } from 'react';
import './editForm.css';
import { PhotoIcon } from '@heroicons/react/24/solid';
import { revalidatePath } from 'next/cache';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  title: string;
  description: string;
  phone: string;
  city: string;
  hood: string;
  category: string;
  image: string;
};
// @ts-ignore
export default function editForm({ setIsOpen, post }) {
  const [imageUploaded, setImageUploaded] = useState();
  const [imageName, setImageName] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const [count, setCount] = useState(0);
  const form = useRef(null);

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      //   title: post.title,
      //   description: post.description,
      //   phone: post.phone,
      //   city: post.city,
      //   hood: post.hood,
      //   category: post.category,
      image: post.imageUrl,
    },
  });

  // @ts-ignore
  const handleChange = (event) => {
    setImageUploaded(event.target.files[0]);
    // let names = event.target.files;
    // let imageNameCont = [];
    // for (let name of names) {
    //   imageNameCont.push(name.name);
    // }
    // @ts-ignore
    setImageName(event.target.files[0].name);
    setImagePreview(URL.createObjectURL(event.target.files[0]));
  };

  const processForm: SubmitHandler<Inputs> = (data) => {
    // setData(data);
    submitData();
  };

  // async function submitData(event: React.FormEvent<HTMLFormElement>) {
  async function submitData() {
    // event.preventDefault();

    // if (!imageUploaded) {
    //   console.log('no image uploaded FORM');
    //   return;
    // }

    try {
      // @ts-ignore
      const formData = new FormData(form.current);

      await fetch(`/api/update`, {
        method: 'PATCH',
        body: formData,
      });

      // revalidatePath(`/singlepost/${post.id}`);

      setIsOpen(false);
    } catch (error) {
      console.error(error);
    }
  }
  console.log('render');

  return (
    <>
      <div className="darkBG">
        <div className="form-cont">
          <form ref={form} onSubmit={handleSubmit(processForm)}>
            <div className="space-y-8">
              <div className="border-b border-gray-900/10 pb-8">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                  Edita tu publicacion
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
                          // name="title"
                          // !TODO finish EDIT FORM
                          defaultValue={post.title}
                          autoComplete="username"
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="Titulo para tu publicacion"
                          {...register('title', {
                            required: 'Incluir un titulo es obligatorio',
                          })}
                        />
                      </div>
                      {errors.title?.message && (
                        <p className="text-sm text-red-400">
                          {errors.title.message}
                        </p>
                      )}
                    </div>
                    <label
                      htmlFor="username"
                      className="mt-2 block text-sm font-medium leading-6 text-gray-900"
                    >
                      Numero de contacto (codigo de pais + numero sin 0)
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                          type="tel"
                          id="phone"
                          // name="phone"
                          defaultValue={post.phone}
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="Formato: 593999123456"
                          {...register('phone', {
                            required:
                              'Ingresa tu numero para que te contacten :)',
                          })}
                        />
                      </div>
                      {errors.phone?.message && (
                        <p className="text-sm text-red-400">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                    <div className="city-hood-cont flex">
                      <div className="select">
                        <label className="mt-2 block text-sm font-medium leading-6 text-gray-900">
                          Ciudad
                        </label>
                        <select className="dropdown mt-2" name="city" id="city">
                          <option value="Quito">Quito</option>
                          <option value="Guayaquil">Guayaquil</option>
                          <option value="Ambato">Ambato</option>
                          <option value="Loja">Loja</option>
                          <option value="Cuenca">Cuenca</option>
                        </select>
                      </div>
                      <div className="sector ml-6">
                        <label
                          htmlFor="username"
                          className="mt-2 block text-sm font-medium leading-6 text-gray-900"
                        >
                          Sector
                        </label>
                        <div className="mt-2">
                          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input
                              type="tel"
                              id="hood"
                              defaultValue={post.hood}
                              name="hood"
                              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                              placeholder="Ejemplo: Tumbaco"
                            />
                          </div>
                        </div>
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
                        // name="description"
                        id="description"
                        rows={3}
                        defaultValue={post.description}
                        // value={post.description}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        // defaultValue={''}
                        {...register('description', {
                          required:
                            'Ingresa una descripcion para tu publicacion',
                          maxLength: {
                            value: 1500,
                            message: 'Maximo 1500 caracteres',
                          },
                        })}
                        onChange={(e) => setCount(e.target.value.length)}
                      />
                    </div>
                    {errors.description?.message && (
                      <p className="text-sm text-red-400">
                        {errors.description.message}, caracteres: {count}
                      </p>
                    )}
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="cover-photo"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Imagen para tu publicacion
                    </label>
                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-6">
                      <div className="text-center">
                        {!imageUploaded ? (
                          // <PhotoIcon
                          //   className="mx-auto h-12 w-12 text-gray-300"
                          //   aria-hidden="true"
                          // />
                          <>
                            <img
                              className="img-preview mx-auto"
                              src={post.imageUrl}
                            ></img>
                          </>
                        ) : (
                          <>
                            <img
                              className="img-preview mx-auto"
                              src={imagePreview}
                            ></img>
                          </>
                        )}

                        <p className="text-s leading-5 text-gray-600">
                          {imageUploaded ? imageName : 'imagen actual'}
                        </p>
                        <div className="mt-2 flex text-sm leading-6 text-gray-600 ml-2">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 border border-indigo-600 p-2 mb-1 ml-2"
                          >
                            <p>
                              {!imageUploaded
                                ? 'Cambiar Imagen ?'
                                : 'Cambia tu Imagen'}
                            </p>

                            <input
                              id="file-upload"
                              type="file"
                              // name="image"
                              // accept=".jpg, .png, .gif, .jpeg"
                              // @ts-ignore
                              // multiple="multiple"
                              className="sr-only"
                              {...register('image', {
                                onChange: (e) => {
                                  handleChange(e);
                                },
                                // required: 'Sube una imagen para tu publicacion',
                              })}
                            />
                            {/* {errors.image?.message && (
                              <p className="text-sm text-red-400">
                                {errors.image.message}
                              </p>
                            )} */}
                          </label>
                          {imageUploaded && (
                            <button
                              // @ts-ignore
                              onClick={() => setImageUploaded(null)}
                              className="relative cursor-pointer rounded-md bg-white font-semibold text-red-600 border border-red-600 p-2 mb-1 ml-2"
                            >
                              Borrar Imagen
                            </button>
                          )}

                          {/* <p className="pl-1">o arrastralas aqui</p> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-900/10 pb-6">
                <div className="mt-4 space-y-10">
                  <fieldset>
                    <legend className="text-sm font-semibold leading-6 text-gray-900">
                      Categoria para tu publicacion
                    </legend>
                    {/* <p className="mt-1 text-sm leading-6 text-gray-600">
                      These are delivered via SMS to your mobile phone.
                    </p> */}
                    <div className="mt-2 radio-cont">
                      <div className="radioleft">
                        <div className="flex items-center gap-x-3">
                          <input
                            type="radio"
                            id="Peluqueria"
                            // name="category"
                            value="Peluqueria"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            {...register('category', {
                              required:
                                'Selecciona una categoria para tu publicacion',
                            })}
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
                            // name="category"
                            value="Paseadores"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            {...register('category', {
                              required:
                                'Selecciona una categoria para tu publicacion',
                            })}
                          />
                          <label
                            htmlFor="push-email"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Paseadores
                          </label>
                        </div>
                      </div>
                      <div className="radioright">
                        <div className="flex items-center gap-x-3">
                          <input
                            type="radio"
                            id="Veterinarios"
                            // name="category"
                            value="Veterinarios"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            {...register('category', {
                              required:
                                'Selecciona una categoria para tu publicacion',
                            })}
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
                            // name="category"
                            value="Productos"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            {...register('category', {
                              required:
                                'Selecciona una categoria para tu publicacion',
                            })}
                          />
                          <label
                            htmlFor="push-nothing"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Productos
                          </label>
                        </div>
                      </div>
                    </div>
                    {errors.category?.message && (
                      <p className="text-sm text-red-400">
                        {errors.category.message}
                      </p>
                    )}
                  </fieldset>
                </div>
              </div>
            </div>
            <label
              htmlFor="username"
              className="mt-2 text-sm font-medium leading-6 text-gray-900"
            >
              ID de publicacion
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="string"
                  id="postid"
                  name="postid"
                  defaultValue={post.id}
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
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
                Editar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
