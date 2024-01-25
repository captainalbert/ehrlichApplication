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
  error?: boolean;
}

const TextInput = ({ value, onChange, placeholder, error }: TextInputProps) => {
  return (
    <div className="text-input-container">
      <div className="input-with-icon">
        <input
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          style={error ? { borderWidth: 1, borderColor: "red" } : {}}
        />
        <div className="search-icon">
          <i className="fas fa-search" />
        </div>
      </div>
    </div>
  );
};

export default TextInput;
