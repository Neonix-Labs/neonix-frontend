export interface EmailTemplateProps {
  email: string;
}

export function WaitlistTemplate(props: EmailTemplateProps) {
  return (
    <div style={{ margin: 0, padding: 0, color: "#333" }}>
      <div>
        <p>Hi Team,</p>
        <p>A new user has just joined the Recap waitlist! 🎉</p>
        <p style={{ margin: "5px 0" }}>
          <strong>Email:</strong> {props.email}
        </p>
        <p>Let’s keep them in the loop as we prepare for launch.</p>
        <p>Ciao Team</p>
      </div>
    </div>
  );
}
