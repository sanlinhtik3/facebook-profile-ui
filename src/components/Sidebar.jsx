import { useState } from "react";
import NavLink from "./NavLink";

const Sidebar = () => {

  // Control Aside
  const [openAsideBar, setOpenAsideBar] = useState(false)

  const controlAside = () => {
    setOpenAsideBar(!openAsideBar);
    console.log(openAsideBar)
  }

  return (
    <>
      <div className={`h-screen bg-slate-100 w-96 p-5 space-y-4 ml-0 ${openAsideBar && '-ml-[100%]'}`}>
        <div className=" flex items-center justify-between">
          <h1 className=" text-xl font-bold">Manage Page</h1>
          <div onClick={controlAside} className={` w-10 h-10 rounded-full bg-slate-200 flex justify-center items-center ${openAsideBar && ' fixed top-5 left-5 '}`}>
            <i className="bi bi-layout-sidebar-inset"></i>
          </div>
        </div>
        <div className="">
          <h1>Inficreax</h1>
        </div>
        <hr />
        <NavLink name="Professional Dashboard" />
        <NavLink name="Insiget" icon="bi-hearts" />
        <NavLink name="Ad Center" />
        <NavLink name="Create Ads" />
        <NavLink name="Setting" icon="bi-gear" />
      </div>
    </>
  );
}

export default Sidebar