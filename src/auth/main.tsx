import React, { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
  curr: number;
}

const Main: React.FC<MainProps> = ({ children, curr }) => {
  return (
    <div className="md:ml-[200px] w-screen no-scrollbar">
      <div className="h-screen no-scrollbar">
        {curr !== 6 && (
          <div className="flex bg-white items-center px-3 sticky top-0 w-full h-[80px]">
            <div className="justify-end w-full flex hover:underline cursor-pointer">
              Already a member? Sign in
            </div>
          </div>
        )}
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default Main;
