"use client";
import React, { useState } from "react";
import EditBill from "../Editbill/Editbill";
const EditButton = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <EditBill isOpen={isOpen} onClose={() => setIsOpen(!isOpen)} />
      <button
        onClick={setIsOpen}
        className="py-2 px-4 bg-green-600 rounded-md my-2 font-bold text-white"
      >
        {title}
      </button>
    </div>
  );
};

export default EditButton;
