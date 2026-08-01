import { useState } from 'react';
import { useNavigate } from 'react-router';

const MailboxForm = ({ addBox }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    boxOwner: '',
    boxSize: 'Small',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addBox(formData);
    navigate('/mailboxes');
  };

  return (
    <section>
      <h1 className="page-title">New Mailbox</h1>
      <form className="mailbox-form" onSubmit={handleSubmit}>
        <div className="field-group">
          <label htmlFor="boxOwner">Enter a Boxholder:</label>
          <input
            className="text-input"
            id="boxOwner"
            name="boxOwner"
            onChange={handleChange}
            placeholder="Boxholder name"
            required
            type="text"
            value={formData.boxOwner}
          />
        </div>

        <div className="field-group">
          <label htmlFor="boxSize">Select a Box Size:</label>
          <select
            className="select-input"
            id="boxSize"
            name="boxSize"
            onChange={handleChange}
            value={formData.boxSize}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>

        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default MailboxForm;
