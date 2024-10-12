import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";

import { Logo, LoginImg } from "@/assets";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

type FormData = z.infer<typeof formSchema>;

export function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const onSubmit = (data: FormData) => {
    console.log(data);
    navigate("/users");
  };

  return (
    <div className="w-full lg:grid h-screen lg:grid-cols-2 ">
      <div className="hidden relative bg-white lg:flex justify-center items-center">
        <div className="absolute top-20 left-20">
          <Logo className="h-auto w-auto object-cover dark:brightness-[0.2] dark:grayscale" />
        </div>
        <LoginImg />
      </div>
      <div className="flex items-center justify-center py-12 lg:shadow-lg z-10">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2">
            <h1 className="text-5xl font-bold text-primary">Welcome!</h1>
            <p className="text-balance text-muted-foreground text-primary">
              Enter details to login.
            </p>
          </div>

          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Email Field */}
              <div className="grid gap-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-[#545F7D]"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  {...form.register("email")}
                />
                <div className="text-red-500 text-xs mt-1">
                  {form.formState.errors.email?.message}
                </div>
              </div>

              {/* Password Field */}
              <div className="grid gap-2 relative">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-[#545F7D]"
                >
                  Password
                </label>
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  {...form.register("password")}
                />
                <span
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-3 cursor-pointer"
                >
                  {showPassword ? (
                    <FiEyeOff size={20} className="text-primary" />
                  ) : (
                    <FiEye size={20} className="text-primary" />
                  )}
                </span>
                <div className="text-red-500 text-xs mt-1">
                  {form.formState.errors.password?.message}
                </div>
              </div>

              <Button type="submit" variant="success" className="w-full">
                Login
              </Button>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
}

export default Login;
