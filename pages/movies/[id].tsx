import React from 'react';

export default function index(props) {
  console.log(props);
  return <div>电影详情页面{props.router.query.id}</div>;
}
