"use client";
import React from "react";
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "@/components/hooks/useRegisterModal";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import toast from "react-hot-toast";
import Button from "../Button";

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setLoading(true);

    axios
      .post("/api/auth/register", data)
      .then(() => {
        registerModal.onClose();
      })
      .catch((error) => {
        // console.log(">>>>>>>>>",error);
        toast.error(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const bodyContent = (
    <div className="flex flex-col space-y-4">
      <Heading title="Welcome to Airbnb" subtitle="Sign up to continue" />
      <Input
        id="name"
        label="Name"
        disabled={loading}
        register={register}
        errors={errors}
        required
      />
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
          onClick={registerModal.onClose}
          className="
          text-neutral-800
          cursor-pointer
          hover:underline
          ">Log in</div>
        </section>
      </div>
    </div>
  );

  return (
    <>
      <Modal
        disabled={loading}
        isOpen={registerModal.isOpen}
        onClose={registerModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        title="Register"
        actionLabel="Continue"
        body={bodyContent}
        footer={footerContent}
      />
    </>
  );
};

export default RegisterModal;
