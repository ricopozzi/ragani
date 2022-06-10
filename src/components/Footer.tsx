import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <>
      <footer className='min-h-12 bg-gradient-to-r from-[#e01f2d] to-[#943c22] flex justify-center py-4 gap-x-2'>
        <div
          onClick={() => {
            window.open("https://www.instagram.com/ragani_ilhabela/");
          }}
          className='bg-gray-800 rounded-lg hover:cursor-pointer'
        >
          <AiOutlineInstagram size={38} color={"white"} />
        </div>
        <div
          onClick={() => {
            window.open(
              "https://www.facebook.com/Ragani-Materiais-para-Constru%C3%A7%C3%A3o-717264738411505/"
            );
          }}
          className='bg-gray-800 rounded-lg hover:cursor-pointer w-9 h-38 flex justify-center items-center'
        >
          <FaFacebook size={30} color={"white"} className='rounded-2xl' />
        </div>
        <div
          onClick={() => {
            window.open(
              "https://api.whatsapp.com/send?phone=5512997556646&text=Ol%C3%A1%2C%20vim%20pelo%20site!"
            );
          }}
          className='bg-gray-800 rounded-lg hover:cursor-pointer w-9 h-38 flex justify-center items-center'
        >
          <FaWhatsapp size={30} color={"white"} className='rounded-2xl' />
        </div>
      </footer>
    </>
  );
}
