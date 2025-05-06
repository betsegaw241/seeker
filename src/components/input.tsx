// InputField.jsx

const InputField = ({
  id = 'defaultInput',
  type = 'text',
  label = '',
  placeholder = '',
  className = '',
}) => {
  return (
    <div className="w-full">
      <label htmlFor={id} className="label-text text-black">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={`${className}  bg-transparent border p-2 border-gray-300 rounded-full px-4  text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300`}
      />
    </div>
  );
};

export default InputField;
