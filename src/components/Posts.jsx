import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getPosts } from "../resources/posts";
import { v4 as uuidv4 } from "uuid";

class Posts extends Component {
  state = {
    posts: getPosts(),
  };
  render() {
    return (
      <div className="container w-full sm:w-8/12 mx-auto px-4">
        <ul>
          {this.state.posts.map((post) => (
            <li className="bg-white p-5 hover:border shadow mb-2" key={post.id}>
              <p className="post-title mb-1">
                <Link
                  to={`/post/${post.id}`}
                  className="hover:underline font-semibold text-xl ">
                  {post.title}
                </Link>
              </p>
              <span className="block text-gray-500 font-mono">
                {post.tags.map((tag) => tag)}
              </span>
              <span className="posted-on text-gray-600 text-sm font-mono">
                {post.date}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Posts;
