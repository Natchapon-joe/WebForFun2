import { useState } from "react";
import Image from "next/image";
import { google, eyeOpen, eyeClose } from "@/assets/icons";

interface setLogin {
  setLogin: (value: boolean) => void;
}
export default function RegisterForm({ setLogin }: setLogin) {
  const [seePassword, setSeePassword] = useState<Boolean>(false);
  return (
    <div className="flex flex-col gap-y-[48px]">
      <div>
        <h1 className="text-[36px]">Create an account</h1>
        <p className="text-[16px] font-normal ">Enter your details below</p>
      </div>
      <div className="flex flex-col gap-[40px]">
        <input
          type="text"
          className="border-b-[1px] h-[32px] leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          placeholder="Name"
        />
        <input
          type="text"
          className="border-b-[1px] h-[32px] leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          placeholder="Email or Phone Number"
        />
        <div className="w-full h-full flex justify-end">
          {seePassword ? (
            <div
              className="absolute flex cursor-pointer"
              onClick={() => setSeePassword(false)}
            >
              <Image src={eyeOpen} alt="click to see password" />
            </div>
          ) : (
            <div className="absolute flex cursor-pointer">
              <Image
                src={eyeClose}
                alt="click to hide password"
                onClick={() => setSeePassword(true)}
              />
            </div>
          )}
          <input
            type={seePassword ? "text" : "password"}
            className="border-b-[1px] w-full h-[32px] leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            placeholder="Password"
          />
        </div>
        <div className="h-full w-full flex flex-col gap-y-[16px]">
          <input
            type="button"
            className="bg-[#DB4444] h-[56px] w-full text-white rounded-[4px] cursor-pointer"
            value="Create Account"
          />
          <div className="flex flex-col gap-y-[32px]">
            <div className="flex border-[1px] cursor-pointer">
              <div className="px-[86px] py-[18px] flex rounded-[4px]">
                <Image src={google} alt="google icon" />
                <p>Sign up with Google</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex gap-x-[16px]">
                <div className="font-normal text-[16px]">
                  Already have account?
                </div>
                <div
                  className="underline cursor-pointer"
                  onClick={() => setLogin(true)}
                >
                  Log in
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
