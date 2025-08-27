"use client";

import phone from "@/public/images/phone.png";
import play from "@/public/icons/play.png";
import app from "@/public/icons/app.png";

import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="hero" style={{ background: "#F3F3F3" }}>
      <div className="container pt-4 pb-5 pt-md-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="position-relative" style={{ height: 600 }}>
              <Image
                src={phone}
                fill
                priority
                alt="phone"
                className="mb-3 me-3 object-fit-contain"
              />
            </div>
          </div>

          <div className="col-md-8 mt-5 mt-md-0 d-flex flex-column justify-content-center">
            <h1 className="display-2 fw-bold">
              Report Anonymously,
              <br />
              <span className="text-primary">ONE REPORT</span> at a time.
            </h1>

            <div>
              <p className="mb-5">
                SmartRR is a virtual one stop shop for Gender Based Violence and
                Sexual Reproductive Health. We are committed to creating a
                safer, more supportive world for survivors and adolescent girls.
              </p>

              <div className="d-flex flex-column flex-md-row">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.smartrr.smartrr"
                  target="_blank"
                  className="btn-dash bg-white py-4 px-5 rounded-pill text-black fw-bold mb-3 me-md-3 mb-md-0"
                >
                  <Image
                    src={play}
                    height={24}
                    priority
                    alt="icon"
                    className="me-md-2"
                  />
                  Download in Play Store
                </Link>

                <Link
                  href="https://apps.apple.com/ng/app/smartrr/id6448441128"
                  target="_blank"
                  className="btn-dash bg-white py-4 px-5 rounded-pill text-black fw-bold"
                >
                  <Image
                    src={app}
                    height={24}
                    priority
                    alt="icon"
                    className="me-2"
                  />
                  Download in Apple Store
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
