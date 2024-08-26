import React from "react";

import Logo from "./svgComponent/Logo";
import Topo from "./assets/Topology1.png";
import User from "./svgComponent/User";
import Company from "./svgComponent/Company";
import Users from "./svgComponent/Users";
import Key from "./svgComponent/Key";
import Mail from "./svgComponent/Mail";
import Mailer from "./svgComponent/Mailer";
interface LeftpaneProps {
  currentForm: number;
}
const Leftpane: React.FC<LeftpaneProps> = ({ currentForm }) => {
  const pane = [
    { id: 1, step: "1 of 6", name: "Personal information", icon: <User /> },
    { id: 2, step: "2 of 6", name: "Company information", icon: <Company /> },
    { id: 3, step: "3 of 6", name: "Team information", icon: <Users /> },
    { id: 4, step: "4 of 6", name: "Log in credentials", icon: <Key /> },
    { id: 5, step: "5 of 6", name: "Email Verification", icon: <Mail /> },
    { id: 6, step: "6 of 6", name: "Subscription plan", icon: <Mailer /> },
  ];
  return (
    <div
      className="h-screen md:w-[260px] space-y-5 top-0 hidden md:block  fixed bg-gradient-to-b from-[#82e1ed] from-10% via-s[#62cfde] via-30% to-[#4bc1d1] to-90%
"
    >
      <div className="w-full  md:flex items-center justify-start hidden">
        <Logo />
      </div>
      <div className="h-fit">
        {pane.map((item) => {
          return (
            <div className="flex  gap-x-2 items-center px-2">
              <div className="">{item.icon}</div>
              <div
                className={` ${
                  item.id === currentForm ? "text-black" : "text-[#00454F]/30"
                } `}
              >
                <p className="text-sm">{item.step}</p>
                <p className="text-sm">{item.name}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className=" justify-self-end">
        <img src={Topo} className=" object-cover" />
      </div>
    </div>
  );
};

export default Leftpane;
