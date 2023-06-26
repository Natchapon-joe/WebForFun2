import { useState, useEffect } from "react";
import Image from "next/image";
import { applebackground, time } from "@/assets/images";
import { arrowleft, arrowright } from "@/assets/icons";
import { joy, keyboard, chair, monitor } from "@/assets/images/products";
import Times from "@/components/times";
import moment from "moment";

export default function Home() {
  const [countdown, setCountdown] = useState<moment.Duration>();
  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment();
      const diff = moment?.duration(
        moment("2023-06-14 00:00:00", "YYYY-MM-DD HH:mm:ss").diff(now)
      );
      // const formattedCountdown = `${diff?.days()} days, ${diff?.hours()} hours, ${diff?.minutes()} minutes, ${diff?.seconds()} seconds`;
      // console.log(formattedCountdown);
      setCountdown(diff);
    }, 1000);

    return () => clearInterval(interval);
  }, [moment("2023-06-13 00:00:00", "YYYY-MM-DD HH:mm:ss")]);

  return (
    <>
      {/* row 1 */}
      <div className="flex">
        <div className="pt-[38px] mr-[16px] border-r-[1px] pl-[135px]">
          <div className="flex flex-col justify-end pr-[16px] max-w-[217px] max-h-[344px] gap-y-[18px] ">
            <div>Woman's Fashion</div>
            <div>Men's Fashion</div>
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
      {/* row 2 */}
      <div className="w-full">
        <div className="flex flex-col pt-[150px] px-[130px] gap-y-[40px]">
          <div className="w-full flex flex-row gap-x-[88px] justify-center">
            <div className="flex flex-1 gap-x-[88px]">
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
              <Times
                countdown={
                  countdown
                    ? countdown
                    : moment.duration(
                        moment(
                          "2023-06-14 00:00:00",
                          "YYYY-MM-DD HH:mm:ss"
                        ).diff(moment())
                      )
                }
              />
              {/*  */}
            </div>
            <div className="flex items-end justify-end">
              <div className="flex justify-end w-full gap-x-[8px]">
                <Image
                  src={arrowleft}
                  alt="arrowleft"
                  className="cursor-pointer"
                />
                <Image
                  src={arrowright}
                  alt="arrowright"
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
          {/* items slide */}
          <div>
            <div className="flex gap-x-[30px]">
              <div className="flex flex-col">
                <div className="flex items-center justify-center bg-[#F5F5F5] rounded-[4px] w-full max-w-[270px] h-full max-h-[250px]">
                  <Image src={joy} alt="joy" />
                </div>
                <div>
                  <h1>HAVIT HV-G92 Gamepad</h1>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center justify-center bg-[#F5F5F5] rounded-[4px] w-full max-w-[270px] h-full max-h-[250px]">
                  <Image src={keyboard} alt="keyboard" />
                </div>
                <div>
                  <h1>HAVIT HV-G92 Gamepad</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
