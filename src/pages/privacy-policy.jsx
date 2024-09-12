import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <Container className="bg-white p-6 mx-auto text-black">
      <Box className="mb-6">
        <Typography variant="h4" component="h1" className="text-blue-500 font-bold">
          Privacy Policy
        </Typography>
        <Typography variant="body1" className="mt-4">
          At Nipix Technology, we value your privacy and are committed to protecting your personal information. This policy outlines how we collect, use, and safeguard your data when you engage with our services.
        </Typography>
      </Box>

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

      <Box className="mb-6">
        <Typography variant="h6" component="h2" className="text-blue-500 font-semibold">
          3. Data Security
        </Typography>
        <Typography variant="body1" className="mt-2">
          We take appropriate measures to protect your data, including encryption and secure servers. However, no system is completely secure, and we cannot guarantee the absolute security of your information.
        </Typography>
      </Box>

      <Box className="mb-6">
        <Typography variant="h6" component="h2" className="text-blue-500 font-semibold">
          4. Your Rights
        </Typography>
        <Typography variant="body1" className="mt-2">
          You have the right to access, correct, or request deletion of your personal data. Please contact us at <a href="mailto:privacy@nipixtechnology.com" className="text-blue-500 underline">privacy@nipixtechnology.com</a> to exercise these rights.
        </Typography>
      </Box>

      <Box className="mb-6">
        <Typography variant="h6" component="h2" className="text-blue-500 font-semibold">
          5. Changes to the Privacy Policy
        </Typography>
        <Typography variant="body1" className="mt-2">
          We may update this policy periodically. Significant changes will be communicated via email or a notice on our website.
        </Typography>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;
