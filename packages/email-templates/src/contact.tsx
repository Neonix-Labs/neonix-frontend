export interface EmailTemplateProps {
  email: string;
  message: string;
  name: string;
  phone?: string;
}

export function ContactTemplate(props: EmailTemplateProps) {
  return (
    <div style={{ margin: 0, padding: 0, color: "#333" }}>
      <div>
        <p>Hi Team,</p>
        <p>We’ve received a new inquiry from a user! Here are the details:</p>
        <div>
          <p style={{ margin: "5px 0" }}>
            <strong>Name:</strong> {props.name}
          </p>
          <p style={{ margin: "5px 0" }}>
            <strong>Email:</strong> {props.email}
          </p>
          <p style={{ margin: "5px 0" }}>
            <strong>Phone:</strong> {props.phone}
          </p>
          <p style={{ margin: "5px 0" }}>
            <strong>Message:</strong>
          </p>
          <p style={{ margin: "10px 0" }}>{props.message}</p>
        </div>
        <p>Please review and let’s determine the best way to respond.</p>
        <p>Ciao Team</p>
      </div>
    </div>
  );
}
