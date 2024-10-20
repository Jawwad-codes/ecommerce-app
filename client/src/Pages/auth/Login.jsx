import Form from "@/components/common/Form";
import { loginFormControl } from "@/confiq";
import { loginUser } from "@/store/auth-slice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/components/hooks/use-toast";

const Login = () => {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const navigate = useNavigate();
  const initialState = {
    email: "",
    password: "",
  };
  function onSubmit(e) {
    e.preventDefault();
    dispatch(loginUser(formData)).then((data) => {
      console.log(data);
      if (data?.payload?.success) {
        toast({
          title: data?.payload.message,
          variant: "success",
        });
      } else {
        toast({
          title: data?.payload.message,
          variant: "destructive",
        });
      }
    });
  }
  const [formData, setFormData] = useState(initialState);
  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Sign in to your account
        </h1>
        <p className="mt-2">
          Don't have an account
          <Link
            className=" ml-1 font-medium text-primary hover:underline"
            to="/auth/register"
          >
            Register Here
          </Link>
        </p>
      </div>
      <Form
        formControls={loginFormControl}
        buttonText={"Sign In"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default Login;
