import { useState } from 'react';
import { Button } from '../Button';
import InputField from '../input';
import mkup from '../../assets/images/mkup.jpg';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');

  return (
    <div className="w-screen h-screen flex bg-white">
      {/* Form Section - 30% */}
      <div className="w-[50%] flex flex-col justify-center items-center px-6 py-10">
        {/* Tabs */}
        <div className="flex gap-8 mb-8 cursor-pointer">
          {['login', 'signup'].map((tab) => (
            <p
              key={tab}
              onClick={() => setActiveTab(tab as 'login' | 'signup')}
              className={`text-gray-500 pb-1 border-b-2 transition-all capitalize ${
                activeTab === tab
                  ? 'border-cyan-500 font-semibold text-cyan-600'
                  : 'border-transparent hover:text-cyan-400'
              }`}
            >
              {tab}
            </p>
          ))}
        </div>

        {/* Form Section */}
        <div className="flex max-w-sm w-[50%] justify-center flex-col items-center space-y-1 bg">
          <InputField
            id="email"
            label="Email"
            className="  border-gray-300 rounded-lg w-full "
          />
          <InputField
            id="password"
            type="password"
            label="Password"
            className="  border-gray-300 rounded-lg w-full"
          />

        
          <Button
            onClick={() => navigate('/profile')}
            className=" mt-6 p-2 rounded-lg w-full"
            variant="primary"
          >
            {activeTab === 'login' ? 'Login' : 'Sign Up'}
          </Button>

  {/* Divider */}
  <div className="flex items-center w-full my-4">
    <div className="flex-grow h-px bg-gray-300" />
    <span className="mx-2 text-sm text-gray-500">or</span>
    <div className="flex-grow h-px bg-gray-300" />
  </div>

  {/* Google Button */}
  <button
    className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg w-full py-2 hover:bg-gray-100 transition"
    onClick={() => console.log('Google auth')}
  >
    <img
      src="https://www.svgrepo.com/show/475656/google-color.svg"
      alt="Google"
      className="w-5 h-5"
    />
    <span className="text-sm text-gray-300">Continue with Google</span>
  </button>
        </div>

        {/* Footer */}
        <div className="mt-6 text-sm text-gray-600 flex gap-1">
          <p>
            {activeTab === 'login'
              ? "Don't have an account?"
              : 'Already have an account?'}
          </p>
          <span
            onClick={() =>
              setActiveTab(activeTab === 'login' ? 'signup' : 'login')
            }
            className="text-cyan-600 hover:underline cursor-pointer"
          >
            {activeTab === 'login' ? 'Sign up' : 'Login'}
          </span>
        </div>
      </div>

      {/* Image Section - 70% */}
      <div className="w-[50%] flex items-center justify-center">
        <img
          src={mkup}
          alt="mockup"
          className="max-h-[90%] max-w-[90%] object-contain rounded-xl shadow-2xl"
        />
      </div>
    </div>
  );
}
