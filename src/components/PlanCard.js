import React, { useState } from "react";
import { Card, Button, Modal, Form } from "react-bootstrap";
import { updatePlanApi, deletePlanApi } from "../service/allApis";
import {
  FaMapMarkerAlt,
  FaDollarSign,
  FaEdit,
  FaTrash,
  FaInfoCircle,
} from "react-icons/fa";
import "./PlanCard.css";

function PlanCard({ data, update }) {
  const [show, setShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [planInputs, setInputs] = useState({ ...data });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...planInputs,
      [name]: value,
    });
  };

  const updatePlan = async () => {
    const result = await updatePlanApi(planInputs.id, planInputs);
    if (result.status >= 200 && result.status < 300) {
    
      handleEditClose();
      update(); // Trigger update in parent component
    } else {
      alert("Plan updating failed");
    }
  };

  const deletePlan = async (id) => {
    const result = await deletePlanApi(id);
    if (result.status >= 200 && result.status < 300) {
      update(); // Trigger update in parent component
    } else {
      alert("Plan deletion failed");
    }
  };

  return (
    <div className="plan-card">
      <Card>
        <div className="place-info">{data.place}</div>
        <Card.Img
          variant="top"
          src={data.image || "https://via.placeholder.com/150"}
          alt="Plan Image"
          className="card-img"
        />
        <div className="details-overlay">
          <p>{data.location}</p>
          <p>{data.description}</p>
        </div>
        <div className="btn-group">
          <Button onClick={handleShow} className="btn view-details">
            <FaInfoCircle className="icon" />
          </Button>
          <Button onClick={handleEditShow} className="btn edit">
            <FaEdit className="icon" />
          </Button>
          <Button onClick={() => deletePlan(data.id)} className="btn delete">
            <FaTrash className="icon" />
          </Button>
        </div>
      </Card>

      <Modal show={editShow} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Travel Plan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="place">
              <Form.Label>Place</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Place"
                name="place"
                value={planInputs.place}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="location">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter location"
                name="location"
                value={planInputs.location}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter price"
                name="price"
                value={planInputs.price}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="image">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image URL"
                name="image"
                value={planInputs.image}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter description"
                name="description"
                value={planInputs.description}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>
            Close
          </Button>
          <Button style={{ backgroundColor: "orange" }} onClick={updatePlan}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Plan Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card.Img
            variant="top"
            src={data.image || "https://via.placeholder.com/150"}
            alt="Plan Image"
            className="card-img-top"
          />
          <Card.Body>
            <Card.Title>{data.place}</Card.Title>
            <Card.Text className="icon-text">
              <FaMapMarkerAlt className="icon" /> {data.location}
            </Card.Text>
            <Card.Text className="icon-text">
              <FaDollarSign className="icon" /> {data.price}
            </Card.Text>
            <Card.Text>{data.description}</Card.Text>
          </Card.Body>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{ backgroundColor: "orange" }} onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default PlanCard;
