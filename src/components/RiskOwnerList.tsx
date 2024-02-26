import React from "react";

type RiskOwner = {
  _id: string;
  name: string;
  department: string;
};

type RiskOwnerListProps = {
  riskOwner: RiskOwner[];
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
};

const RiskOwnerList: React.FC<RiskOwnerListProps> = ({
  riskOwner,
  onDelete,
  onEdit,
}) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Risk Owner</h2>
      <ul>
        {riskOwner.map((riskOwner) => (
          <li key={riskOwner._id} className="mb-4 border-b pb-4">
            <div className="flex justify-between items-center">
              <div>
                <h3>{riskOwner.name}</h3>
                <p>{riskOwner.department}</p>
              </div>
              <button
                className="px-3 py-1 bg-green-500 text-zinc-50 rounded-md hover:bg-green-600 focus:outline-none focus:bg-sky-600"
                onClick={() => onEdit(riskOwner._id)}
              >
                Edit
              </button>
              <button
                className="px-3 py-1 bg-rose-500 text-zinc-50 rounded-md hover:bg-rose-600 focus:outline-none focus:bg-sky-600"
                onClick={() => onDelete(riskOwner._id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RiskOwnerList;
