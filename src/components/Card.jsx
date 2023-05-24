import React from 'react'

const Card = () => {
  return (
    <>
      <div className="bg-slate-100 rounded-2xl p-5 space-y-4">
        <div className="flex items-center gap-2">
          <div className=" w-10 h-10 bg-slate-800 rounded-full"></div>
          <div className="">
            <h6>Inficreax</h6>
            <span>Published by San Lin Htike · 19 m · </span>
          </div>
        </div>
        <div className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          est...
        </div>
        <div className=" h-96 bg-slate-300 rounded-xl"></div>
      </div>
    </>
  );
}

export default Card