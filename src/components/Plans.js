import React, { useState } from "react";
import PlanCard from "./PlanCard";
import { Col, Row, Pagination } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Plans = ({
  allPlans,
  filter,
  handleFilterChange,
  triggerUpdate,
  filteredPlans,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(3); // Adjust as needed

  const currentFilteredPlans = filteredPlans || [];

  // Calculate index of the last card on the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  // Calculate index of the first card on the current page
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  // Slice the array of filtered plans to display only cards for the current page
  const currentCards = currentFilteredPlans.slice(
    indexOfFirstCard,
    indexOfLastCard
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div id="plans-section" className="p-4">
      <Row>
        {currentCards.length > 0 ? (
          currentCards.map((plan) => (
            <Col lg={4} key={plan.id}>
              <PlanCard update={triggerUpdate} data={plan} />
            </Col>
          ))
        ) : (
          <h1>No plans found</h1>
        )}
      </Row>
      <Pagination className="justify-content-center">
        <Pagination.Prev
          onClick={() =>
            setCurrentPage((prev) => (prev === 1 ? prev : prev - 1))
          }
        >
          <FaChevronLeft style={{ color: "orange" }} />
        </Pagination.Prev>
        <Pagination.Next
          onClick={() =>
            setCurrentPage((prev) =>
              prev === Math.ceil(currentFilteredPlans.length / cardsPerPage)
                ? prev
                : prev + 1
            )
          }
        >
          <FaChevronRight style={{ color: "orange" }} />
        </Pagination.Next>
      </Pagination>
    </div>
  );
};

export default Plans;
