import React from "react";
import { NavLink } from "react-router-dom";

const Breadcrumb = () => {
  return (
    <div className="flex h-[32px] text-[#6f787e] items-center]">
      <ul className="flex items-center">
        <li className="text-[14px] pr-[0.8rem] text-[#0f62fe]">
          <NavLink to={""}>Sendo.vn</NavLink>
        </li>
        <li className="text-[14px] pr-[0.8rem]">
          <span>/</span>
        </li>
        <li className="text-[14px] pr-[0.8rem] text-[#0f62fe]">
          <NavLink to={""}>Sendo.vn</NavLink>
        </li>
        <li className="text-[14px] pr-[0.8rem]">
          <span>/</span>
        </li>
        <li className="text-[14px] pr-[0.8rem]">
          <NavLink to={""}>Sendo.vn</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Breadcrumb;
