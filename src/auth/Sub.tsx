import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import React from "react";

interface Props {
  nextForm?: () => void;
}
const plans = [
  {
    id: 1,
    name: "Free Plan",
    price: "$0",
    band: "Unlimited",
    title: "Perks",
    noInvsetors: "5 investors",
  },
  {
    id: 1,
    name: "Platinum Plan",
    price: "$150",
    band: "Billed annually",
    title: "Perks",
    noInvsetors: "25 investors",
  },
];
const Sub: React.FC<Props> = () => {
  return (
    <div className="">
      <Card className="my-8 border-0 no-scrollbar shadow-none rounded-none w-full flex flex-col items-center ustify-center">
        <div className="w-full lg:w-[50%] xl:w-[510px]">
          <CardHeader className="w-full ">
            <CardTitle className="">
              <strong className="text-sm xl:text-2xl ">
                Subscription plan
              </strong>
              <p className="font-light text-sm xl:text-lg">
                Select your plan to be able to use GoodPlace CRM{" "}
              </p>
            </CardTitle>
          </CardHeader>
          <CardContent className="w-full flex gap-x-3">
            {plans.map((plan, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col px-2 border rounded-md justify-cente h-[410px] w-1/2 py-4"
                >
                  <div className="w-full flex justify-center my-4">
                    <div
                      className={` w-[90%] rounded-md text-center ${
                        index === 0 ? "bg-[#DCF8FC]" : "bg-[#834CFF]"
                      }`}
                    >
                      {plan.name}
                    </div>
                  </div>
                  <div className="flex h-[90%]  flex-col">
                    <div className="h-[80%]">
                      <div className="w-full px-2">
                        <p className="font-bold text-lg">{plan.price}</p>
                        <p className="text-gray-300">{plan.band}</p>
                      </div>
                      <div className="mt-3">
                        <p className="text-[#03AAC1]">Perks</p>
                        <div className="mt-3 space-y-2">
                          <p>{plan.noInvsetors}</p>
                          <p>Unlimited pipelines</p>
                          <p>Unlimited users</p>
                          {index === 1 && <p>Matching with Investors</p>}
                        </div>
                      </div>
                    </div>
                    <div className="h-[20%] w-full ">
                      {index === 0 ? (
                        <div className="w-full">
                          <Button className="space-x-1 items-center flex bg-transparent hover:bg-transparent">
                            <Checkbox />
                            <p className="text-black">Current plan</p>
                          </Button>
                        </div>
                      ) : (
                        <div className=" w-full flex items-center justify-center">
                          <Button className="bg-[#04acc2] w-[85%]">
                            <p>Current plan</p>
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default Sub;
