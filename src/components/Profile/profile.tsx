import { Bell, ChevronDown, FilePenLine, FileUser } from 'lucide-react';
import { useState } from 'react';
import CheckboxFilter from '../checkboxfilter';

const Profile = () => {
  const [openExp, setOpenExp] = useState(false);
  const [openType, setOpenType] = useState(false);
  const [openStyle, setOpenStyle] = useState(false);
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
      <div className="flex items-center  flex-col bg-amber-400 w-[20%] mt-1 ">
        <div className="bg-gray-50 justify-start w-[80%]  rounded-1xl text-black mt-2 flex items-center flex-col align-middle  text-center">
          <div className="flex w-[90%] justify-end mt-1 ">
            <div className="hover:bg-gray-200 p-2 hover:cursor-pointer text-center rounded-full ">
              <FilePenLine size={18} />
            </div>
          </div>
          <img src="" alt="" className="bg-black w-20 h-20 rounded-full" />

          <p className="mt-2">Betsegaw Abebe</p>
          <p className="text-xs !text-gray-600">
            software engineer, graphics designer, web designerer
          </p>
          <div className="border-1 border-gray-300 w-[100%] mt-2"></div>
          <div className="pt-2 pb-2 flex gap-2.5 text-gray-500 hover:cursor-pointer">
            <FileUser />
            Applied jobs
          </div>
        </div>
        <p className="text-black">profile</p>
        <div className="bg-gray-50 justify-start w-[80%]  rounded-1xl text-black mt-2 flex items-center flex-col align-middle  text-center pb-4 mb-4">
          <CheckboxFilter
            title="Experience level"
            isOpen={openExp}
            toggle={() => setOpenExp(!openExp)}
            options={['Internship', 'Entry Level', 'Senior', 'Expert level']}
          />
          <CheckboxFilter
            title="Job type"
            isOpen={openType}
            toggle={() => setOpenType(!openType)}
            options={['full-time', 'part-time', 'contract']}
          />

          <CheckboxFilter
            title="Work style"
            isOpen={openStyle}
            toggle={() => setOpenStyle(!openStyle)}
            options={['Onsite', 'Remote']}
          />
        </div>
      </div>
    </div>
  );
};
export default Profile;
