/**
 * A textinput component
 *
 * @param {value} string - The value to be shown in input
 * @param {onChange} function - The function that handles the onChange event of the input
 * @param {placeholder} string -  The placeholder for input
 * @type {Component}
 * @returns {TextInput Component}
 */

// style
import "./TextInput.css";

interface TextInputProps {
  value: string | undefined;
  onChange: (e: { target: { value: string } }) => void;
  placeholder: string;
}

const TextInput = ({ value, onChange, placeholder }: TextInputProps) => {
  return (
    <div className="text-input-container">
      <div className="input-with-icon">
        <input value={value} onChange={onChange} placeholder={placeholder} />
        <div className="search-icon">
          <i className="fas fa-search" />
        </div>
      </div>
    </div>
  );
};

export default TextInput;
