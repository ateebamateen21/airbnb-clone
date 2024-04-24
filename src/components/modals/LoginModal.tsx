"use client";
import React from "react";
import { signIn } from "next-auth/react";
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import toast from "react-hot-toast";
import Button from "../Button";
import { useRouter } from "next/navigation";

const LoginModal = () => {
  const router = useRouter();
  // const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    let payload = {
      redirect: false,
      email: data.email,
      password: data.password,
      // callbackUrl: `${window.location.origin}/want-to-be-a`,
    };
    console.log(data, "data");
    {
      debugger;
    }
    // setLoading(true);

    //why data? go and check in api/[...NextAuth]
    const signInobj = await signIn(
      "credentials",

      payload
    );
    {debugger}
    console.log(signInobj)
  };

  const bodyContent = (
    <div className="flex flex-col space-y-4">
      <Heading title="Welcome Back" subtitle="Login to your account" />
      <Input
        id="email"
        label="email"
        type="email"
        disabled={loading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="password"
        type="password"
        disabled={loading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );
  //social logins
  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => {}} //add google login
        disabled={loading}
      />
      <Button
        outline
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={() => {}} //add google login
        disabled={loading}
      />
      <div
        className="
      text-neutral-500
      txt-center
      mt-4
      font-light
      "
      >
        <section className="flex flex-row items-center gap-2">
          <div>Already have an account? </div>
          <div
            onClick={loginModal.onClose}
            className="
          text-neutral-800
          cursor-pointer
          hover:underline
          "
          >
            Log in
          </div>
        </section>
      </div>
    </div>
  );

  return (
    <>
      <Modal
        disabled={loading}
        isOpen={loginModal.isOpen}
        onClose={loginModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        title="Login"
        actionLabel="Continue"
        body={bodyContent}
        footer={footerContent}
      />
    </>
  );
};

export default LoginModal;
