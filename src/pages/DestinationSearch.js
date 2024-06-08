import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col, Form } from "react-bootstrap";
import { searchDestinationApi } from "../service/allApis";
import PlanCard from "../components/PlanCard";

function DestinationSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    const result = await searchDestinationApi(searchTerm);
    setSearchResults(result.data);
  };

  return (
    <div>
      <h1>Search for Destinations</h1>
      <Form onSubmit={handleSearchSubmit}>
        <Form.Group controlId="searchTerm">
          <Form.Control
            type="text"
            placeholder="Enter destination"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>

      <Row>
        {searchResults.map((plan) => (
          <Col lg={4} key={plan.id}>
            <PlanCard data={plan} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default DestinationSearch;
