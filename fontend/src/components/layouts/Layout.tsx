import {
  Bell,
  List,
  UserRoundPen,
  Menu,
  ChartPie,
  ChevronDown,
  X,
} from 'lucide-react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const DashboardLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const navItems = [
    { path: '/applications', label: 'Applications', icon: List },
    { path: '/profile', label: 'Profile', icon: UserRoundPen },
    { path: '/stats', label: 'Stats', icon: ChartPie },
  ];
  return (
    <div className="flex h-screen w-screen bg-slate-50 overflow-hidden ">
      {/* Sidebar */}
      <aside className="mt-16 hidden sm:flex w-[20%] min-w-[250px] h-full flex-col items-center py-4 gap-2">
        <div className="bg-gradient-to-br h-[90%] from-blue-50 to-white w-[85%] rounded-2xl shadow-lg p-5 flex flex-col items-start gap-4">
          <div className="flex flex-col align-middle ">
            <div>
              <p className="text-xl font-semibold text-gray-800">
                Betsegaw Abebe
              </p>
              <p className="text-sm text-gray-500">Software Engineer</p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 w-full pb-2"></div>
          <>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <div
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`flex  items-center gap-2 px-3 py-2 rounded-lg cursor-pointer w-full transition ${
                    isActive ? 'bg-blue-100 text-blue-800' : ' hover:bg-blue-50'
                  }`}
                >
                  <Icon size={18} strokeWidth={isActive ? 3 : 2} />{' '}
                  <span className=" font-medium">{item.label}</span>
                </div>
              );
            })}
          </>
        </div>
      </aside>

      {/* Mobile Sidebar (overlay) */}
      {isMobileSidebarOpen && (
        <div className="fixed inset-0 z-20 flex">
          <div
            className="bg bg-opacity-50  h-full"
            onClick={() => setIsMobileSidebarOpen(false)}
          />

          {/* Sidebar content */}
          <aside className="relative bg-white w-64 h-full shadow-lg p-5 flex flex-col gap-4">
            <div
              className="absolute top-3 right-3 text-gray-600"
              onClick={() => setIsMobileSidebarOpen(false)}
            >
              <X size={24} />
            </div>

            <div className="mt-8">
              <p className="text-xl font-semibold text-gray-800">
                Betsegaw Abebe
              </p>
              <p className="text-sm text-gray-500">Software Engineer</p>
            </div>

            <div className="border-t border-gray-200 w-full my-3"></div>

            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <div
                  key={item.path}
                  onClick={() => {
                    navigate(item.path);
                    setIsMobileSidebarOpen(false);
                  }}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition ${
                    isActive
                      ? 'bg-blue-100 text-blue-800'
                      : 'hover:bg-blue-50 text-gray-700'
                  }`}
                >
                  <Icon size={18} strokeWidth={isActive ? 3 : 2} />
                  <span className="font-medium">{item.label}</span>
                </div>
              );
            })}
          </aside>
        </div>
      )}

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm fixed top-0 left-0 right-0 flex justify-between items-center px-6 py-3 z-10">
          <div
            onClick={() => setIsMobileSidebarOpen(true)}
            className="sm:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-gray-100"
          >
            <Menu />
          </div>
          <p className="font-bold !text-blue-800 sm:text-base lg:text-3xl">
            JobJourney
          </p>
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
