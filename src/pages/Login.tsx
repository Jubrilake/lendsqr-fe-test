import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/ui/input";
import { Button } from "@/ui/button";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { loginImg, logo } from "@/assets";

export function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="w-full lg:grid h-screen lg:grid-cols-2 ">
      <div className="hidden relative bg-white lg:flex justify-center items-center">
        <div className="absolute top-20 left-20">
          <img
            src={logo}
            alt="Logo"
            className="h-auto w-auto object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
        <img
          src={loginImg}
          alt="Login Cover"
          className="h-auto w-auto object-cover"
        />
      </div>
      <div className="flex items-center justify-center py-12 lg:shadow-lg z-10">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2">
            <h1 className="text-5xl font-bold text-primary">Welcome!</h1>
            <p className="text-balance text-muted-foreground text-primary">
              Enter details to login.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Input id="email" type="email" placeholder="Email" required />
            </div>
            <div className="grid gap-2 relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                required
                placeholder="Password"
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
            </div>
            <div>
              <Link
                to="/forgot-password"
                className="inline-block text-sm font-medium text-secondary"
              >
                Forgot your password?
              </Link>
            </div>
            <Button variant="success" type="submit" className="w-full">
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
