import Form from "@/components/common/Form";
import { loginFormControl } from "@/confiq";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const initialState = {
    email: "",
    password: "",
  };
  function onSubmit(e) {
    e.preventDefault();
    console.log(formData);
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
