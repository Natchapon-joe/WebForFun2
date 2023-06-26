interface loginForm {
  setLogin: (value: boolean) => void;
}
export default function LoginForm({ setLogin }: loginForm) {
  return (
    <div className="flex flex-col gap-y-[48px]">
      <div>
        <h1 className="text-[36px]">Log in to Exclusive</h1>
        <p className="text-[16px] font-normal ">Enter your details below</p>
      </div>
      <div className="flex flex-col gap-[40px]">
        <input
          type="text"
          className="border-b-[1px] h-[32px] leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          placeholder="Email or Phone Number"
        />
        <input
          type="password"
          className="border-b-[1px] h-[32px] leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          placeholder="Password"
        />
        <div className="h-full flex gap-y-[16px] items-center gap-x-[88px]">
          <input
            type="button"
            className="bg-[#DB4444] h-[56px] w-[143px] text-white rounded-[4px] cursor-pointer"
            value="Login"
          />
          <p
            className="text-[#DB4444] cursor-pointer"
            onClick={() => {
              setLogin(false);
            }}
          >
            Create Account
          </p>
        </div>
      </div>
    </div>
  );
}
