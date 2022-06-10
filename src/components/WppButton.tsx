import { RiWhatsappLine } from "react-icons/ri";
import Link from "next/link";

export function WppButton() {
  return (
    <>
      <Link href='https://api.whatsapp.com/send?phone=5512997556646&text=Ol%C3%A1%2C%20vim%20pelo%20site!'>
        <div className='w-16 h-16 rounded-full bg-green-400  bg-opacity-100 fixed bottom-5 right-2 flex justify-center items-center cursor-pointer'>
          <RiWhatsappLine size={38} color='rgb(20 83 45)' />
        </div>
      </Link>
    </>
  );
}
