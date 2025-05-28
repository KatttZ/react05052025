// import React from "react";
// import FetchPostByIdApp from "../solutions/FetchPostByIdApp"; //@ts-ignore
import RecipeFetch from '../notes/RecipeFetch' //@ts-ignore
import Counter from '../notes/Counter'
import FetchPosts from '../notes/FetchPosts'
import Timer from '../notes/Timer'
import AutoFetchPosts from '../notes/AutoFetchPosts'

export default function Day13Play() {
  return (
    <div>
      <h1>Day 13 Play</h1>
      <div>
        {/* <FetchPostByIdApp /> */}
        {/* <RecipeFetch /> */}
        {/* <Counter /> */}
        {/* <FetchPosts/> */}
        <Timer/>
        <AutoFetchPosts />
      </div>
    </div>
  );
}
