//Deze moet rond iedere view
import React from "react";
import "../../App.scss";
import { Spinner } from "@amsterdam/asc-assets";

interface IPageWrapperProps {
  children: React.ReactNode;
  isLoading?: boolean;
}

export const PageWrapper = ({ isLoading, children }: IPageWrapperProps) => {
  return (
    <div className="container__main">
      {isLoading ? <Spinner className="spinner" /> : children}
    </div>
  );
};
