import React from 'react'
import MyInfo from '../components/MyInfo';

const Main = () => {
  return (
    <>
      <div className=" bg-neutral-400 mb-3">
        <div className=" lg:px-10">
          <div className="h-96 bg-neutral-800"></div>

          <div className=" flex justify-between items-end -mt-14 border-b pb-10 mb-1">
            <div className=" flex items-end gap-5">
              <div className=" w-40 h-40 bg-neutral-600 rounded-full"></div>
              <div className="">
                <h1 className=" text-4xl">Inficreax</h1>
                <div className="">
                  <span>3.7K likes</span> <span>4.4 followers</span>
                </div>
              </div>
            </div>
            <div className=" space-x-2">
              <button className=" bg-neutral-500 rounded-lg px-2 py-1 text-white">
                Manage
              </button>
              <button className=" bg-neutral-500 rounded-lg px-2 py-1 text-white">
                Manage
              </button>
              <button className=" bg-neutral-500 rounded-lg px-2 py-1 text-white">
                Manage
              </button>
            </div>
          </div>

          <div className=" flex gap-5 ">
            <a href="" className=' py-3 px-5 border-b-4 border-lime-500'>Post</a>
            <a href="" className=' py-3 px-5 border-b-4 hover:bg-neutral-200 rounded-lg border-transparent'>About</a>
            <a href="" className=' py-3 px-5 border-b-4 hover:bg-neutral-200 rounded-lg border-transparent'>Mention</a>
          </div>

          
        </div>
      </div>

      <MyInfo/>
    </>
  );
}

export default Main