import { useState } from "react";
import NavLink from "./NavLink";
import inficreax from "/inficreax-logo-03_32-PM-May-11-2023-Update.png";

const Sidebar = () => {

  // Control Aside
  const [openAsideBar, setOpenAsideBar] = useState(false)

  const controlAside = () => {
    setOpenAsideBar(!openAsideBar);
    console.log(openAsideBar)
  }

  return (
    <>
      <div
        className={`h-screen bg-slate-100 w-96 p-5 space-y-4 -ml-[100%] ${
          openAsideBar && "ml-0"
        }`}
      >
        <div className=" flex items-center justify-between">
          <h1 className=" text-xl font-bold">Manage Page</h1>
          <div
            onClick={controlAside}
            className={` w-10 h-10 rounded-full bg-slate-200 flex justify-center items-center ${
              !openAsideBar && " fixed top-5 left-5 "
            }`}
          >
            <i className="bi bi-layout-sidebar-inset"></i>
          </div>
        </div>
        <div className=" flex items-center gap-3">
          <img className=" w-10 h-10 rounded-full" src={inficreax} alt="" />
          <h1>Inficreax</h1>
        </div>
        <hr />
        <NavLink name="Professional Dashboard" />
        <NavLink name="Insiget" icon="bi-postcard-heart" />
        <NavLink name="Ad Center" icon="bi-megaphone" />
        <NavLink name="Create Ads" icon="bi-pencil-square" />
        <NavLink name="Setting" icon="bi-gear" />
      </div>
    </>
  );
}

export default Sidebar