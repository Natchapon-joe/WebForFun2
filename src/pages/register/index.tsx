import Image from "next/image";
import { registerImage } from "@/assets/images";
import { useState } from "react";
import { LoginForm, RegisterForm } from "./components/form";

export default function Register() {
  const [login, setLogin] = useState<Boolean>(false);
  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-2 w-full">
        <div className="max-w-[805px] w-full max-h-[781px] h-full">
          <Image src={registerImage} alt="back ground" />
        </div>
        <div className="flex items-center w-full">
          <div className="flex flex-col justify-end w-full">
            <div className="flex flex-col w-full justify-end items-center">
              {/* Components */}
              {login ? (
                <LoginForm setLogin={setLogin} />
              ) : (
                <RegisterForm setLogin={setLogin} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
