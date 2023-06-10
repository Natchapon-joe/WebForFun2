import Image from "next/image";
import { registerImage } from "@/assets/images";
import { google } from "@/assets/icons";
export default function Register() {
  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-2 w-full">
        <div className="max-w-[805px] w-full max-h-[781px] h-full">
          <Image src={registerImage} alt="back ground" />
        </div>
        <div className="flex items-center w-full">
          <div className="flex flex-col justify-end w-full">
            <div className="flex flex-col w-full justify-end items-center">
              <div className="flex flex-col gap-y-[48px]">
                <div>
                  <h1 className="text-[36px]">Create an account</h1>
                  <p className="text-[16px] font-normal ">
                    Enter your details below
                  </p>
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
                  <input
                    type="text"
                    className="border-b-[1px] h-[32px] leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    placeholder="Password"
                  />
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
                          <div className="underline cursor-pointer">Log in</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
