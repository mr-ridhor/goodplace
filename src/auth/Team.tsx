import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

import { teamType } from "@/lib/zod/zodTypes/teamType";
import { teamSchema } from "@/lib/zod/zodSchema/teamSchema";
interface Props {
  nextForm: () => void;
}
const Team: React.FC<Props> = ({ nextForm }) => {
  const form = useForm<teamType>({
    resolver: zodResolver(teamSchema),
    defaultValues: {
      fullName: "",
      fullName2: "",
      role: "",
      role2: "",
    },
  });
  const onSubmit = (data: teamType) => {
    console.log(data);
  };
  return (
    <div className="">
      <Card className="border-0 no-scrollbar shadow-none  rounded-none w-full flex flex-col items-center ustify-center">
        <div className="w-full lg:w-[55%]">
          <CardHeader className="w-full ">
            <CardTitle>
              <strong className="text-sm lg:text-lgtext-sm xl:text-2xl">
                Team Information (Optional)
              </strong>
              <p className="font-light text-sm xl:text-lg">
                Kindly complete the necessary fields to inform us about your
                team (2 users only)
              </p>
            </CardTitle>
          </CardHeader>
          <CardContent className="w-full no-scrollbar">
            <Form {...form}>
              <form
                action=""
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full h-full flex flex-col gap-y-3"
              >
                <div className="space-y-4">
                  <div className="w-full space-y-2">
                    <div className="w-full flex justify-end">
                      <p>Team member 1</p>
                    </div>
                    <FormLabel>Full Name</FormLabel>
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input className="" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-full space-y-2">
                    <FormLabel>Role</FormLabel>
                    <FormField
                      control={form.control}
                      name="role"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input className="" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-full space-y-2">
                    <div className="w-full flex justify-end">
                      <p>Team member 2</p>
                    </div>
                    <FormLabel>Full Name</FormLabel>
                    <FormField
                      control={form.control}
                      name="fullName2"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input className="" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="w-full space-y-2">
                    <FormLabel>Role</FormLabel>
                    <FormField
                      control={form.control}
                      name="role2"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input className="" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <Button
                  onClick={nextForm}
                  className="w-[40%] h-12  gap-x-1 rounded-md "
                  type="submit"
                >
                  {/* {form.formState.isSubmitting ? (
                          <div className="w-8 h-8">
                            <LoaderComponent />
                          </div>
                        ) : ( */}
                  <p className="text-white font-bold">Next</p>
                  <MoveRight />
                  {/* )} */}
                </Button>
              </form>
            </Form>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default Team;
