import { MdOutlinePlace } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlinePhone, AiOutlineWhatsApp } from "react-icons/ai";

export function InfoSection() {
  return (
    <>
      <section id='localize' className='px-5 min-h-44 flex mt-8'>
        <div
          style={{
            boxShadow: " 0px 3px 81px -14px #796a097b",
            WebkitBoxShadow: "0px 3px 81px -14px rgba(0,0,0,0.48)",
          }}
          className='w-11/12 lg:w-4/12 min-h-40 bg-gradient-to-r bg-gray-800   mx-auto my-auto rounded-xl p-3  flex flex-col
         '
        >
          <div className='flex'>
            <MdOutlinePlace color='white' size={28} />
            <p className='ml-4 text-white'>
              Av. Riachuelo, 6481 Praia Grande - Ilhabela, sp
            </p>
          </div>
          <div className='flex mt-2'>
            <HiOutlineMail color='white' size={28} />
            <p className='ml-4 text-white'> ragani@outlook.com.br</p>
          </div>
          <div className='flex mt-2'>
            <AiOutlinePhone color='white' size={28} />
            <p className='ml-4 text-white'>(12) 3894-1904</p>
          </div>
          <div className='flex mt-2'>
            <AiOutlineWhatsApp color='white' size={28} />
            <p className='ml-4 text-white'>(12) 99755-6646</p>
          </div>
        </div>
      </section>
    </>
  );
}
