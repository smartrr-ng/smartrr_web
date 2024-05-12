"use client";

import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";

const Questions = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  return (
    <section id="questions" style={{ background: "#F3F3F3" }}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12">
            <h1 className="fw-bold">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>

            <div className="row mt-3">
              <div className="col-md-6">
                <p>
                  Find answers to common questions about SmartRR, reporting GBV,
                  and accessing services.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-8 text-start mt-5">
            <div className="mb-3">
              <button
                onClick={() => setOpen1(!open1)}
                aria-expanded={open1}
                className="w-100 text-start border-0 bg-white py-3 px-4 rounded-pill"
              >
                Can I delete my account on SmartRR?
              </button>

              <Collapse className="mt-3" in={open1}>
                <div>
                  <b>Instructions</b>

                  <ol className="mt-2">
                    <li>Open SmartRR</li>

                    <li>
                      Go to Account {">"} Settings {">"} Delete My Account
                    </li>

                    <li>Confirm your password</li>

                    <li>Tap DELETE MY ACCOUNT</li>
                  </ol>
                </div>
              </Collapse>
            </div>

            <div className="mb-3">
              <button
                onClick={() => setOpen2(!open2)}
                aria-expanded={open2}
                className="w-100 text-start border-0 bg-white py-3 px-4 rounded-pill"
              >
                How can I report a case?
              </button>

              <Collapse className="mt-3" in={open2}>
                <p>
                  Download SmartRR, Sign up & Login, Click Report a case, select
                  service type, sub-service, State, LGA, and proceed, select
                  available service provider and submit
                </p>
              </Collapse>
            </div>

            <div className="mb-3">
              <button
                onClick={() => setOpen3(!open3)}
                aria-expanded={open3}
                className="w-100 text-start border-0 bg-white py-3 px-4 rounded-pill"
              >
                Can I report a case without internet connection?.
              </button>

              <Collapse className="mt-3" in={open3}>
                <p>No only with your permission</p>
              </Collapse>
            </div>

            <div className="mb-3">
              <button
                onClick={() => setOpen4(!open4)}
                aria-expanded={open4}
                className="w-100 text-start border-0 bg-white py-3 px-4 rounded-pill"
              >
                Can I report a case without internet connection?.
              </button>

              <Collapse className="mt-3" in={open4}>
                <p>
                  No, unless you use the SmartRR USSD code available in your
                  country
                </p>
              </Collapse>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;
