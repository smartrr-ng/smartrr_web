"use client";

import about from "@/public/images/about.png";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" style={{ background: "#F7F7F7" }}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1 className="fw-bold">
              About <span className="text-primary">Us</span>
            </h1>

            <div className="mt-4 col-md-8">
              <p>
                Smart Reporting and Referral (SmartRR) is a mobile application
                that allows people to report Gender Based Violence cases, and
                also connect them to the nearest service providers(Police, NGOs,
                Hospitals, Lawyers) from their smart and basic phones.
              </p>

              <p>
                SmartRR is a virtual one stop shop for Gender Based Violence and
                Sexual Reproductive Health Services. These means that all forms
                of services can be accessed by survivors and adolescent girls.
              </p>
            </div>
          </div>

          <div className="col-md-4 mt-5">
            <div className="position-relative" style={{ height: 500 }}>
              <Image
                src={about}
                fill
                alt="about"
                className="object-fit-cover mb-3 rounded-5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
