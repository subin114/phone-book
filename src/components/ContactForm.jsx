import { Button, Form } from "react-bootstrap";
import "./ContactForm.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const dispatch = useDispatch();

  const addContact = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_CONTACT",
      payload: { name, phoneNumber },
    });
  };

  return (
    <div className="ContactForm">
      <Form onSubmit={addContact}>
        <Form.Group className="mb-3 form-group" controlId="formName">
          <Form.Label className="form-label">이름</Form.Label>
          <Form.Control
            className="form-control"
            type="text"
            placeholder="이름을 입력해주세요"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3 form-group" controlId="formContact">
          <Form.Label className="form-label">전화번호</Form.Label>
          <Form.Control
            className="form-control"
            type="number"
            placeholder="전화번호를 입력해주세요"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Form.Group>

        <Button className="form-btn" type="submit">
          추가
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
