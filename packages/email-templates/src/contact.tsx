export interface ContactEmailTemplateProps {
  email: string;
  message: string;
  name: string;
  phone?: string;
}

export function ContactEmailTemplate(props: ContactEmailTemplateProps) {
  return (
    <div>
      <p>Contact request from {props.name}!</p>
      <p>
        You've received a new contact request from {props.name}. Here's what
        they had to say:
      </p>
      <p>{props.message}</p>
      <p>
        You can reach out to them at {props.email} or {props.phone}.
      </p>
      <p>Thanks for using our contact form!</p>
    </div>
  );
}
