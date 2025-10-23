"use client";

import globe from "@/public/icons/globe.png";
import people from "@/public/icons/people.png";
import service from "@/public/icons/service.png";
import user from "@/public/icons/user.png";
import unfpa from "@/public/icons/unfpa.png";
import gcc from "@/public/icons/gcc.png";
import plan from "@/public/icons/plan.png";
import gbvss from "@/public/icons/gbvss.png";
import ng from "@/public/icons/ng.png";
import Image from "next/image";

const Partners = () => {
  return (
    <section id="partners">
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

          <div className="col-md-12 mt-5 text-center overflow-x-scroll d-flex justify-content-center">
            <Image
              src={unfpa}
              height={100}
              priority
              alt="partner"
              className="mb-3 me-3 object-fit-cover"
            />
            <Image
              src={gcc}
              height={100}
              priority
              alt="partner"
              className="mb-3 me-3 object-fit-cover"
            />
            <Image
              src={plan}
              height={100}
              priority
              alt="partner"
              className="mb-3 me-3 object-fit-cover"
            />
            <Image
              src={gbvss}
              height={100}
              priority
              alt="partner"
              className="mb-3 me-3 object-fit-cover"
            />
            <Image
              src={ng}
              height={100}
              priority
              alt="partner"
              className="mb-3 me-3 object-fit-cover"
            />
          </div>
        </div>
      </div>

      <hr className="text-primary" />

      <div className="container-fluid py-5">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-3">
                <div
                  className="mb-4 py-5 shadow-sm rounded-4 text-center"
                  style={{ background: "#F7F7F7" }}
                >
                  <Image src={globe} width={100} alt="icon" className="mb-3" />

                  <h4 className="text-primary mb-4">005</h4>

                  <h5>COUNTRIES</h5>
                </div>
              </div>

              <div className="col-md-3">
                <div
                  className="mb-4 py-5 shadow-sm rounded-4 text-center"
                  style={{ background: "#F7F7F7" }}
                >
                  <Image src={people} width={100} alt="icon" className="mb-3" />

                  <h4 className="text-primary mb-4">16,936+</h4>

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

                  <h4 className="text-primary mb-4">3,000+</h4>

                  <h5>SERVICE PROVIDERS</h5>
                </div>
              </div>

              <div className="col-md-3">
                <div
                  className="mb-4 py-5 shadow-sm rounded-4 text-center"
                  style={{ background: "#F7F7F7" }}
                >
                  <Image src={user} width={100} alt="icon" className="mb-3" />

                  <h4 className="text-primary mb-4">256,333+</h4>

                  <h5>YOUNG PEOPLE REACHED</h5>
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
