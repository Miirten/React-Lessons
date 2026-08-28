'use client'

import { useState } from "react";

export default function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function handleClick() {
    setIsOn((currentIsOn) => !currentIsOn);
  }
    return <button onClick={handleClick}>{isOn ? "On" : "Off"}</button>;

}
