import React from 'react'

const PostBox = () => {
  return (
    <div className="bg-neutral-400 rounded-xl p-5">
      <div className="flex items-center gap-2">
        <div className=" w-10 h-10 bg-slate-800 rounded-full"></div>
        <button className=" w-full bg-slate-400 rounded-full p-2 text-start">
          Waht's on your mind?
        </button>
      </div>
      <hr className=" my-2" />
      <div className=" flex justify-between items-center">
        <button className=" w-full hover:bg-slate-100 p-2 rounded-xl">
          <i className="bi bi-camera-video"></i> Live video
        </button>
        <button className=" w-full hover:bg-slate-100 p-2 rounded-xl">
          <i className="bi bi-file-image"></i> Photo/video
        </button>
        <button className=" w-full hover:bg-slate-100 p-2 rounded-xl">
          <i className="bi bi-person-video"></i> Reel
        </button>
      </div>
    </div>
  );
}

export default PostBox