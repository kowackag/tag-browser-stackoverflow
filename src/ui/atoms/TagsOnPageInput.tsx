"use client";

import {
  ChangeEvent,
  startTransition,
  useCallback,
  useOptimistic,
} from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { TextField } from "@mui/material";

export const TagsOnPageInput = ({
  tagsOnPageQuantity,
}: {
  tagsOnPageQuantity: number;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [optimisticQuantity, setOptimisticQuantity] =
    useOptimistic(tagsOnPageQuantity);

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      setOptimisticQuantity(Number(e.target.value));
    });

    router.push(`/tags?${createQueryString("pagesize", e.target.value)}`);
  };

  return (
    <TextField
      id="outlined-basic"
      label="Items on page"
      variant="outlined"
      type="number"
      InputProps={{
        onChange: (e: ChangeEvent<HTMLInputElement>) => handleChange(e),
        value: optimisticQuantity,
        inputProps: { min: 5, max: 50 },
      }}
      sx={{ maxWidth: 120 }}
    />
  );
};
