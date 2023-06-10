import Image from "next/image";
import { search } from "@/assets/icons";
import { useRouter } from "next/router";
export default function NavbarLayout() {
  const route = useRouter();

  return (
    <>
      <nav className="top-0 bg-[#000000]">
        <div className="text-white flex items-center justify-center gap-[228px] py-[12px]">
          <div className="flex items-cente justify-center gap-[8px]">
            <h1>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </h1>
            <h1 className="cursor-pointer">
              <b>
                <u>ShopNow</u>
              </b>
            </h1>
          </div>
          <div className="flex">
            <h1>English</h1>
            <div>adsad</div>
          </div>
        </div>
      </nav>
      <nav className="bg-white flex items-center border-b-[1px] justify-center">
        <div className="flex gap-x-[232px] px-[135px] pt-[24px] pb-[16px] items-center flex-wrap">
          <div>
            <h1>
              <b className="text-[24px] font-bold">Exclusive</b>
            </h1>
          </div>
          <div className="flex gap-x-[48px]">
            <div
              className={
                route?.pathname.toString() == "/home" ? "underline" : ""
              }
            >
              Home
            </div>
            <div
              className={
                route?.pathname.toString() == "/contact" ? "underline" : ""
              }
            >
              Contact
            </div>
            <div
              className={
                route?.pathname.toString() == "/about" ? "underline" : ""
              }
            >
              About
            </div>
            <div
              className={
                route?.pathname.toString() == "/register" ? "underline" : ""
              }
            >
              Sign Up
            </div>
          </div>
          <span className="flex items-center justify-end">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-[#f5f5f5] w-[250px] h-[38px] rounded-[4px] pl-[20px]"
            />
            <div className="absolute pr-[12px]">
              <Image src={search} alt="search" />
            </div>
          </span>
        </div>
      </nav>
    </>
  );
}
