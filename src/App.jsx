import "./App.scss";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

// 1. 왼쪽에는 연락처 등록하는 폼이, 오른쪽에는 연락처 리스트와 서치 창이 있다
// 2. 리스트에 유저 이름과 전화번호를 추가할 수 있다
// 3. 리스트에 아이템이 몇 개 있는지 보인다
// 4. 사용자가 유저를 이름검색으로 찾을 수 있다

function App() {
  return (
    <div className="App">
      <h1 className="title">연락처</h1>
      <Container>
        <Row>
          <Col className="p-0 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <ContactForm />
          </Col>
          <Col className="p-0 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
