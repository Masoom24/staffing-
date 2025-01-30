const InputField = ({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        type={type}
        name={name}
        className="input input-bordered w-full bg-gray-200 border-none"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField
