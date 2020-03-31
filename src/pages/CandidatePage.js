import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import {
  Row,
  Col,
  Container,
} from "react-bootstrap";
import CreateCandidatePage from "./pages/CreateCandidatePage"


export default function CandidatePage(props) {
  const { id } = useParams(); //get the parameter from url
  const [candidates, setCandidates] = useState(null);

  const getCandidates = async () => {
    try {
      const response = await fetch(`http://localhost:3003/candidates/${id}`);
      const data = await response.json();
      setCandidates(data);
    } catch {}
  };

  useEffect(() => {
    getCandidates();
  }, []);


  return (
    <Container >
    <Row>
      <Col>
        <CreateCandidatePage candidate={candidates} />
      </Col>
    </Row>
  </Container>
  );
}