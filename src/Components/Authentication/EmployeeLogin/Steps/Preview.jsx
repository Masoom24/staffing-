import TitledCard from "../../../../Common/Card/TitledCard";
const Preview = ({ formData }) => {
  return (
    <TitledCard title={"Preview Details"}>
      <table className="table w-full">
        <tbody className="text-xs">
          {Object.entries(formData).map(([key, value]) => (
            <tr key={key} className="">
              <td className="font-semibold capitalize">
                {key.replace(/([A-Z])/g, " $1")}
              </td>
              <td>:</td>
              <td className="p-2">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TitledCard>
  );
};

export default Preview;
