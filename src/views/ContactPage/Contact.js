import React from "react";
import AddTitle from "../../components/AddTitle";
import Bar from "../../components/Bar";
import LeftTitle from "../../components/LeftTitle";
import TitleDescription from "../../components/TitleDescription";
import CONTACT_IMAGE from "../../utils/assets/images/contactimage.jpeg";
import { FaFacebookF } from "react-icons/fa";
import ContactForm from "./ContactForm";
import PricingEstimate from "./PricingEstimate";
import { InlineWidget } from "react-calendly";

const Contact = () => {
  const description = [
    "Please fill out the form for tutoring inquiries. We will get back to you within 24 hours.",
    "For a quick consultation, set up a meeting with us through Calendly below.",
  ];
  const pricingDesc = [
    "Please fill out our calculator to the right. Keep in mind these prices are only estimates. Reach out to us above for exact pricing and scheduling.",
  ];
  return (
    <div className="contact-page">
      <AddTitle title="Get in touch with us." />
      <div className="row  mb-5 contact-highlights">
        <div className="col-md-4 col-sm-12">
          <Bar bg="#72C861" />
          <TitleDescription
            title="for parent and coaches"
            description="for tutoring inquiries, please fill out the form below and we will be in touch ASAP."
          />
        </div>
        <div className="col-md-4 col-sm-12">
          <Bar bg="#F1A741" />
          <TitleDescription
            title="for schools and institutions."
            description="for competition hosting inquiries, please email contact@educationacademy.xyz"
          />
        </div>
        <div className="col-md-4 col-sm-12">
          <Bar bg="#453D80" />
          <TitleDescription
            title="for other affiliations."
            description="for general inquiries about Education Academy, please email contact@educationacademy.xyz"
          />
        </div>
      </div>
      <div className="contact-form-container">
        <div className="contact-form-container-left">
          <LeftTitle
            header="Online math tutoring"
            description={description}
            headerColor="white"
            descColor="white"
            hideButton
          />
          <div>
            <img
              src={CONTACT_IMAGE}
              alt="Contact Image"
              className="contact-image"
            />
          </div>
          <FaFacebookF size="34px" cursor="pointer" />
        </div>
        <div className="contact-form-container-right">
          <ContactForm />
        </div>
      </div>
      <div className="scheduling">
        <InlineWidget url="https://calendly.com/educationacademy/consultationsession?embed_domain=educationacademy.xyz&embed_type=Inline&primary_color=f1a737" />
      </div>
      <div className="pricing-estimate-container">
        <div className="pricing-estimate-left">
          <LeftTitle
            header="Pricing Estimate"
            description={pricingDesc}
            headerColor="white"
            descColor="white"
            hideButton
          />
        </div>
        <div className="pricing-estimate-right">
          <PricingEstimate />
        </div>
      </div>
    </div>
  );
};

export default Contact;
