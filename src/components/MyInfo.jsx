import React from 'react'

const MyInfo = () => {
  return (
    <>
      <div className="col-span-5 ">
        <div className="bg-neutral-400 rounded-xl p-5 space-y-3">
          <h2 className=" text-2xl">Intro</h2>

          <p className=" text-center">
            Web​ Development Bootcamp ဖြင့် 6 လအတွင်း​ Full​ Career-ready​
            ကိုစတင်ပါ။
          </p>

          <button className=" bg-neutral-600 rounded-lg w-full py-2">
            Edit bio
          </button>

          <div className=" space-y-3">
            <div className=" flex items-center gap-2">
              <i className="bi bi-github"></i>
              <span>Online Class</span>
            </div>
            <div className=" flex items-center gap-2">
              <i className="bi bi-youtube"></i>
              <span>sanlinhtike</span>
            </div>
            <div className=" flex items-center gap-2">
              <i className="bi bi-star-fill"></i>
              <span>Rating 5.0 (26 reviews)</span>
            </div>
            <button className=" bg-neutral-600 rounded-lg w-full py-2">
              Edit Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyInfo