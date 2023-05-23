import NavLink from "./NavLink";

const Sidebar = () => {
  return (
    <>
      <div className="p-5 space-y-4">
        <div className=" flex items-center justify-between">
          <h1 className=" text-xl font-bold">Manage Page</h1>
          <i class="bi bi-layout-sidebar-inset"></i>
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