import { ReadonlyURLSearchParams } from "next/navigation";
import { useCallback } from "react";

export const useSetParams = (searchParams: ReadonlyURLSearchParams) => {
  const changeUrlParams = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  return changeUrlParams;
};
