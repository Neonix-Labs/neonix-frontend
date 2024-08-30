export interface EmailTemplateProps {
  email: string;
  message: string;
  name: string;
  phone?: string;
}

export function ContactTemplate(props: EmailTemplateProps) {
  return (
    <div>
      <p>Hi Team,</p>
      <br />
      <p>We’ve received a new inquiry from a user! Here are the details:</p>
      <br />
      <p>• Name: {props.name}</p>
      <p>• Email: {props.email}</p>
      <p>• Phone: {props.phone}</p>
      <p>• Message:</p>
      <p>{props.message}</p>
      <br />
      <p>Please review and let’s determine the best way to respond.</p>
      <br />
      <p>Best regards,</p>
    </div>
  );
}
