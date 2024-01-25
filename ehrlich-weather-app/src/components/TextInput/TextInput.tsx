// TextInput.js
import "./TextInput.css";

interface TextInputProps {
  value?: string | undefined;
  onChange?: (e: { target: { value: string } }) => void;
  placeholder: string;
}

const TextInput = ({ value, onChange, placeholder }: TextInputProps) => {
  return (
    <div className="text-input-container">
      <div className="input-with-icon">
        <input value={value} onChange={onChange} placeholder={placeholder} />
        <div className="search-icon">
          <i className="fas fa-search"></i>
        </div>
      </div>
    </div>
  );
};

export default TextInput;
