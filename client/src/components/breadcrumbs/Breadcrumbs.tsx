import React from "react";
import "./breadcrumbs.scss";

interface BreadcrumbsProps {
  data: string[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ data }) => {
  const crumbs = data.slice(0, 5);
  return (
    <div className="breadcrumbs-container">
      {crumbs.map((crumb) => {
        return <p>{crumb}</p>;
      })}
    </div>
  );
};
