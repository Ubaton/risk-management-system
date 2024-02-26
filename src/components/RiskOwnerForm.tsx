"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type RiskOwner = {
  id?: string;
  name: string;
  department: string;
};

type RiskOwnerFormProps = {
  onSubmit: (riskOwner: RiskOwner) => void;
  initialData?: RiskOwner;
};

const RiskOwnerForm: React.FC<RiskOwnerFormProps> = ({
  onSubmit,
  initialData,
}) => {
  const router = useRouter();
  const [riskOwner, setRiskOwner] = useState<RiskOwner>({
    name: "",
    department: "",
  });

  useEffect(() => {
    if (initialData) {
      setRiskOwner(initialData);
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRiskOwner((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(riskOwner);
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-6">
      <div className="mb-4">
        <label className="block mb-2 font-medium text-zinc-700">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={riskOwner.name}
          onChange={handleChange}
          placeholder="Enter Name"
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-sky-500"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-medium text-zinc-700">Name</label>
        <input
          type="text"
          id="department"
          name="department"
          value={riskOwner.department}
          onChange={handleChange}
          placeholder="Enter Department"
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-sky-500"
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600 focus:outline-none focus:bg-sky-600"
      >
        Submit
      </button>
    </form>
  );
};

export default RiskOwnerForm;
