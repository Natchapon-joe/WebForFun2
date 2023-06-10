import Image from "next/image";
import { downloadapp } from "@/assets/images";
import {
  facebookFooter,
  instagramFooter,
  linkedinFooter,
  twitterFooter,
  sendFooter,
} from "@/assets/icons";

export default function FooterLayout() {
  return (
    <footer className="bg-[#000000] flex flex-col items-center justify-center gap-y-[60px]">
      <div className="flex flex-wrap gap-[88px] text-white px-[118px] pt-[78px]">
        <div className="w-[200px]">
          <div className="flex flex-col text-white gap-y-[24px]">
            <div>Exclusive</div>
            <div>Subscribe</div>
            <div>Get 10% off your first order</div>
          </div>
          <div className="pt-[18px] flex items-center justify-end">
            <input
              type="text"
              placeholder="Enter your email"
              className="bg-transparent border-[1px] w-full border-white h-[38px] pl-[18px] rounded-[4px]"
            />
            <div className="absolute pr-[15px]">
              <Image src={sendFooter} alt="send" />
            </div>
          </div>
        </div>
        <div>
          <div className="text-white max-w-[175px] w-full">
            <div className="pb-[24px]">Support</div>
            <div className="flex flex-col gap-y-[18px]">
              <div>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</div>
              <div>exclusive@gmail.com</div>
              <div>+88015-88888-9999</div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-white w-full">
            <div className="pb-[24px]">Account</div>
            <div className="flex flex-col w-[123px] gap-y-[8px]">
              <div>My Account</div>
              <h1 className="whitespace-normal">Login / Register</h1>
              <div>Cart</div>
              <div>Wishlist</div>
              <div>Shop</div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-white">
            <div className="pb-[24px]">Quick Link</div>
            <div className="flex flex-col gap-y-[8px]">
              <div>Privacy Policy</div>
              <div>Terms Of Use</div>
              <div>FAQ</div>
              <div>Contact</div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-white">
            <div>Download App</div>
            <div>
              <h1>Save $3 with App New User Only</h1>
              <div>
                <Image src={downloadapp} alt="qr code" />
              </div>
            </div>
            <div className="flex gap-[24px] pt-[24px]">
              <div>
                <Image src={facebookFooter} alt="facebook" />
              </div>
              <div>
                <Image src={twitterFooter} alt="twitter" />
              </div>
              <div>
                <Image src={instagramFooter} alt="instagram" />
              </div>
              <div>
                <Image src={linkedinFooter} alt="linkedin" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-[24px]">
        <div className="text-[#4a4a4a] h-[40px]">
          Copyright Rimel 2022. All right reserved
        </div>
      </div>
    </footer>
  );
}
