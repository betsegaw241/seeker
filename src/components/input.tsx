// InputField.jsx

const InputField = ({ id = 'defaultInput',type='text', label = '', placeholder = '', className = '' }) => {
  return (
    <div className="w-100">
      <label htmlFor={id} className="label-text text-black">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={`input ${className}`}
      />
    </div>
  );
};

export default InputField;
