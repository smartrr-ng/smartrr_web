"use client";

import image1 from "@/public/images/image1.png";
import image2 from "@/public/images/image2.png";
import image3 from "@/public/images/image3.png";
import Image from "next/image";

const Works = () => {
  return (
    <section id="works">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12">
            <h1 className="fw-bold">
              How it <span className="text-primary">Works</span>
            </h1>

            <div className="row mt-3">
              <div className="col-md-6">
                <p>
                  We connect survivors to service providers from their immediate
                  community.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-10 mt-5">
            <div className="row">
              <div className="col-md-4">
                <div
                  className="mb-4 rounded-4 p-4"
                  style={{ background: "#f9f9f9 !important" }}
                >
                  <h5 className="text-primary mb-3 text-center">
                    Report Incidents
                  </h5>

                  <p>
                    SmartRR empowers survivors to report Gender Based Violence
                    incidents quickly and discreetly. Using our user-friendly
                    mobile app, you can provide essential information, ensuring
                    that help is just a few taps away.{" "}
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div
                  className="mb-4 rounded-4 p-4"
                  style={{ background: "#f9f9f9" }}
                >
                  <h5 className="text-primary mb-3 text-center">
                    Instant Connection
                  </h5>

                  <p>
                    Upon reporting, SmartRR instantly connects you with the
                    nearest service providers, including the police, NGOs,
                    hospitals, and lawyers. This ensures that survivors receive
                    the assistance they need promptly, promoting a faster and
                    more effective response.{" "}
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div
                  className="mb-4 rounded-4 p-4"
                  style={{ background: "#f9f9f9" }}
                >
                  <h5 className="text-primary mb-3 text-center">
                    Comprehensive Support
                  </h5>

                  <p>
                    SmartRR goes beyond immediate connections. We provide a
                    comprehensive support network for survivors, offering
                    resources, information, and guidance to navigate the
                    challenges they face. Our commitment is to create a safer,
                    more supportive world for all.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <h1 className="fw-bold">
              Our Amazing <span className="text-primary">Works</span>
            </h1>

            <div className="row mt-3">
              <div className="col-md-6">
                <p>
                  Our works are a testament to our commitment to creating a
                  safer, more inclusive world for all.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-12 mt-5">
            <div className="row">
              <div className="col-md-4">
                <div className="mb-4 position-relative" style={{ height: 500 }}>
                  <Image
                    src={image1}
                    fill
                    alt="image"
                    priority
                    className="object-fit-cover mb-3 shadow rounded-4"
                  />
                </div>
              </div>

              <div className="col-md-4">
                <div className="mb-4 position-relative" style={{ height: 500 }}>
                  <Image
                    src={image2}
                    fill
                    alt="image"
                    priority
                    className="object-fit-cover mb-3 shadow rounded-4"
                  />
                </div>
              </div>

              <div className="col-md-4">
                <div className="mb-4 position-relative" style={{ height: 500 }}>
                  <Image
                    src={image3}
                    fill
                    alt="image"
                    priority
                    className="object-fit-cover mb-3 shadow rounded-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
