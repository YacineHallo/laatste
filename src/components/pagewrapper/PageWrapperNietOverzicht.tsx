import React from "react";
import "../../App.scss";
import { Spinner } from "@amsterdam/asc-assets";

interface IPageWrapperProps {
  children: React.ReactNode;
  isLoading?: boolean;
}

export const PageWrappernietOverzicht = ({
  isLoading,
  children
}: IPageWrapperProps) => {
  return <div>{isLoading ? <Spinner /> : children}</div>;
};
