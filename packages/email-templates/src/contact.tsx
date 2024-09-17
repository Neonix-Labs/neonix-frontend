import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

export interface EmailTemplateProps {
  email: string;
  message: string;
  name: string;
  phone?: string;
}

export const ContactTemplate = (props: EmailTemplateProps) => (
  <Html>
    <Head />
    <Preview>Joined waitlist</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            height={24}
            width={24}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122"
            />
          </svg>
          <Hr style={hr} />
          <Text style={paragraph}>Hi Team,</Text>
          <Text style={paragraph}>
            We’ve received a new inquiry from a user! Here are the details:
          </Text>
          <Hr style={hr} />

          <ul>
            <li style={paragraph}>
              <strong>Name</strong> {props.name}
            </li>
            <li style={paragraph}>
              <strong>Email</strong> {props.email}
            </li>
            <li style={paragraph}>
              <strong>Phone</strong> {props.phone}
            </li>
            <li style={paragraph}>
              <strong>Message</strong> {props.message}
            </li>
          </ul>

          <Hr style={hr} />

          <Text style={paragraph}>
            Please review and let’s determine the best way to respond.
          </Text>

          <Text style={paragraph}>— Neonix Labs Team</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0",
  marginBottom: "64px",
};

const box = {
  padding: "0 48px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const paragraph = {
  color: "#525f7f",
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const li = {};
