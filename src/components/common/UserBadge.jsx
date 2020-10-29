import React from "react";
import Button from "./Button";

function UserBadge() {
  return (
    <div className="posted w-full p-5 mt-2 bg-white border shadow flex">
      <img
        src="http://lorempixel.com/640/640/cats"
        className="h-16 w-16 rounded-full"
        alt="avatar"
      />
      <p className="flex flex-col">
        <span className="pl-2 font-semibold text-xl">John Doe</span>
        <span className="pl-2 font-medium text-gray-600">@jDoe</span>
        {/* <Button title="Follow" visible={display}/>
         */}
        <Button title="Follow" />
      </p>
    </div>
  );
}

export default UserBadge;
