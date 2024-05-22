import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import "./ContactList.scss";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contactList = useSelector((state) => state.contactList);

  return (
    <div className="ContactList">
      <Form.Label className="form-label">목록</Form.Label>
      <SearchBox />
      {contactList.map((item, i) => (
        <ContactItem key={i} item={item} />
      ))}
    </div>
  );
};

export default ContactList;
