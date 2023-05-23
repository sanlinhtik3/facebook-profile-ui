import React from 'react'
import PostBox from '../components/PostBox';
import Card from '../components/Card';

const MyFeed = () => {
  return (
    <div className="col-span-7">
      <PostBox />

      <div className="space-y-3 mt-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default MyFeed