import Image from "next/image";
import { applebackground, time } from "@/assets/images";
import { arrowleft, arrowright } from "@/assets/icons";

export default function Home() {
  return (
    <>
      <div className="flex">
        <div className="pt-[38px] mr-[16px] border-r-[1px] pl-[135px]">
          <div className="flex flex-col justify-end pr-[16px] max-w-[217px] max-h-[344px] gap-y-[18px] ">
            <div>Womans Fashion</div>
            <div>Mens Fashion</div>
            <div>Electronics</div>
            <div>Home & Lifestyle</div>
            <div>Medicine</div>
            <div>Sports & Outdoor</div>
            <div>Babys & Toys</div>
            <div>Groceries & Pets</div>
            <div>Health & Beauty</div>
          </div>
        </div>
        <div className="pt-[40px] pl-[38px]">
          <div>
            <Image src={applebackground} alt="background" />
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full pt-[150px] px-[130px] flex flex-row gap-x-[88px] justify-center">
          <div className="flex flex-col gap-y-[24px]">
            <div>
              <div className="flex items-center text-[#DB4444] font-semibold">
                <div className="bg-[#DB4444] w-[20px] h-[40px] rounded-[4px]" />
                <div className="whitespace-no-wrap">Today’s</div>
              </div>
            </div>
            <div className="text-[#000000] text-[36px] font-semibold">
              Flash Sales
            </div>
          </div>
          <div className="flex items-end">
            <div>
              <Image src={time} alt="time" />
            </div>
          </div>
          <div className="flex items-end justify-end">
            <div className="flex justify-end w-full gap-x-[8px]">
              <Image src={arrowleft} alt="arrowleft" />
              <Image src={arrowright} alt="arrowright" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
