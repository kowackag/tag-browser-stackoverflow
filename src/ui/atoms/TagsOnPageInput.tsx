"use client";

import { ChangeEvent, startTransition, useOptimistic } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { TextField } from "@mui/material";
import { useSetParams } from "@/utils/useSetParams";

export const TagsOnPageInput = ({
  tagsOnPageQuantity,
}: {
  tagsOnPageQuantity: number;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [optimisticTagsOnPageQuantity, setOptimisticTagsOnPageQuantity] =
    useOptimistic(tagsOnPageQuantity);

  const changeUrlParams = useSetParams(searchParams);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    startTransition(() => {
      setOptimisticTagsOnPageQuantity(Number(e.target.value));
    });

    router.push(`/tags?${changeUrlParams("pagesize", e.target.value)}`);
  };

  return (
    <TextField
      id="outlined-basic"
      label="Items on page"
      variant="outlined"
      type="number"
      InputProps={{
        onChange: (e: ChangeEvent<HTMLInputElement>) => handleChange(e),
        value: optimisticTagsOnPageQuantity,
        inputProps: { max: 50 },
      }}
      sx={{ maxWidth: 120 }}
    />
  );
};
