import { ChangeEvent, useCallback, useState } from "react";

const useInput = (defaultValue: Record<string, string>) => {
  const [inputs, setInputs] = useState({ ...defaultValue });

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  return { inputs, onChange };
};

export default useInput;
