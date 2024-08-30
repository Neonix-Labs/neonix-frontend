export interface EmailTemplateProps {
  email: string;
}

export function WaitlistTemplate(props: EmailTemplateProps) {
  return (
    <div>
      <div>Hi Team,</div>
      <br />
      <div> A new user has just joined the Recap waitlist! 🎉 </div>
      <br />
      <p>Here are the details:</p>
      <br />
      <p>• Email: {props.email}</p>
      <br />
      <p> Let’s keep them in the loop as we prepare for launch.</p>
      <br />
      <p>Best regards,</p>
    </div>
  );
}
