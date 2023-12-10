import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import  profileImg from "../../assets/image-chess.webp";

const Navbar = () => {
  return (
    <div className="bg-white flex justify-between items-center w-full p-4 rounded-md">
        <div className="cursor-pointer">
            <h1 className="text-2xl font-bold">Welcome, <span className="text-grey font-semibold text-lg">BamideleDml</span></h1>
        </div>
        <div className="flex gap-5">
            <MagnifyingGlassIcon className="h-7 w-7 cursor-pointer" /> 
            <BellIcon className="h-7 w-7 cursor-pointer" /> 
            <img src={profileImg} alt="image" className="rounded-full h-7 w-7 cursor-pointer" />
        </div>
    </div>
  )
}

export default Navbar