import { Row, Col } from "react-bootstrap";
import "./ContactItem.scss";

const ContactItem = ({ item }) => {
  return (
    <div className="ContactItem border-t">
      <Row className="border-t">
        <Col className="img col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
          <img
            width={40}
            height={40}
            src="https://www.alleganyco.gov/wp-content/uploads/unknown-person-icon-Image-from.png"
            alt="person_img"
          />
        </Col>
        <Col className="p-0 info col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10">
          <div>{item.name}</div>
          <div>{item.phoneNumber}</div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactItem;
