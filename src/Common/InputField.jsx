const InputField = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  options = [],
}) => {
  return (
    <div className="mb-4 w-full min-w-0">
      <label className="block text-sm font-medium mb-1">{label}</label>
      {type === "select" ? (
        <select
          name={name}
          className="input input-bordered w-full bg-gray-200 border-none"
          value={value}
          onChange={onChange}
        >
          <option value="">Select {label}</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : type === "radio" ? (
        <div className="flex gap-4">
          {options.map((option, index) => (
            <label key={index} className="inline-flex items-center">
              <input
                type="radio"
                name={name}
                value={option}
                checked={value === option}
                onChange={onChange}
                className="radio border-lime-400"
              />
              <span className="ml-2">{option}</span>
            </label>
          ))}
        </div>
      ) : (
        <input
          type={type}
          name={name}
          className="input input-bordered w-full bg-gray-200 border-none"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default InputField;
