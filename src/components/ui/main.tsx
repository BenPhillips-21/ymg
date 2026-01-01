import React from "react";

interface MainProps {
  children: React.ReactNode;
  className?: string;
}

export const Main = ({ children, className = "" }: MainProps) => {
  return (
    <main className={`flex-1 pt-20 ${className}`}>
      {children}
    </main>
  );
};

export default Main;

