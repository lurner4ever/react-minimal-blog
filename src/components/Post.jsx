import React, { useState } from "react";

import { getPost } from "../resources/posts";
import { useParams } from "react-router-dom";

import Button from "./common/Button";

const Post = (props) => {
  const { id } = useParams(); // returns key/value pair of URL parameters
  const [post] = useState(getPost(id));
  const [display, setDisplay] = useState(false);

  let handleClick = () => {
    setDisplay("visible");
    console.log("clicked");
  };

  return (
    <>
      <div className="container mx-auto w-8/12 h-full">
        <div className="post bg-white p-5 shadow">
          <h1 className="text-4xl font-hairline capitalize">{post.title}</h1>
          <span className="text-gray-600 text-sm">{post.date}</span>
          <p className="text-light pt-4">{post.body}</p>
          <span className="text-gray-500 block pt-4 font-mono">
            {post.tags}
          </span>
        </div>

        {/* user-badge */}
        {/* <div className="posted w-full p-5 mt-2 bg-white border shadow flex">
          <img
            src="http://lorempixel.com/640/640/cats"
            className="h-16 w-16 rounded-full"
            alt="avatar"
          />
          <p className="flex flex-col">
            <span className="pl-2 font-semibold text-xl">John Doe</span>
            <span className="pl-2 font-medium text-gray-600 pb-5">@jDoe</span>
            <span className="pl-2">
              <Button title="Follow" visibility={display} />
            </span>
          </p>
        </div> */}

        {/* comment */}
        <div className="comment w-full p-5 mt-2 bg-white border shadow flex">
          <img
            src="http://lorempixel.com/540/540/cats"
            className="h-12 w-12 rounded-full mr-2"
            alt="avatar"
          />
          <form action="" className="w-full">
            <textarea
              name=""
              id=""
              placeholder="Comment"
              cols="50"
              rows="3"
              className="w-full p-3 bg-gray-100 mb-5"
              onClick={handleClick}></textarea>
            <Button title="Submit" visibility={display} />
          </form>
        </div>
        {/* comments */}
        <div className="comments w-full p-5 mt-2 bg-white border shadow space-y-2">
          {/* comment */}
          <div className="border p-4 w-full">
            <div className="inline flex mb-5 ">
              <img
                src="http://lorempixel.com/640/640/cats"
                className="h-8 w-8 rounded-full"
                alt="avatar"
              />
              <span className="ml-2 align-middle text-lg">Jane Doe</span>
            </div>
            <div className="comment w-full text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A quam
              magni ex eligendi quisquam totam beatae quidem porro suscipit
              doloremque dolore, quasi cupiditate esse quae!
            </div>
          </div>
          {/* reply */}
          <div className="border p-4 w-11/12 pl-5 ml-auto">
            <div className="inline flex mb-5 ">
              <img
                src="http://lorempixel.com/640/640/cats"
                className="h-8 w-8 rounded-full"
                alt="avatar"
              />
              <span className="ml-2 align-middle text-lg">Jane Doe</span>
            </div>
            <div className="comment w-full text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A quam
              magni ex eligendi quisquam totam beatae quidem porro suscipit
              doloremque dolore, quasi cupiditate esse quae!
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
