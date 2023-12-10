import Logo from "../../assets/logo.png";
import {
    ArrowLeftOnRectangleIcon,
  BookOpenIcon,
  BookmarkSquareIcon,
  ClipboardDocumentListIcon,
  Cog8ToothIcon,
  SquaresPlusIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  return (
    <div className="w-full h-screen bg-white p-5 flex flex-col justify-between gap-7">
      <div className="flex flex-col gap-5 border-white border-b-grey border-2 border-dashed pb-6 w-full">
        <div className="flex items-center gap-5">
          <img src={Logo} alt="logo" className="h-10 w-10 rounded-md" />
          <h1 className="text-2xl font-bold">Eazischool</h1>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex p-3 items-center gap-2 hover:bg-primary-teal text-grey hover:text-dark-teal rounded-md cursor-pointer ">
            <SquaresPlusIcon className="h-7 w-10" />
            <p className="font-bold text-sm capitalize">Dashboard</p>
          </div>
          <div className="flex p-3 items-center gap-2 hover:bg-primary-teal text-grey hover:text-dark-teal rounded-md cursor-pointer ">
            <UserIcon className="h-7 w-7" />
            <p className="font-bold text-sm capitalize">Profile</p>
          </div>
          <div className="flex p-3 items-center gap-2 hover:bg-primary-teal text-grey hover:text-dark-teal rounded-md cursor-pointer ">
            <BookOpenIcon className="h-6 w-6 text-blue-500" />
            <p className="font-bold text-sm capitalize">Courses</p>
          </div>
          <div className="flex p-3 items-center gap-2 hover:bg-primary-teal text-grey hover:text-dark-teal rounded-md cursor-pointer ">
            <ClipboardDocumentListIcon className="h-7 w-7" />
            <p className="font-bold text-sm capitalize">Library Management</p>
          </div>
          <div className="flex p-3 items-center gap-2 hover:bg-primary-teal text-grey hover:text-dark-teal rounded-md cursor-pointer ">
            <BookmarkSquareIcon className="h-7 w-7" />
            <p className="font-bold text-sm capitalize">Timetable</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex p-3 items-center gap-2 hover:bg-primary-teal text-grey hover:text-dark-teal rounded-md cursor-pointer ">
          <Cog8ToothIcon className="h-7 w-7" />
          <p className="font-bold text-sm capitalize">Settings</p>
        </div>
        <div className="flex p-3 items-center gap-2 hover:bg-primary-teal text-grey hover:text-dark-teal rounded-md cursor-pointer ">
          <ArrowLeftOnRectangleIcon className="h-7 w-7" />
          <p className="font-bold text-sm capitalize">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
