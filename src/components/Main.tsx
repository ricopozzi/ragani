import Image from "next/image";

export function Main() {
  return (
    <>
      <div
        id='start'
        className='flex flex-col bg-indigo-500 max-w-screen h-[70vh]'
      >
        <div
          className='z-10 absolute left-0 right-0 w-[90vw] md:min-w-[25rem] mx-auto  md:left-[10vw] md:right-auto overflow-auto
           top-64 md:w-[25vw] h-64 p-4 bg-zinc-900/50 backdrop-blur-sm rounded-md flex flex-col items-center justify-center'
        >
          <Image
            src='/ragani.png'
            width={350}
            height={150}
            objectFit='contain'
            alt=''
          />
        </div>

        <img
          src='bgmuro.jpg'
          alt='mm nautica ilhabela sp'
          className='w-screen object-cover h-[70vh] backdrop-saturate-50'
        />
      </div>

      <h2 className='text-center mt-12 text-4xl md:text-7xl md:w-2/3 md:mx-auto font-black leading-9 text-slate-700 px-2 text-transparent bg-clip-text bg-gradient-to-br from-rose-400 via-red-500 to-red-800'>
        Tudo para a sua obra com o melhor preço da cidade!
      </h2>
    </>
  );
}
