import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Transition } from "@headlessui/react";
import { useState } from "react";

interface SubmitDataProps {
  name: string;
  email: string;
  phone: number;
}
const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().required().email(),
  phone: yup.number().required(),
});

export function ContactSection() {
  const [isShowing, setIsShowing] = useState(true);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitSuccessful },
  } = useForm<SubmitDataProps>({
    defaultValues: {
      name: "",
      email: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: SubmitDataProps) => {
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log(res.status);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div
        id='contact'
        className='mt-8 px-5 min-h-80 flex flex-col md:w-2/6 md:mx-auto duration-150'
      >
        <div>
          <h1 className='text-center mt-3 font-semibold text-lg text-gray-700'>
            Entre em contato
          </h1>
        </div>
        {isSubmitSuccessful ? (
          <div className='text-center my-10 font-semibold text-md gray-700 '>
            Enviado com Sucesso, entraremos em contato!
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='w-11/12 min-h-80 mx-auto  mt-2 rounded-lg p-6 flex flex-col'
          >
            <input
              type='text'
              className='mx-auto h-9 w-11/12 border rounded-lg border-blue-300 px-2'
              placeholder='Nome completo'
              {...register("name")}
            />
            {errors?.name && (
              <p className='mt-1 text-red-500 text-center'>
                Esse campo é necessário
              </p>
            )}
            <input
              type='text'
              className='mx-auto h-9 w-11/12 border rounded-lg border-blue-300 px-2 mt-7'
              placeholder='Email'
              {...register("email")}
            />
            {errors?.email && (
              <p className='mt-1 text-red-500 text-center'>
                Esse campo é necessário
              </p>
            )}
            <input
              type='text'
              className='mx-auto h-9 w-11/12 border rounded-lg border-blue-300 px-2 mt-7'
              placeholder='Telefone com DDD'
              {...register("phone")}
            />
            {errors?.phone && (
              <p className='mt-1 text-red-500 text-center'>
                Esse campo é necessário
              </p>
            )}
            <button
              type='submit'
              className='w-6/12 h-10 bg-blue-700 mx-auto mt-10 rounded-lg text-slate-100 hover:cursor-pointer font-semibold'
              onClick={() => setIsShowing(!isShowing)}
            >
              Enviar
            </button>
          </form>
        )}
      </div>
    </>
  );
}
