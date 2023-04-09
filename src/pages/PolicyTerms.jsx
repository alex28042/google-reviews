import React from "react";
import Header from "../components/Navbar";

function PolicyTerms() {
  return (
    <div className="bg-white flex flex-wrap h-screen justify-center items-center">
      <Header />
      <div className="flex flex-col h-full w-full items-center mt-32">
        <div className="w-5/6 md:w-3/5 h-[1000px] border rounded-xl shadow-xl border-purple-400 relative flex flex-col items-center justify-center">
          <h1 className="font-bold mt-6 text-center md:text-4xl text-2xl">
            Privacy Policy
          </h1>
          <div className="m-6">
            <h2 className="font-bold text-lg">1. Introduction</h2>
            <p>
              We are committed to protecting the privacy of our users. This
              Privacy Policy describes how we collect, use, and protect the
              personal information you provide to us when using our Google
              Reviews sales page.
            </p>
            <h2 className="font-bold text-lg">2. Information collected</h2>
            <p>We collect the following personal information from our users:</p>
            <ul>
              <li>a) Email address</li>
              <li>b) Business URL</li>
            </ul>

            <h2 className="font-bold text-lg">3. Use of information</h2>
            <p>We use the collected information to:</p>
            <ul >
              <li>a) Process and manage Google Reviews purchase requests.</li>
              <li>b) Communicate with you regarding your request.</li>
            </ul>

            <h2 className="font-bold text-lg">4. Protection of information</h2>
            <p>
              We strive to protect your personal information through appropriate
              technical and organizational security measures.
            </p>

            <h2 className="font-bold text-lg">5. We do not share your information</h2>
            <p>
              We do not share your personal information with third parties,
              except when necessary to comply with our legal obligations or to
              protect our legitimate rights and interests.
            </p>

            <h2 className="font-bold text-lg">6. Changes to the Privacy Policy</h2>
            <p>
              We reserve the right to modify this Privacy Policy at any time. If
              we make changes, we will notify you by updating the date at the
              top of the policy and/or through a notification on our page.
            </p>

            <h2 className="font-bold text-lg">7. Contact</h2>
            <p>
              If you have questions or concerns about our Privacy Policy, please
              feel free to contact us through the communication channels
              provided on our page.
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

export default PolicyTerms;
