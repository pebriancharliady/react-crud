import React from "react";

export default function CustomStyles() {
  return (
    <>
      <style type="text/css">
        {`
    .btn{
        border-radius: 0.75rem;
        font-size: 0.875rem;
    }

    .btn-primary{
        background-color:#0EA6C9;
        border:none
    }

    .btn-primary:hover{
        color: #fff;
        background-color: #0a85a1;
        border:none
    }

    .btn-orange {
      background-color: #FA7800;
      color: white;
    }
    .btn-orange:hover {
      color: white;
      background-color: #ee7200;
    }
    `}
      </style>
    </>
  );
}
