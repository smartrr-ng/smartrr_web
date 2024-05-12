"use client";

import quote from "@/public/icons/quote.png";
import Image from "next/image";

const Stories = () => {
  return (
    <section id="stories" style={{ background: "#f28907" }}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 text-white">
            <h1 className="fw-bold">Success Stories</h1>

            <div className="row mt-3">
              <div className="col-md-6">
                <p>
                  Read what our users have to say about their experience with
                  SmartRR. Real stories, real impact.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-10 mt-5">
            <div className="row">
              <div className="col-md-4">
                <div className="mb-4 bg-white shadow-lg rounded-4 p-4 text-center">
                  <Image src={quote} width={50} alt="quote" className="mb-3" />

                  <p>
                    They make me feel as if I am the bad person in the village
                    square because I have been speaking against GBV/HP since the
                    day I attended the SmartRR advocacy training, sad enough I
                    am cut but I never knew until now but it ends with me.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="mb-4 bg-white shadow-lg rounded-4 p-4 text-center">
                  <Image src={quote} width={50} alt="quote" className="mb-3" />

                  <p>
                    SmartRR was my saving contact because I tried calling others
                    but none responded but your app saved my son, even though I
                    feel my son future is almost destroyed but I have hope now
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="mb-4 bg-white shadow-lg rounded-4 p-4 text-center">
                  <Image src={quote} width={50} alt="quote" className="mb-3" />

                  <p>
                    I was raped by my cousin consistently and to be honest i was
                    sliding into depression, I couldn't talk to anybody because
                    it felt like no one is even ready to listen but SmartRR
                    anonymous chatbot was my healer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stories;
