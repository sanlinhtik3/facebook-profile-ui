import React from 'react'
import MyInfo from '../components/MyInfo';
import MyFeed from './MyFeed';
import inficreax from "/inficreax-logo-03_32-PM-May-11-2023-Update.png";
import fbCover from "/facebook-cover.png";


const Main = () => {
  return (
    <>
      <div className=" bg-slate-200 mb-3">
        <div className=" lg:px-10">
          <div className=" bg-slate-900 overflow-hidden">
            <img src={fbCover} className=' ' alt="" />
          </div>

          <div className="flex flex-col justify-center items-center -mt-14 border-b border-slate-500 pb-10 mb-1 lg:flex-row lg:justify-between lg:items-end">
            <div className=" flex flex-col justify-center items-center gap-5">
              <div className=" w-40 h-40 bg-slate-900 rounded-full border-4 border-slate-200 overflow-hidden z-10">
                <img src={inficreax} alt="" />
              </div>
              <div className="">
                <h1 className=" text-4xl text-center lg:text-start">Inficreax</h1>
                <div className="">
                  <span>3.7K likes</span> <span>4.4 followers</span>
                </div>
              </div>
            </div>
            <div className=" space-x-2">
              <button className=" bg-slate-800 rounded-lg px-2 py-1 text-white">
                Manage
              </button>
              <button className=" bg-slate-800 rounded-lg px-2 py-1 text-white">
                Manage
              </button>
              <button className=" bg-slate-800 rounded-lg px-2 py-1 text-white">
                Manage
              </button>
            </div>
          </div>

          <div className=" flex gap-5 ">
            <a href="" className=" py-3 px-5 border-b-4 border-lime-500">
              Post
            </a>
            <a
              href=""
              className=" py-3 px-5 border-b-4 hover:bg-slate-100 rounded-lg border-transparent"
            >
              About
            </a>
            <a
              href=""
              className=" py-3 px-5 border-b-4 hover:bg-slate-100 rounded-lg border-transparent"
            >
              Mention
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 px-5 lg:px-10 md:gap-y-3 lg:gap-x-3 md:px-5 md:max-w-2xl lg:max-w-none md:m-auto">
        <MyInfo />
        <MyFeed />
      </div>
    </>
  );
}

export default Main