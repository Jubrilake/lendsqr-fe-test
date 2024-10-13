import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { useNavigate, Link } from "react-router-dom";
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
    <div className="w-full lg:grid h-screen lg:grid-cols-2 font-avenir">
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
            <p className="text-balance font-normal text-muted-foreground text-primary">
              Enter details to login.
            </p>
          </div>

          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Email Field */}
              <div className="grid gap-2">
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  {...form.register("email")}
                />
                <div className="text-red-500 text-xs mt-1">
                  {form.formState.errors.email?.message}
                </div>
              </div>

              {/* Password Field */}
              <div className="grid gap-2 relative">
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    {...form.register("password")}
                    className="pr-10"
                  />
                  <span
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  >
                    {showPassword ? (
                      <FiEyeOff size={20} className="text-secondary" />
                    ) : (
                      <FiEye size={20} className="text-secondary" />
                    )}
                  </span>
                </div>
                {form.formState.errors.password && (
                  <div className="text-red-500 text-xs mt-1">
                    {form.formState.errors.password.message}
                  </div>
                )}
              </div>

              {/* Forgot Password Link */}
              <div className="flex">
                <Link
                  to="/forgot-password"
                  className="text-sm text-secondary font-medium uppercase tracking-wide"
                >
                  Forgot Password?
                </Link>
              </div>

              <Button type="submit" variant="success" className="w-full">
                LOG IN
              </Button>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
}

export default Login;
