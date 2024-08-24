import { Medals } from "@/constants";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="table-fixed w-full text-sm text-left rtl:text-right text-black">
          <thead className="text-xs text-white uppercase bg-slate-100">
            <tr>
              <th scope="col" className="px-10 py-3 text-black">
                Rank
              </th>
              <th scope="col" className="px-10 py-3 text-black">
                HMPS
              </th>
              <th scope="col" className="px-10 py-3 text-black">
                Gold Medals
              </th>
              <th scope="col" className="px-10 py-3 text-black">
                Silver Medals
              </th>
              <th scope="col" className="px-10 py-3 text-black">
                Bronze Medals
              </th>
              <th scope="col" className="px-10 py-3 text-black">
                Total
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              {Medals.map((link) => (
                <td key={link.key[0]}>{link.label[0]}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
