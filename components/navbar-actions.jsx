"use client";

import {
  ShoppingBag,
} from "lucide-react";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useCart from "@/hooks/use-cart";
import { Button } from "./ui/button";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const cart = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className={`ml-auto flex items-center gap-x-4 `}>
      <Button
        type="button"
        onClick={() => router.push("/shporta")}
        className="hidden sm:flex items-center rounded-full bg-black"
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-1.5 text-sm font-medium text-white">
          {cart.cart.length}
        </span>
      </Button>

      <div
        className="flex sm:hidden cursor-pointer relative"
        onClick={() => router.push("/shporta")}
      >
        <ShoppingBag size={25} />
        <span className="text-[0.6rem] flex justify-center items-center font-medium text-white absolute -top-2.5 left-3.5 rounded-full bg-black w-[15px] h-[15px]">
          {cart.cart.length}
        </span>
      </div>
    </div>
  );
};

export default NavbarActions;
