// components/sections/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-linear-to-r from-[#0f2942] to-[#081724] text-gray-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-6">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="flex items-center align-middle text-xl font-bold text-[#0F3460] mb-2"
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
                src="/Services/Logo21.png"
                alt="Rehbar Post Logo"
                width={140}
                height={45}
                className="object-contain relative top-0.4 right-3"
                priority
              />
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              We build fast, scalable, and modern digital products for startups
              and businesses worldwide.
            </p>
          </div>

          {/* Address */}
          <div>
            <h4 className="footer-title font-semibold mb-4">Address</h4>
            <p className="footer-text ">
              Satkreeri, Badampora <br />
              Ganderbal <br />
              J&K – 191201
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer-title font-semibold mb-4">Contact</h4>
            <p className="footer-text">
              +91 7051181750 <br />
              support@rehbarpost.com
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-title font-semibold mb-4">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link href="/#home">Home</Link>
              </li>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/#services">Services</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div>
            <h4 className="footer-title font-semibold mb-4">Why Choose Us</h4>
            <ul className="footer-links">
              <li>Expert Team</li>
              <li>Trusted by Clients</li>
              <li>Local Market Knowledge</li>
              <li>Personalized Service</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="sm: justify-center">
            <h4 className="footer-title font-semibold mb-4">Follow Us</h4>
            <p className="text-sm text-gray-400 mb-5">
              Connect with us on social media for updates & insights.
            </p>
            <div className="flex items-center gap-6">
              <a
                className="social-icon"
                href="https://www.instagram.com/rehbar_post/"
              >
                <FaInstagram />
              </a>
              <a
                className="social-icon"
                href="https://www.linkedin.com/company/rehbarpost/"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Rehbar Post Pvt. Ltd. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
