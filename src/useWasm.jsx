import { useEffect, useState } from "react";
import loader from "@assemblyscript/loader";

export const useWasm = (url) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    const fetchWasm = async () => {
      const wasm = await fetch(url);
      const instance = await loader.instantiate(wasm, {});
      setState(instance);
    };

    fetchWasm();
  }, []);

  return state;
};
