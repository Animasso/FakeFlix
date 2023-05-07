import { useEffect } from "react";
export const useTitleChange = ({ original_title }) => {
  useEffect(() => {
    document.title = original_title;
  }, [original_title]);
  return null;
};
