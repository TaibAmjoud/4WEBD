import React from "react";

const AboutPage = () => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h2 className="mb-4">About Us</h2>
            <p>
              Welcome to our event ticket management system! Whether you're a
              local business organizing a small-scale event or an international
              superstar embarking on a world tour, our SaaS platform is designed
              to meet your ticketing needs with efficiency and scalability.
            </p>
            <h3 className="mt-5 mb-3">Our Mission</h3>
            <p>
              At our core, we are driven by the mission to empower event
              organizers of all scales. We understand the diverse needs of our
              users, from schools planning local concerts to global icons
              coordinating massive tours. Our goal is to provide a robust and
              adaptable system that streamlines the ticketing process, ensuring
              smooth operations for all types of events.
            </p>
            <h3 className="mt-5 mb-3">Key Features</h3>
            <ul className="list-unstyled">
              <li>Scalability</li>
              <li>Customization</li>
              <li>Internationalization</li>
              <li>Security</li>
              <li>Analytics</li>
            </ul>
            <h3 className="mt-5 mb-3">Why Choose Us?</h3>
            <ul className="list-unstyled">
              <li>Reliability</li>
              <li>Flexibility</li>
              <li>Customer Support</li>
              <li>Innovation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
