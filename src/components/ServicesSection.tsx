import { GiShipWheel } from "react-icons/gi";

import { MaterialCard } from "./MaterialCard";

export function ServicesSection() {
  return (
    <>
      <div id='services' className='mt-7 px-5 min-h-80'>
        <h1 className='font-bold text-2xl my-10 text-center '>Produtos</h1>
        <div className='lg:grid grid-cols-2 gap-y-3 lg:mt-7 lg:w-[80vw] xl:w-[50vw] lg:mx-auto'>
          <MaterialCard
            title='Cimento'
            description='Marcas variadas de cimento'
            bgUrl='/sacocimento.png'
          />
          <MaterialCard
            title='Areia'
            description='Tipos variados de areia'
            bgUrl='/areia.webp'
          />
          <MaterialCard
            title='Elétrica'
            description='Materiais elétricos'
            bgUrl='/eletrica.png'
          />
          <MaterialCard
            title='Hidráulica'
            description='Materiais hidráulicos'
            bgUrl='/hidraulica.png'
          />
        </div>
      </div>
    </>
  );
}
