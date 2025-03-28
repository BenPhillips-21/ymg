import React from 'react';

interface TwoHalvesProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

const TwoHalves = ({ leftContent, rightContent }: TwoHalvesProps) => {
  return (
    <div className="flex w-[80vw] h-[400px]">
      <div className="w-1/2 flex items-center justify-center">
        {leftContent}
      </div>
      <div className="w-1/2 flex items-center justify-center ml-5">
        {rightContent}
      </div>
    </div>
  );
};

export default TwoHalves;