import React, { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
  curr: number;
}

const Main: React.FC<MainProps> = ({ children, curr }) => {
  return (
    <div className="md:ml-[240px] w-screen no-scrollbar h-screen overflow-y-hidden">
      <div className="h-screen no-scrollbar overflow-y-hidden">
        {curr !== 6 && (
          <div className="flex bg-white  items-center px-4 sticky top-0 w-full h-[80px]">
            <div className="justify-end w-full flex hover:underline cursor-pointer">
              Already a member? Sign in
            </div>
          </div>
        )}
        <div className="relative w-full h-[80%] no-scrollbar overflow-y-auto  ">
          {children}
        </div>
      </div>
      <div className=" flex mt-4 text-center sticky bottom-2 w-full overflow-auto">
        <p className="text-center w-full flex justify-center">
          Your data is protected and encrypted{" "}
        </p>
      </div>
    </div>
  );
};

export default Main;
