"use client";

import Link from "next/link";
import fb from "@/public/icons/fb.png";
import linked from "@/public/icons/linked.png";
import x from "@/public/icons/x.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-3">
            <h4 className="fw-bold">LINKS</h4>

            <ul className="list-unstyled mt-3">
              <li className="mb-2">
                <Link href="/" className="text-dark text-decoration-none">
                  Home
                </Link>
              </li>

              <li className="mb-2">
                <Link href="#about" className="text-dark text-decoration-none">
                  About Us
                </Link>
              </li>

              <li className="mb-2">
                <Link href="#works" className="text-dark text-decoration-none">
                  Works
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  href="#contact"
                  className="text-dark text-decoration-none"
                >
                  Contact Us
                </Link>
              </li>

              <li className="mb-2">
                <Link
                  href="/privacy"
                  className="text-dark text-decoration-none"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="/terms" className="text-dark text-decoration-none">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-3">
            <Link href="/" className="btn-dash btn-dark w-auto">
              Download App
            </Link>

            <div className="mt-4">
              <h5>Follow Us</h5>

              <div className="d-flex align-items-center mt-3">
                <Link href="#" className="me-2">
                  <Image src={x} width={40} alt="x" />
                </Link>

                <Link
                  href="https://www.linkedin.com/company/smartrr.bigfamily360foundation/"
                  target="_blank"
                  className="me-2"
                >
                  <Image src={linked} width={40} alt="linked in" />
                </Link>

                <Link href="#" className="me-2">
                  <Image src={fb} width={40} alt="fb" />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-3 d-flex justify-content-center align-items-center">
            © {new Date().getFullYear()} SmartRR, All Right Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
