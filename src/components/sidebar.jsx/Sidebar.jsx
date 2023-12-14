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
    <div className="w-full md:h-screen h-screen bg-white p-5 flex flex-col md:justify-between gap-7">
      <div className="flex flex-col gap-5 border-white border-b-grey border-2 border-dashed pb-6 w-full">
        <div className="flex items-center gap-5 md:justify-start justify-center">
          <img src={Logo} alt="logo" className="h-10 w-10 rounded-md" />
          <h1 className="text-2xl font-bold md:block hidden">Eazischool</h1>
        </div>
        <div className="flex flex-col gap-3 md:text-start text-center">
          <div className="flex md:flex-row flex-col p-3 items-center gap-2 hover:bg-primary-teal text-grey hover:text-dark-teal rounded-md cursor-pointer ">
            <SquaresPlusIcon className="md:h-7 md:w-7 h-5 w-5" />
            <p className="font-normal md:font-bold md:text-sm text-xs capitalize">Dashboard</p>
          </div>
          <div className="flex md:flex-row flex-col p-3 items-center gap-2 hover:bg-primary-teal text-grey hover:text-dark-teal rounded-md cursor-pointer ">
            <UserIcon className="md:h-7 md:w-7 h-5 w-5" />
            <p className="font-normal md:font-bold md:text-sm text-xs capitalize">Profile</p>
          </div>
          <div className="flex md:flex-row flex-col p-3 items-center gap-2 hover:bg-primary-teal text-grey hover:text-dark-teal rounded-md cursor-pointer ">
            <BookOpenIcon className="md:h-7 md:w-7 h-5 w-5" />
            <p className="font-normal md:font-bold md:text-sm text-xs capitalize">Courses</p>
          </div>
          <div className="flex md:flex-row flex-col p-3 items-center gap-2 hover:bg-primary-teal text-grey hover:text-dark-teal rounded-md cursor-pointer ">
            <ClipboardDocumentListIcon className="md:h-7 md:w-7 h-5 w-5" />
            <p className="font-normal md:font-bold md:text-sm text-xs capitalize">Library Management</p>
          </div>
          <div className="flex md:flex-row flex-col p-3 items-center gap-2 hover:bg-primary-teal text-grey hover:text-dark-teal rounded-md cursor-pointer ">
            <BookmarkSquareIcon className="md:h-7 md:w-7 h-5 w-5" />
            <p className="font-normal md:font-bold md:text-sm text-xs capitalize">Timetable</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex md:flex-row flex-col p-3 items-center gap-2 hover:bg-primary-teal text-grey hover:text-dark-teal rounded-md cursor-pointer ">
          <Cog8ToothIcon className="md:h-7 md:w-7 h-5 w-5" />
          <p className="font-normal md:font-bold md:text-sm text-xs capitalize">Settings</p>
        </div>
        <div className="flex md:flex-row flex-col p-3 items-center gap-2 hover:bg-primary-teal text-grey hover:text-dark-teal rounded-md cursor-pointer ">
          <ArrowLeftOnRectangleIcon className="md:h-7 md:w-7 h-5 w-5" />
          <p className="font-normal md:font-bold md:text-sm text-xs capitalize">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
