import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { addPlanApi } from "../service/allApis";
import "./Add.css";

const Add = ({ update }) => {
  const [planInputs, setInputs] = useState({
    image: "",
    place: "",
    location: "",
    price: "",
    description: "",
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...planInputs,
      [name]: value,
    });
  };

  const addPlan = async () => {
    const { image, place, location, price, description } = planInputs;
    if (
      place === "" ||
      image === "" ||
      location === "" ||
      price === "" ||
      description === ""
    ) {
      alert("Please fill all fields");
    } else {
      const out = await addPlanApi(planInputs);
      if (out.status >= 200 && out.status < 300) {
        alert("Plan added successfully");
        handleClose();
        update(); // Trigger update in parent component
      } else {
        alert("Plan adding failed");
      }
    }
  };

  return (
    <div>
      <Button style={{ backgroundColor: "orange" }} onClick={handleShow}>
        Start Planning Now
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Travel Plan</Modal.Title>
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
          <Button style={{ backgroundColor: "orange" }} onClick={handleClose}>
            Close
          </Button>
          <Button style={{ backgroundColor: "orange" }} onClick={addPlan}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Add;
