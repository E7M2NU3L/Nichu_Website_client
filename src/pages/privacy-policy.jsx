import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';

const PrivacyPolicy = () => {
  const deliveryPolicy = [
    {
      title: "1. Shipping Area",
      subtitle: "We deliver products across India. Shipping outside India is currently unavailable."
    },
    {
      title: "2. Delivery Time",
      subtitle: [
        "Orders are processed within 2-3 business days and delivered within 7-10 business days, depending on the location.",
        "Delays may occur due to unforeseen circumstances (e.g., weather, holidays)."
      ]
    },
    {
      title: "3. Shipping Charges",
      subtitle: "Shipping charges are calculated based on the weight of the product and the delivery location, and they will be displayed during checkout."
    },
    {
      title: "4. Tracking",
      subtitle: "Once shipped, a tracking number will be provided to monitor the delivery status of your order."
    },
    {
      title: "5. Damaged or Lost Goods",
      subtitle: "If your product arrives damaged, or is lost during shipping, please contact us within 3 days of receipt."
    }
  ];

  const refundPolicy = [
    {
      title: "1. Workshops",
      subtitle: "Cancellations made at least 7 days before the workshop will receive a full refund. Cancellations made less than 7 days prior to the event will not be refunded."
    },
    {
      title: "2. Online Courses",
      subtitle: "Refunds are not available once access to the course has been granted."
    },
    {
      title: "3. Products",
      subtitle: "Defective products can be returned within 7 days for a replacement or refund, provided proof of defect is given."
    },
    {
      title: "4. Special Cases",
      subtitle: "Refunds in exceptional circumstances are at Nipix Technology’s discretion."
    }
  ];
  
  return (
    <Container maxWidth="md" className="bg-white p-6 mx-auto text-black">
      {/* Privacy Policy Section */}
      <Box className="mb-6">
        <Typography variant="h4" component="h1" className="text-blue-500 font-bold">
          Privacy Policy
        </Typography>
        <Typography variant="body1" className="mt-4">
          At Nipix Technology, we value your privacy and are committed to protecting your personal information. This policy outlines how we collect, use, and safeguard your data when you engage with our services.
        </Typography>
      </Box>

      {/* Information We Collect */}
      <Box className="mb-6">
        <Typography variant="h6" component="h2" className="text-blue-500 font-semibold">
          1. Information We Collect
        </Typography>
        <Typography variant="body1" className="mt-2">
          - Personal data (name, email, contact details) provided when you register for courses, workshops, or make purchases.
          <br />
          - Payment details when you buy our products or services.
          <br />
          - Information collected through cookies and tracking technologies when you use our website.
        </Typography>
      </Box>

      {/* How We Use Your Information */}
      <Box className="mb-6">
        <Typography variant="h6" component="h2" className="text-blue-500 font-semibold">
          2. How We Use Your Information
        </Typography>
        <Typography variant="body1" className="mt-2">
          - To provide and manage your access to our courses, workshops, and products.
          <br />
          - For communication, including sending updates, promotions, and service-related announcements.
          <br />
          - To improve our website and services by analyzing user behavior.
          <br />
          - We do not sell or share your personal information with third parties except as necessary to provide services (e.g., payment processing) or as required by law.
        </Typography>
      </Box>

      {/* Data Security */}
      <Box className="mb-6">
        <Typography variant="h6" component="h2" className="text-blue-500 font-semibold">
          3. Data Security
        </Typography>
        <Typography variant="body1" className="mt-2">
          We take appropriate measures to protect your data, including encryption and secure servers. However, no system is completely secure, and we cannot guarantee the absolute security of your information.
        </Typography>
      </Box>

      {/* Your Rights */}
      <Box className="mb-6">
        <Typography variant="h6" component="h2" className="text-blue-500 font-semibold">
          4. Your Rights
        </Typography>
        <Typography variant="body1" className="mt-2">
          You have the right to access, correct, or request deletion of your personal data. Please contact us at{" "}
          <Link href="mailto:privacy@nipixtechnology.com" className="text-blue-500 underline">
            privacy@nipixtechnology.com
          </Link>{" "}
          to exercise these rights.
        </Typography>
      </Box>

      {/* Changes to the Privacy Policy */}
      <Box className="mb-6">
        <Typography variant="h6" component="h2" className="text-blue-500 font-semibold">
          5. Changes to the Privacy Policy
        </Typography>
        <Typography variant="body1" className="mt-2">
          We may update this policy periodically. Significant changes will be communicated via email or a notice on our website.
        </Typography>
      </Box>

      {/* Terms and Conditions */}
      <Box className="mb-6">
        <Typography variant="h4" component="h1" className="text-blue-500 font-bold">
          Terms and Conditions
        </Typography>
        <Typography variant="body1" className="mt-4">
          By using our services, you agree to the following terms and conditions:
        </Typography>
        <Typography variant="h6" className="mt-4">
          1. Services
        </Typography>
        <Typography variant="body1">
          We offer online courses, workshops, and product sales (e.g., Arduino kits, sensors).
        </Typography>
        <Typography variant="h6" className="mt-4">
          2. Registration
        </Typography>
        <Typography variant="body1">
          Users must register to access certain services. Accurate information must be provided.
        </Typography>
        <Typography variant="h6" className="mt-4">
          3. Payments
        </Typography>
        <Typography variant="body1">
          All payments are final, and users must pay in full at the time of service/product purchase.
        </Typography>
        <Typography variant="h6" className="mt-4">
          4. Intellectual Property
        </Typography>
        <Typography variant="body1">
          All content on our platform is proprietary. Users cannot reproduce or distribute our materials without permission.
        </Typography>
        <Typography variant="h6" className="mt-4">
          5. Limitation of Liability
        </Typography>
        <Typography variant="body1">
          Nipix Technology is not responsible for any damages arising from the use of our services or products.
        </Typography>
        <Typography variant="h6" className="mt-4">
          6. Conduct
        </Typography>
        <Typography variant="body1">
          Participants in our workshops or courses are expected to behave professionally.
        </Typography>
        <Typography variant="h6" className="mt-4">
          7. Governing Law
        </Typography>
        <Typography variant="body1">
          These terms are governed by the laws of Tamil Nadu, India.
        </Typography>
      </Box>

      <Box className="mb-6">
        <Typography variant="h4" component="h1" className="text-blue-500 font-bold">
          Shipping and Delivery Policy
        </Typography>
        <Typography variant="body1" className="mt-4">
          Go through the delivery policies to use our products efficiently.
        </Typography>
        {deliveryPolicy.map((content, index) => (
          <React.Fragment>
            <Typography variant="h6" className="mt-4">
              {content.title}
            </Typography>
            <Typography variant="body1">
              {content.subtitle}  
            </Typography>
          </React.Fragment>
        ))}
      </Box>

      <Box className="mb-6">
        <Typography variant="h4" component="h1" className="text-blue-500 font-bold">
          Cancellation and Refund Policy
        </Typography>
        <Typography variant="body1" className="mt-4">
          Go through the refund policies to ensure the constraints to claim your funds.
        </Typography>
        {refundPolicy.map((content, index) => (
          <React.Fragment>
            <Typography variant="h6" className="mt-4">
              {content.title}
            </Typography>
            <Typography variant="body1">
              {content.subtitle}  
            </Typography>
          </React.Fragment>
        ))}
      </Box>

      {/* Contact Section */}
      <Box className="mb-6">
        <Typography variant="h4" component="h1" className="text-blue-500 font-bold">
          Contact Us
        </Typography>
        <Typography variant="body1" className="mt-4">
          For any questions, concerns, or support, please contact us at:
        </Typography>
        <Typography variant="body1">
          <strong>Email</strong>:{" "}
          <Link href="mailto:nipixtechnology@gmail.com" className="text-blue-500 underline">
            nipixtechnology@gmail.com
          </Link>
          <br />
          <strong>Phone</strong>: +91-9025608199
          <br />
          <strong>Address</strong>: 19A, S9, D Block, Angela Apartment, S.V.T Nagar, Thirumullaivoyal, Chennai – 600 062
        </Typography>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;
