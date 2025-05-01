import { FC } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface CheckboxFilterProps {
  title: string;
  isOpen: boolean;
  toggle: () => void;
  options: string[];
}

const CheckboxFilter: FC<CheckboxFilterProps> = ({
  title,
  isOpen,
  toggle,
  options,
}) => (
  <div>
    <div
      onClick={toggle}
      className="flex items-center justify-center cursor-pointer"
    >
      <p className="p-2.5">{title}</p>
      {isOpen ? <ChevronUp /> : <ChevronDown />}
    </div>
    {isOpen && (
      <div>
        {options.map((opt, i) => (
          <div key={i} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={`checkbox-${title}-${i}`}
              className="checked:after:absolute checked:after:-translate-y-1 checked:after:-translate-x-1/2  text-center text-white checked:after:content-['✔'] w-4 h-4 rounded-sm appearance-none  border border-gray-400 checked:bg-blue-600 checked:border-transparent"
            />
            <label
              htmlFor={`checkbox-${title}-${i}`}
              className="ms-2 text-sm font-medium !text-gray-500 dark:text-gray-300"
            >
              {opt}
            </label>
          </div>
        ))}
      </div>
    )}
  </div>
);

export default CheckboxFilter;
