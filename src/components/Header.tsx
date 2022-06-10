import Link from "next/link";
import { CgMenu } from "react-icons/cg";
import { Menu } from "@headlessui/react";
import { DropdownMenu } from "./DropdownMenu";
import Image from "next/Image";

const linkClass =
  "cursor-pointer transition-all duration-200 text-gray-100 text-xl font-semibold hover:bg-zinc-100 hover:text-zinc-900 rounded-md min-w-16 px-2 h-8 flex justify-center items-center";

export function Header() {
  const handleClick = (e: any) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      top: location - 100,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className='h-20 flex px-2 z-40 w-full bg-zinc-800 justify-center'>
        <Image
          src='/ragani.png'
          width={150}
          height={60}
          objectFit='contain'
          className='absolute left-0'
        />
        <div className='flex w-3/4 h-full justify-center mx-auto'>
          <nav className='hidden w-full h-full md:flex justify-center items-center mx-auto gap-x-4  '>
            <a href='#start' onClick={handleClick} className={linkClass}>
              Início
            </a>
            <a href='#services' onClick={handleClick} className={linkClass}>
              Serviços
            </a>
            <a href='#team' onClick={handleClick} className={linkClass}>
              Equipe
            </a>
            <a href='#contact' onClick={handleClick} className={linkClass}>
              Contato
            </a>
          </nav>
        </div>
        <DropdownMenu handleClick={handleClick} />
      </div>
    </>
  );
}
