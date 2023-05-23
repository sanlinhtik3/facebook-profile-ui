import Sidebar from "./components/Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-3 h-screen bg-slate-100">
            <Sidebar/>
        </div>
        <div className=" col-span-9 h-screen bg-slate-300">
            {children}
        </div>
      </div>
    </>
  );
}

export default Layout