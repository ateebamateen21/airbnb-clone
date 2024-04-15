"use client";
import Image from "next/image";
import avatar from "@/assets/images/avataricon.png";

const Avatar = () => {
  return (
    <>
      <Image
      className="rounded-full"
        alt="avatar"
        height="30"
        width="30"
        src={avatar}
      />
    </>
  );
};

export default Avatar;
