"use client";

import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Footer = () => {
  const pathname = usePathname();

  const textColor =
    pathname === "/" ? "text-secondary-foreground" : "text-foreground";
  const placeHolderTextButton =
    pathname === "/"
      ? "placeholder:text-secondary-foreground"
      : "placeholder:text-foreground";
  const followMeTextColor =
    pathname === "/" ? "text-foreground" : "text-secondary-foreground";
  const followMeButtonColor = pathname === "/" ? "bg-background" : "bg-primary";
  const emailButtonBorderColor =
    pathname === "/" ? "border-white" : "border-black";

  return (
    <div className="  pb-20 xl:pb-12">
      <div className="flex flex-col items-center">
        <span className={` text-[20px] uppercase ${textColor} lg:text-[40px]`}>
          Keep in touch
        </span>
        <div className="flex flex-col md:flex-row md:gap-x-2 ">
          <Input
            placeholder="Email"
            className={`mx-auto mt-4 w-40 border-2 ${emailButtonBorderColor} ${textColor} ${placeHolderTextButton} bg-transparent`}
          />
          <Button
            className={`mt-4 w-40 ${followMeButtonColor} ${followMeTextColor}`}
          >
            FOLLOW ME
          </Button>
        </div>
        <div className="flex flex-row pt-4">
          <p
            className={`${textColor} max-w-[200px] text-center text-[14px] leading-5 xl:max-w-[300px] xl:text-[20px] xl:leading-6`}
          >
            By the way, my name is Sandamal. Welcome to my lands.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
