"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { otpType } from "@/lib/zod/zodTypes/otpType";
import { otpSchema } from "@/lib/zod/zodSchema/otpSchema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  nextForm: () => void;
}
const Verification: React.FC<Props> = ({ nextForm }) => {
  //   const router = useRouter();
  const form = useForm<otpType>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      pin: "",
    },
  });

  const onSubmit = (data: otpType) => {
    console.log(data);
  };

  return (
    <div className="border-0 ">
      <Card className="border-0 shadow-none no-scrollbar h-full rounded-none w-full flex flex-col items-center">
        <div className="w-full lg:w-[50%] xl:w-[510px]">
          <CardHeader className="text-center w-[100%]">
            <CardTitle className="w-full">
              <strong className="text-sm xl:text-2xl">
                Email Verification
              </strong>
              <p className="font-light text-sm xl:text-lg">
                Check your email for a 5-digit OTP, input it below to verify
                your email.
              </p>
            </CardTitle>
          </CardHeader>

          <CardContent className="w-[100%]">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormLabel className="text-center">Enter OTP</FormLabel>

                <FormField
                  control={form.control}
                  name="pin"
                  render={({ field }) => (
                    <FormItem className="flex justify-between w-full ">
                      <FormControl>
                        <div className="w-full  flex justify-between">
                          <InputOTP
                            containerClassName="w-full justify-between flex space-x-3"
                            maxLength={5}
                            className="flex w-full justify-between "
                            {...field}
                          >
                            {[...Array(5)].map((_, index) => (
                              <InputOTPGroup key={index} className="">
                                <InputOTPSlot
                                  className="text-center    border rounded-md p-2"
                                  index={index}
                                />
                              </InputOTPGroup>
                            ))}
                          </InputOTP>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  onClick={nextForm}
                  className="w-full h-12"
                  type="submit"
                >
                  <p className="text-white">Complete</p>
                </Button>
              </form>
            </Form>
          </CardContent>
        </div>
      </Card>
    </div>

    // <div className="border-0 ">
    //   <Card className="border-0 shadow-none no-scrollbar h-full rounded-none w-full flex flex-col items-center">
    //     <CardHeader className="w-[40%]  ">
    //       <CardTitle>
    //         <strong className="text-sm lg:text-lg">Email Verification</strong>
    //         <p className="font-normal text-sm">
    //           Check your email for a 5 digits OTP , input them in the field
    //           below and verify your email
    //         </p>
    //       </CardTitle>
    //     </CardHeader>
    //     <CardContent className="w-[40%]  no-scrollbar ">
    //       <Form {...form}>
    //         <form
    //           onSubmit={form.handleSubmit(onSubmit)}
    //           className="space-y-8 w-full bg-red-400"
    //         >
    //           <FormLabel>Enter OTP</FormLabel>

    //           <FormField
    //             control={form.control}
    //             name="pin"
    //             render={({ field }) => (
    //               <FormItem className="w-full bg-green-300 justify-center flex ">
    //                 <FormControl>
    //                   <div className="w-[100%] flex items-centr bg-blue-400 justify-between relative">
    //                     <InputOTP
    //                       maxLength={5}
    //                       className="w-full flex justify-between "
    //                       {...field}
    //                     >
    //                       <InputOTPGroup className="">
    //                         <InputOTPSlot className="" index={0} />
    //                       </InputOTPGroup>
    //                       <InputOTPGroup className="">
    //                         <InputOTPSlot
    //                           className="border400-yellow- "
    //                           index={1}
    //                         />
    //                       </InputOTPGroup>
    //                       <InputOTPGroup className="">
    //                         <InputOTPSlot className="" index={2} />
    //                       </InputOTPGroup>
    //                       <InputOTPGroup className="">
    //                         <InputOTPSlot className="" index={3} />
    //                       </InputOTPGroup>
    //                       <InputOTPGroup className="">
    //                         <InputOTPSlot className="" index={4} />
    //                       </InputOTPGroup>
    //                     </InputOTP>
    //                   </div>
    //                 </FormControl>

    //                 <div className="w-full flex items-center justify-center ">
    //                   <FormMessage />
    //                 </div>
    //               </FormItem>
    //             )}
    //           />

    //           <Button className="w-full h-12 " type="submit">
    //             <p className="text-white">Complete</p>
    //           </Button>
    //         </form>
    //       </Form>
    //     </CardContent>
    //   </Card>
    // </div>
  );
};

export default Verification;
