import Sidebar from "./components/Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex justify-between">
        <Sidebar />
        <div className="h-screen bg-slate-300 overflow-scroll w-full">{children}</div>
      </div>
    </>
  );
}

export default Layout