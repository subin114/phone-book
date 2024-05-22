import { Row, Col, Form, Button } from "react-bootstrap";
import "./SearchBox.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";

const SearchBox = () => {
  let [keyword, setKeyword] = useState("");
  let dispatch = useDispatch();

  const searchByName = (e) => {
    e.preventDefault();
    dispatch({ type: "SEARCH_BY_USERNAME", payload: { keyword } });
  };

  return (
    <div className="SearchBox" onSubmit={searchByName}>
      <Row>
        <Col className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10">
          <Form.Control
            className="form-control"
            type="text"
            placeholder="검색"
            onChange={(e) => setKeyword(e.target.value)}
          />
        </Col>
        <Col className="p-0 col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
          <Button type="submit" className="form-btn">
            찾기
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default SearchBox;
