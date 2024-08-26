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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { authType } from "@/lib/zod/zodTypes/authType";
import { authSchema } from "@/lib/zod/zodSchema/authSchema";
// import { authSchema } from "@/lib/zod/zodSchema/authSchema";
interface Props {
  nextForm: () => void;
}
const Register: React.FC<Props> = ({ nextForm }) => {
  const form = useForm<authType>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPass: "",
    },
  });
  const onSubmit = (data: authType) => {
    console.log(data);
  };
  return (
    <div className="">
      <Card className="border-0 no-scrollbar  rounded-none w-full flex flex-col items-center ustify-center">
        <div className="w-full lg:w-[40%]">
          <CardHeader className="w-full ">
            <CardTitle>
              <strong className="text-sm lg:text-lg">Log in credentials</strong>
              <p className="font-normal text-sm">
                Enter your team log in email and password to complete sign up
                process
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
                    <FormLabel>Email</FormLabel>
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
                    <FormLabel>Password</FormLabel>
                    <FormField
                      control={form.control}
                      name="password"
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
                    <FormLabel>Confirm Password</FormLabel>
                    <FormField
                      control={form.control}
                      name="confirmPass"
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
                  className="w-[100%] h-12  mt-1 gap-x-1 rounded-md "
                  type="submit"
                >
                  {/* {form.formState.isSubmitting ? (
                            <div className="w-8 h-8">
                              <LoaderComponent />
                            </div>
                          ) : ( */}
                  <p className="text-white font-bold">Complete</p>

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

export default Register;
