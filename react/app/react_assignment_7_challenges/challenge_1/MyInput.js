import { useEffect, useRef } from "react";

export default function MyInput({ value, onChange }) {
  const ref = useRef(null);

  // TODO: This doesn't quite work. Fix it.
  useEffect(() => {
    ref.current.focus();
  }, []);

  return <input ref={ref} value={value} onChange={onChange} />;
}
