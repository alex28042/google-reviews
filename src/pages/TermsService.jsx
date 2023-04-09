import React from "react";
import Header from "../components/Navbar";

function TermsService() {
  return (
    <div className="bg-white flex flex-wrap h-screen justify-center items-center">
      <Header />
      <div className="flex flex-col h-full w-full items-center mt-32">
        <div className="w-5/6 md:w-3/5 h-[1600px] border rounded-xl shadow-xl border-purple-400 relative flex flex-col items-center justify-center">
          <h1 className="font-bold mt-10 text-center md:text-4xl text-2xl">
            Terms of Service
          </h1>
          <div className="mt m-6">
            <h2 className="font-bold text-lg">
              1. Acceptance of Terms of Service
            </h2>
            <p>
              By using our website and services, you agree to comply with these
              Terms of Service. If you do not agree with these terms, do not use
              our website or services.
            </p>
            <h2 className="font-bold text-lg">2. Service Description</h2>
            <p>
              Our website offers the sale of Google reviews to improve your
              business's online reputation. By purchasing our reviews, you agree
              that they will be posted on your company's Google page.
            </p>
            <h2 className="font-bold text-lg">3. Eligibility</h2>
            <p>
              To use our services, you must be over 18 years of age and have a
              valid Google account.
            </p>
            <h2 className="font-bold text-lg">4. Payment and Refund</h2>
            <p>
              Payment is made in advance and is required to start the review
              publication process. We do not offer refunds once the reviews have
              been posted.
            </p>
            <h2 className="font-bold text-lg">5. Review Content</h2>
            <p>
              We reserve the right to reject any content we deem inappropriate,
              offensive, or in violation of Google policies.
            </p>
            <h2 className="font-bold text-lg">6. Liability</h2>
            <p>
              You are responsible for complying with all applicable laws and
              regulations in connection with the purchase of Google reviews. We
              are not responsible for any legal, criminal, or administrative
              action that may result from the purchase of our reviews.
            </p>
            <h2 className="font-bold text-lg">
              7. Changes to Terms of Service
            </h2>
            <p>
              We reserve the right to modify these Terms of Service at any time.
              Changes will take effect immediately upon posting on our website.
            </p>
            <h2 className="font-bold text-lg">8. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to our
              services at any time, for any reason, without notice.
            </p>
            <h2 className="font-bold text-lg">
              9. Applicable Law and Jurisdiction
            </h2>
            <p>
              These Terms of Service shall be governed and interpreted in
              accordance with the laws of the country in which our company is
              located. Any dispute arising from these terms shall be subject to
              the exclusive jurisdiction of the courts of that country.
            </p>
            <h2 className="font-bold text-lg">10. Contact</h2>
            <p>
              If you have any questions about these Terms of Service, please
              contact our customer support team using the contact information
              provided on our website.
            </p>
            <h2 className="font-bold text-lg">11. Delivery Timelines</h2>
            <p>
              The delivery timeline for our Google reviews varies between 1 day
              and 1 week, depending on the selected package. This timeline is
              counted from the moment we receive payment and the necessary
              information to create and post the reviews on your company's
              Google page.
            </p>
          </div>
        </div>

        <h2 className="font-bold mt-5 text-lg">
          Contact Us: businessgrowthofficial@outlook.com
        </h2>
      </div>
    </div>
  );
}

export default TermsService;
