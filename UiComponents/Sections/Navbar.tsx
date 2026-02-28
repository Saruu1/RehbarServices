"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { SheetTitle } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { name: "Home", href: "/#home" },
  { name: "Services", href: "/#services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Careers", href: "/careers" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "About Us", href: "/about-us" },
  { name: "Contact", href: "/contact-us" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  // Close mobile menu on tablet & desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center align-middle text-xl font-bold text-[#0F3460] ml-2"
        >
          {/* <Image
            src="/services/logo-rehbarPost.png"
            alt="Rehbar Post Logo"
            width={45}
            height={45}
            className="object-contain"
            priority
          /> */}
          <Image
            src="/Services/Logo-removebg.png"
            alt="Rehbar Post Logo"
            width={140}
            height={45}
            className="object-contain relative top-0.4 right-3"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-md font-medium text-muted-foreground transition-colors hover:text-black"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Nav */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-12 w-12 [&_svg]:h-7! [&_svg]:w-7!"
            >
              <Menu />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-full px-6 pt-10">
            <VisuallyHidden>
              <SheetTitle>Mobile navigation</SheetTitle>
            </VisuallyHidden>
            <nav className="flex flex-col items-center gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="w-full max-w-2xs rounded-2xl bg-muted px-5 py-2.5 text-center text-base font-medium text-[#64748B] transition-colors hover:bg-[#0F3460] hover:text-white active:scale-[0.97]"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
