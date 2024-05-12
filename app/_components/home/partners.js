"use client";

import globe from "@/public/icons/globe.png";
import people from "@/public/icons/people.png";
import service from "@/public/icons/service.png";
import user from "@/public/icons/user.png";
import Image from "next/image";

const Partners = () => {
  return (
    <section id="partners">
      <hr className="text-primary" />
      
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <h1 className="fw-bold">
              Our <span className="text-primary">Partners</span>
            </h1>

            <div className="row mt-3">
              <div className="col-md-6">
                <p>
                  Our valued partners play a vital role in creating a safer
                  world for survivors and adolescent girls.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-10 mt-5">
            <div className="row">
              <div className="col-md-3">
                <div
                  className="mb-4 py-5 shadow-sm rounded-4 text-center"
                  style={{ background: "#F7F7F7" }}
                >
                  <Image src={globe} width={100} alt="icon" className="mb-3" />

                  <h4 className="text-primary mb-4">08</h4>

                  <h5>STATES</h5>
                </div>
              </div>

              <div className="col-md-3">
                <div
                  className="mb-4 py-5 shadow-sm rounded-4 text-center"
                  style={{ background: "#F7F7F7" }}
                >
                  <Image src={people} width={100} alt="icon" className="mb-3" />

                  <h4 className="text-primary mb-4">1000+</h4>

                  <h5>CASES</h5>
                </div>
              </div>

              <div className="col-md-3">
                <div
                  className="mb-4 py-5 shadow-sm rounded-4 text-center"
                  style={{ background: "#F7F7F7" }}
                >
                  <Image
                    src={service}
                    width={100}
                    alt="icon"
                    className="mb-3"
                  />

                  <h4 className="text-primary mb-4">58</h4>

                  <h5>SERVICE PROVIDERS</h5>
                </div>
              </div>

              <div className="col-md-3">
                <div
                  className="mb-4 py-5 shadow-sm rounded-4 text-center"
                  style={{ background: "#F7F7F7" }}
                >
                  <Image src={user} width={100} alt="icon" className="mb-3" />

                  <h4 className="text-primary mb-4">2000+</h4>

                  <h5>USERS</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
