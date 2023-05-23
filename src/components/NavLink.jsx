import React from 'react'

const NavLink = ({ name = "Inficreax link", icon = "bi-bar-chart" }) => {
  return (
    <>
      <div className=" flex items-center gap-3 hover:bg-slate-200 transition-all p-2 rounded-xl">
        <i className={`bi ${icon}`}></i>
        <span>{name}</span>
      </div>
    </>
  );
};

export default NavLink