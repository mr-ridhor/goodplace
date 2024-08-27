import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { companyType } from "@/lib/zod/zodTypes/companyType";
import { companySchema } from "@/lib/zod/zodSchema/companySchema";
import { Selects } from "@/components/Selects";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
interface Props {
  nextForm: () => void;
}
const Company: React.FC<Props> = ({ nextForm }) => {
  const form = useForm<companyType>({
    resolver: zodResolver(companySchema),
    defaultValues: {
      companyEmail: "",
      companyName: "",
      website: "",
      industry: "",
      city: "",
      country: "",
      ebitda: "",
      preEbitda: "",
      grossProfit: "",
      prevGross: "",
      prevRevenue: "",
      fundingYear: "",
      revenue: "",
    },
  });
  const onSubmit = (data: companyType) => {
    console.log(data);
  };
  return (
    <div className="">
      <Card className="border-0 no-scrollbar shadow-none rounded-none w-full flex flex-col items-center ustify-center">
        <div className="lg:w-[55%] w-full">
          <CardHeader className="w-full ">
            <CardTitle>
              <strong className="text-sm xl:text-2xl">
                Company Information
              </strong>
              <p className="font-light text-sm xl:text-lg">
                Please fill in the required fields to let us know more about
                your company.
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
                <div className="">
                  <div className="w-full ">
                    <FormLabel>Company name</FormLabel>
                    <FormField
                      control={form.control}
                      name="companyName"
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
                  {/* <div className="w-1/2 space-y-2">
                    <FormLabel>Last Name</FormLabel>
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Enter your Last Name"
                              className=""
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div> */}
                </div>

                <div className="w-full  flex gap-x-4">
                  <div className="w-1/2 space-y-2">
                    <FormLabel className="lg:text-base text-[11px]">
                      Country
                    </FormLabel>
                    <FormField
                      control={form.control}
                      name="country"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Selects
                              {...field}
                              className={""}
                              placeholder="Select a Country"
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
                    <FormLabel className="lg:text-base text-[11px]">
                      City
                    </FormLabel>
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Selects
                              {...field}
                              className={""}
                              placeholder="Select a City"
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
                  <FormLabel className="lg:text-base text-[11px]">
                    Company Email
                  </FormLabel>
                  <FormField
                    control={form.control}
                    name="companyEmail"
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
                  <FormLabel className="lg:text-base text-[11px]">
                    Website
                  </FormLabel>
                  <FormField
                    control={form.control}
                    name="website"
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
                  <FormLabel className="lg:text-base text-[11px]">
                    Industry
                  </FormLabel>
                  <FormField
                    control={form.control}
                    name="industry"
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
                <div className="w-full  flex gap-x-4">
                  <div className="w-1/2 space-y-2">
                    <FormLabel className="lg:text-base text-[11px]">
                      Founding Year
                    </FormLabel>
                    <FormField
                      control={form.control}
                      name="fundingYear"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Selects
                              {...field}
                              className={""}
                              placeholder="Select a funding year"
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
                    <FormLabel className="lg:text-base text-[11px]">
                      Revenue (LTM, $K)
                    </FormLabel>
                    <FormField
                      control={form.control}
                      name="revenue"
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
                <div className="w-full flex gap-x-4">
                  <div className="w-1/2 space-y-2">
                    <FormLabel className="lg:text-base text-[11px]">
                      Revenue (Previous year, $K)
                    </FormLabel>
                    <FormField
                      control={form.control}
                      name="prevRevenue"
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
                    <FormLabel className="lg:text-base text-[11px]">
                      Gross profit(LTM, $K)
                    </FormLabel>
                    <FormField
                      control={form.control}
                      name="grossProfit"
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
                <div className="w-full flex gap-x-4 items-center">
                  <div className="w-1/2 space-y-2">
                    <FormLabel className="lg:text-base text-[11px]">
                      Gross profit (Previous year, $K)
                    </FormLabel>
                    <FormField
                      control={form.control}
                      name="prevRevenue"
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
                    <FormLabel className="lg:text-base text-[11px]">
                      EBITDA
                    </FormLabel>
                    <FormField
                      control={form.control}
                      name="ebitda"
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
                <div className="w-full flex gap-x-4 items-center">
                  <div className="w-1/2 space-y-1">
                    <FormLabel className="lg:text-base text-[11px]">
                      EBITDA (Previous year, $K)
                    </FormLabel>
                    <FormField
                      control={form.control}
                      name="preEbitda"
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
                  <div className="w-1/2 mt-6  flex items-center">
                    <Button
                      onClick={nextForm}
                      className="w-full  gap-x-1 rounded-md "
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
                  </div>
                </div>
              </form>
            </Form>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default Company;
