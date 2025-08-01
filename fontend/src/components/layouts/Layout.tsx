import { Bell, ChevronDown, FilePenLine, FileUser } from 'lucide-react';
import { Outlet } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

const DashboardLayout = () => {
  const navigate = useNavigate();
  const navItems = [
    { path: '/applications', label: 'Applications' },
    { path: '/profile', label: 'Profile' },
    { path: '/stats', label: 'Applied Jobs' },
  ];

  return (
    <div className="flex h-screen w-screen bg-slate-50 overflow-hidden">
      {/* Sidebar */}
      <aside className=" mt-15 w-[25%] min-w-[250px] h-full flex flex-col items-center py-4 gap-2">
        {/* Profile Card */}
        <div className="bg-gradient-to-br h-[90%] from-blue-50 to-white w-[85%] rounded-2xl shadow-lg p-5 flex flex-col items-start gap-4">
          {/* Header Edit Icon */}
          <div className="self-end hover:bg-blue-100 p-2 rounded-full cursor-pointer text-blue-600">
            <FilePenLine size={20} />
          </div>

          <div className="flex flex-col align-middle ">
            <div>
              <p className="text-lg font-semibold text-gray-800">
                Betsegaw Abebe
              </p>
              <p className="text-sm text-gray-500">
                Software Engineer • Graphic Designer • Web Designer
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 w-full"></div>

          {/* Navigation Link */}
          <>
            {navItems.map((item) => (
              <div
                key={item.path}
                onClick={() => navigate(item.path)}
                className="flex items-center gap-2 text-blue-600 hover:bg-blue-100 px-3 py-2 rounded-lg cursor-pointer w-full transition"
              >
                <FileUser size={18} />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </>
        </div>
      </aside>

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm fixed top-0 left-0 right-0 flex justify-between items-center px-6 py-3 z-10">
          <p className="text-xl font-semibold text-gray-800">GottaWork</p>

          {/* <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-full px-4 py-1 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-1 text-sm shadow-sm transition">
              Search
            </button>
          </div> */}

          <div className="flex items-center gap-6">
            <div className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer text-gray-600">
              <Bell size={20} />
            </div>
            <div className="flex items-center gap-2 hover:cursor-pointer text-gray-600">
              <img src="" alt="pic" className="h-9 w-9 rounded-full bg-black" />
              <p className="text-sm">Me</p>
              <ChevronDown size={16} />
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="mt-20 overflow-y-auto h-full">{<Outlet />}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
