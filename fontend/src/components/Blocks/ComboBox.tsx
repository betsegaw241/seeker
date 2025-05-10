// components/ComboBox.tsx
import { useState } from 'react';
import { ChevronsUpDown, Check } from 'lucide-react';

interface ComboBoxProps {
  options: string[];
  placeholder?: string;
  onSelect?: (value: string) => void;
  defaultValue?: string;
}

const ComboBox: React.FC<ComboBoxProps> = ({
  options,
  placeholder = 'Select an option',
  onSelect = () => {},
  defaultValue = '',
}) => {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (value: string) => {
    setSelected(value);
    setQuery('');
    setIsOpen(false);
    onSelect(value);
  };

  return (
    <div className="relative max-w-sm  text-black">
      <div className="relative">
        <input
          type="text"
          role="combobox"
          aria-expanded={isOpen}
          aria-label="Custom combobox"
          value={query || selected}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onClick={() => setIsOpen(!isOpen)}
          placeholder={placeholder}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
        />
        <ChevronsUpDown
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
          size={16}
        />
      </div>

      {isOpen && (
        <div className="absolute z-50 mt-2 w-full max-h-44 overflow-y-auto bg-white shadow-lg rounded-md p-2 space-y-1">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <div
                key={index}
                tabIndex={index}
                onClick={() => handleSelect(option)}
                className={`flex items-center justify-between px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100 ${
                  selected === option ? 'bg-gray-100' : ''
                }`}
              >
                <span>{option}</span>
                {selected === option && (
                  <Check className="text-blue-500 w-4 h-4 shrink-0" />
                )}
              </div>
            ))
          ) : (
            <div className="px-3 py-2 text-sm text-gray-500">
              No matches found
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ComboBox;
