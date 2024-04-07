import SearchBar from "@/components/SearchBar";
import Image from "next/image";
import LogoutButton from "@/components/LogoutButton";
import Sidebar from "@/components/Sidebar";

export default function Home() {

  return (
    <section className='flex gap-10'>
      <div className='w-fit p-10 shadow-sm border-r-[0.5px] border-gray-100 h-screen flex flex-col justify-between'>
        <div className="h-[55px] flex items-center">
          <Image
            src={'/assets/logo/logo.png'}
            width={150}
            height={100}
            alt='logo'
          />
        </div>
        <div className="flex-grow my-20">
          <Sidebar />
        </div>
        <LogoutButton />
      </div>

      <div className='flex-grow p-10 grid grid-cols-5'>
        <div className="col-span-3">
          <SearchBar />
          
        </div>
        <div className="col-span-2"></div>

      </div>

    </section >
  );

}