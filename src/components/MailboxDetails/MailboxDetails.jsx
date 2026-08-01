import { useParams } from 'react-router';

const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams();
  const mailbox = mailboxes.find(({ id }) => id === Number(mailboxId));

  if (!mailbox) {
    return (
      <section>
        <h1 className="page-title">Mailbox Not Found</h1>
      </section>
    );
  }

  return (
    <section className="details-stack">
      <h1 className="details-heading">Mailbox {mailbox.id}</h1>
      <h2 className="section-title">Details</h2>
      <div className="details-copy">
        <p>Boxholder: {mailbox.boxOwner}</p>
        <p>Box Size: {mailbox.boxSize}</p>
      </div>
    </section>
  );
};

export default MailboxDetails;
