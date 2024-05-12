"use client";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <h1 className="fw-bold">
              Contact <span className="text-primary">Us</span>
            </h1>

            <div className="row mt-3">
              <div className="col-md-6">
                <p>
                  If you have any inquiries, or need assistance, feel free to
                  contact us. We value your feedback and are ready to assist
                  you.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mt-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d504122.3001487441!2d12.388867!3d9.203492!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10fc13023b856837%3A0xa447e86753a548e3!2sBarracks%20Road%2C%20Adamawa%2C%20Nigeria!5e0!3m2!1sde!2sus!4v1715506765437!5m2!1sde!2sus"
              width="100%"
              height={500}
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="col-md-6 d-flex flex-column justify-content-center">
            <div className="mb-3 ms-md-4">
              <h4 className="fw-bold">Address</h4>
              <p>Barracks road Jimeta Yola</p>
            </div>

            <div className="mb-3 ms-md-4">
              <h4 className="fw-bold">Email</h4>
              <p>info@smartrrapp.org</p>
            </div>

            <div className="mb-3 ms-md-4">
              <h4 className="fw-bold">Phone</h4>
              <p>+234 901 302 0325</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
