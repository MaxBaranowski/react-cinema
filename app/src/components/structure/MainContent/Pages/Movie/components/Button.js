import React from "react";

export default function Button(props) {
  const { btnVal, btnAction } = props;
  return <button className="btn-trailer">{btnVal}</button>;
}

