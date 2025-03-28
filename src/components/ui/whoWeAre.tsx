import React from 'react';

interface TwoHalvesProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

const TwoHalves = ({ leftContent, rightContent }: TwoHalvesProps) => {
  return (
    <div className="flex flex-col lg:flex-row w-[80vw] h-[400px]">
      <div className="lg:w-1/2 flex items-center justify-center">
        {leftContent}
      </div>
      <div className="lg:w-1/2 flex items-center justify-center ml-5">
        {rightContent}
      </div>
    </div>
  );
};

export default TwoHalves;