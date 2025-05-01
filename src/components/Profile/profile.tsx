import { Bell, ChevronDown } from 'lucide-react';

const Profile = () => {
  return (
    <div className="h-screen w-screen">
      <div className="flex justify-between p-2.5  bg-white">
        <p className="text-black font-poppins font-bold text-2xl p-0 m-0">
          GottaWork
        </p>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search"
            className="border text-gray-400 border-gray-300 rounded-2xl px-4 py-1 focus:outline-none focus:ring-none focus:ring-blue-500"
          />
          <div className="btn bg-blue-500 border-none rounded-2xl pl-5 pr-5 text-white text-sm">
            search
          </div>
        </div>
        <div className="flex justify-between gap-10 mr-4">
          <div className="flex items-center justify-center w-10 h-10 gap-1.5 text-gray-400 hover:bg-amber-100 hover:cursor-pointer rounded-full">
            <Bell className="size-7" />
          </div>

          <div className="flex hover:cursor-pointer  gap-2 items-center justify-center text-gray-400">
            <img
              src=""
              alt="pic"
              className="border-amber-950 h-10 w-10 rounded-full bg-black"
            />
            <p className="p-0 m-0 text-gray-400">me</p>
            <ChevronDown />
          </div>
        </div>
      </div>
      <p className="text-black">profile</p>
    </div>
  );
};
export default Profile;
