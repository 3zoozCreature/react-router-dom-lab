import { Link } from 'react-router';

const MailboxList = ({ mailboxes }) => {
  return (
    <section>
      <h1 className="page-title">Mailbox List</h1>
      <div className="mailbox-links">
        {mailboxes.map((mailbox) => (
          <Link key={mailbox.id} to={`/mailboxes/${mailbox.id}`}>
            Mailbox {mailbox.id}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MailboxList;
