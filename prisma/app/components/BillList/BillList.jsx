import React from "react";
import Button from "../Button/Button";

const BillList = () => {
  return (
    <div className="h-auto my-8 ">
      <table className="w-full text-center rounded-xl py-10 bg-gray-200">
        <thead className="border-b h-16   border-black/20">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Location</th>
            <th>Hobby</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className="h-10 border-b    border-black/20">
          <tr>
            <td>4524</td>
            <td>Ahmad</td>
            <td>Email</td>
            <td>85454545</td>
            <td>Faislabad</td>
            <td>Photography</td>
            <td>
              <Button title={"Edit"} />
            </td>
            <td>
              <button className="py-2 px-4 bg-green-600 rounded-md my-2 font-bold text-white">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BillList;
