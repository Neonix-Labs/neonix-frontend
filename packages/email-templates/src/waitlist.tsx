import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

export const WaitlistTemplate = () => (
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
          <Text style={paragraph}>Hi,</Text>
          <Text style={paragraph}>
            Thank you for joining the Recap waitlist! We're thrilled to have you
            on board as we prepare to launch this exciting new tool.
          </Text>
          <Text style={paragraph}>
            By signing up, you've secured your spot to be among the first to
            experience Recap's free tier and get a glimpse into how it can
            transform your Web3 experience. We'll keep you updated on our
            progress and let you know as soon as Recap is ready for you to
            explore.
          </Text>
          <Text style={paragraph}>
            In the meantime, feel free to connect with us on{" "}
            <Link style={anchor} href="https://x.com/NeonixLabs">
              Twitter
            </Link>{" "}
            and{" "}
            <Link style={anchor} href="https://medium.com/@neonixlabs">
              Medium
            </Link>
            . We'd love to hear your thoughts and expectations for Recap! 💬{" "}
          </Text>
          <Text style={paragraph}>
            Finally, we've put together a{" "}
            <Link
              style={anchor}
              href="https://stripe.com/docs/checklist/website"
            >
              quick checklist
            </Link>{" "}
            to ensure your website conforms to card network standards.
          </Text>
          <Text style={paragraph}>
            Thanks again for your interest. We can't wait to share Recap with
            you soon!
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

const anchor = {
  color: "#556cd6",
};
