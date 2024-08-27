import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { personalSchema } from "@/lib/zod/zodSchema/personalShcema";
import { personalType } from "@/lib/zod/zodTypes/personalType";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Selects } from "@/components/Selects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

interface Props {
  nextForm: () => void;
}
const Personal: React.FC<Props> = ({ nextForm }) => {
  const form = useForm<personalType>({
    resolver: zodResolver(personalSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      country: "",
      title: "",
      linkedIn: "",
      phone: "",
    },
  });
  const onSubmit = (data: personalType) => {
    console.log(data);
  };
  return (
    <div className="h-full overflow-auto no-scrollbar">
      <Card className="border-0 no-scrollbar  rounded-none w-full flex flex-col items-center ustify-center">
        <div className="xl:w-[40%] lg:w-[60%] w-full">
          <CardHeader className="w-full ">
            <CardTitle className="space-y-4">
              <strong className="text-sm xl:text-2xl">
                Personal Information
              </strong>
              <p className="font-light text-sm xl:text-lg">
                Complete your sign up process and get started with a 1 month
                free trial
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
                  <div className="w-full  flex gap-x-4">
                    <div className="w-1/2 space-y-2">
                      <FormLabel className="font-normal">First Name</FormLabel>
                      <FormField
                        control={form.control}
                        name="firstName"
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
                    <div className="w-1/2 space-y-2">
                      <FormLabel className="font-normal">Last Name</FormLabel>
                      <FormField
                        control={form.control}
                        name="lastName"
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
                  <div className="w-full space-y-2">
                    <FormLabel className="font-normal">Title</FormLabel>
                    <FormField
                      control={form.control}
                      name="title"
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
                    <FormLabel className="font-normal">Email Address</FormLabel>
                    <FormField
                      control={form.control}
                      name="email"
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
                    <FormLabel className="font-normal">Phone</FormLabel>
                    <FormField
                      control={form.control}
                      name="phone"
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
                  <div className="w-full gap-x-4 flex items-center">
                    <div className="w-1/2">
                      <FormLabel className="font-normal">LinkedIn</FormLabel>
                      <FormField
                        control={form.control}
                        name="linkedIn"
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
                    <div className="w-1/2">
                      <FormLabel className="font-normal">X</FormLabel>
                      <FormField
                        control={form.control}
                        name="linkedIn"
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
                  <div className="w-full  flex gap-x-4">
                    <div className="w-1/2 space-y-2">
                      <FormLabel className="font-normal">Country</FormLabel>
                      <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Selects
                                {...field}
                                className={""}
                                placeholder="Ireland"
                                options={[
                                  { value: "s", label: "Fr" },
                                  { value: "s4", label: "eng" },
                                ]}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="w-1/2 space-y-2">
                      <FormLabel className="font-normal">City</FormLabel>
                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Selects
                                {...field}
                                className={""}
                                placeholder="Dublin"
                                options={[
                                  { value: "s", label: "Fr" },
                                  { value: "s4", label: "eng" },
                                ]}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <div className="w-full space-y-2">
                    <FormLabel className="font-normal">Address</FormLabel>
                    <FormField
                      control={form.control}
                      name="address"
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
                  className="w-[50%] h-12 mt-2  gap-x-1 rounded-md "
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

export default Personal;
