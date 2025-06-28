import { useState } from 'react';
import { Button } from '../Blocks/Button';
import InputField from '../Blocks/input';
import mkup from '../../assets/images/mkup.jpg';
import { LoginComponentProps } from './types';

const LoginComponent = (props: LoginComponentProps) => {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');

  return (
    <div className="w-screen h-screen flex bg-white">
      <div className=" w-full md:w-[50%] flex flex-col justify-center items-center px-6 py-10">
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

        <div className="flex max-w-sm w-[50%] justify-center flex-col items-center space-y-1 bg">
          <form
            onSubmit={(e) => {
              e.preventDefault(); // prevent default form submission

              if (activeTab === 'login') {
                props.onLogin(e); // or your login logic here
              } else if (activeTab === 'signup') {
                props.onSignup(e); // or your signup logic here
              }
            }}
            className="w-full"
          >
            <InputField
              id="email"
              label="Email"
              value={props.email}
              onChange={(e) => props.setEmail(e.target.value)}
              className="  border-gray-300 rounded-lg w-full "
            />
            <InputField
              id="password"
              type="password"
              label="Password"
              value={props.password}
              onChange={(e) => props.setPassword(e.target.value)}
              className="  border-gray-300 rounded-lg w-full"
            />

            <Button
              type="submit"
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

            <button
              className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg w-full py-2 hover:bg-gray-100 transition"
              onClick={() => console.log('Google auth')}
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              <span className="text-sm text-gray-300">
                Continue with Google
              </span>
            </button>
          </form>
        </div>

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

      <div className=" hidden md:flex w-[50%]  items-center justify-center">
        <img
          src={mkup}
          alt="mockup"
          className="max-h-[90%] max-w-[90%] object-contain rounded-xl shadow-2xl"
        />
      </div>
    </div>
  );
};

export default LoginComponent;
