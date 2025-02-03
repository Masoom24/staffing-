const Preview = ({ formData }) => {
    return (
      <table className="table w-full">
        <tbody>
          {Object.entries(formData).map(([key, value]) => (
            <tr key={key} className="border-b">
              <td className="font-semibold capitalize p-2">
                {key.replace(/([A-Z])/g, " $1")}
              </td>
              <td className="p-2">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Preview;
  