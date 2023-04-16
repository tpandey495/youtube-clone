import React from "react";
import Button from "./button";

const buttonlist = ["All", "Live", "Gaming","Songs","Soccer","Cricket","Cooking","Cooking"];

const ButtonList = () => {
  return (
    <div className="flex">
       { 
        buttonlist.map((name,index)=>
             <Button key={index}  Name={name}/>
        )
      }
    </div>
  );
};

export default ButtonList;
