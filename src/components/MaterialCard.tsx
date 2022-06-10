import Image from "next/image";

interface MaterialCardProps {
  title: string;
  bgUrl: string;
  description: string;
}

export function MaterialCard({ title, bgUrl, description }: MaterialCardProps) {
  return (
    <>
      <div className=' mx-auto md:w-[20vw] h-80 bg-gradient-to-r from-[#e01f2d] to-[#943c22] flex flex-col pt-2 px-4 rounded-xl mt-6 shadow-2xl shadow-[#b6353b83]'>
        <Image
          src={`${bgUrl}`}
          objectFit='contain'
          width={200}
          height={200}
          className='drop-shadow-xl'
        />
        <p className='text-white font-bold text-3xl drop-shadow-md'>{title}</p>
        <p className='text-white font-normal text-xl mt-3 drop-shadow-sm'>
          {description}
        </p>
      </div>
    </>
  );
}
