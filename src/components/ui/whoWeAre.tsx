import React from 'react';

const TwoHalves = ({ leftContent, rightContent }) => {
  return (
    <div className="flex w-[80vw] h-[400px]">
      <div className="w-1/2 flex items-center justify-center">
        {leftContent}
      </div>
      <div className="w-1/2 flex items-center justify-center">
        {rightContent}
      </div>
    </div>
  );
};

export default TwoHalves;