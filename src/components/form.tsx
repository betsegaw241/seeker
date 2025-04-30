import { Button } from './Button';
import InputField from './input';

export default function Form() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-cyan-500">login</h1>
      <InputField
        id="username"
        label="Username"
        className="bg-amber-50 text-black border-none focus:border-none focus:outline-none focus:ring-0  focus:shadow-none"
      />
      <InputField
        id="password"
        type="password"
        label="Password"
        className="bg-amber-50 text-black border-none focus:border-none focus:outline-none focus:ring-0  focus:shadow-none"
      />
      <div className="mt-10">
        <Button onClick={() => console.log('click')}>login</Button>
      </div>
      <div className="flex  text-sm justify-end w-100 p-2 gap-2">
        <p className="font-poppins text-black"> don't have an accoout?</p>
        <a href="#">signup</a>
      </div>
    </div>
  );
}
