'use client'

import { useState } from "react";
import Link from 'next/link';

export default function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function handleClick() {
    setIsOn((currentIsOn) => !currentIsOn);
  }
<main>
        <Link href="/">← Back to projects</Link>
        return <button onClick={handleClick}>{isOn ? "On" : "Off"}</button>;

</main>
}
