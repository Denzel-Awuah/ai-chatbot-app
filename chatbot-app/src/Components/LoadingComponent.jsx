import React from "react";

export const LoadingComponent = () => {
  return (
    <div
      className="spinner-border loadingComponent"
      style={{width: '3rem', height: '3rem'}}
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};
