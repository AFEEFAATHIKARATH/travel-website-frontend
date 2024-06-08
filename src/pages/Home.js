import React, { useEffect, useState } from "react";
import { Col, Container, Row, Card, Form } from "react-bootstrap";
import Add from "../components/Add";
import Plans from "../components/Plans";
import "./Home.css";
import Hero from "../components/Hero";
import { accessPlanApi } from "../service/allApis";
import Footer from "../components/Footer";
import Header from "../components/Header";
import About from "../components/About";
import MasonryImagesGallery from "../components/MasonryImagesGallery";
import Services from "../pages/Services";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  const [allPlans, setPlans] = useState([]);
  const [filter, setFilter] = useState("");
  const [filteredPlans, setFilteredPlans] = useState([]);

  const getPlans = async () => {
    const result = await accessPlanApi();
    if (result.status >= 200 && result.status < 300) {
      setPlans(result.data);
      setFilteredPlans(result.data); // Initialize filtered plans with all plans
    } else {
      alert("Fetching plans failed");
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  useEffect(() => {
    getPlans();
  }, []);

  useEffect(() => {
    const filtered = allPlans.filter((plan) =>
      plan.place.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredPlans(filtered);
  }, [filter, allPlans]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const triggerUpdate = () => {
    getPlans();
  };

  return (
    <>
      <Header />
      <Hero handleFilterChange={handleFilterChange} />
      <div className="home-container">
        <Container className="w-100 mt-5">
          <Row className="mb-5" data-aos="fade-up">
            <Col lg={12}>
              <div className="plan-card-container">
                <Card className="animated-card">
                  <Card.Body>
                    <div className="content-section">
                      <h1 className="animated-title">
                        Discover Your Next Adventure!
                      </h1>
                      <p className="animated-text mt-4">
                        Ready to explore the world? Our travel plans are crafted
                        to give you unforgettable experiences. Whether you seek
                        thrilling adventures, serene getaways, or cultural
                        immersions, we've got the perfect plan for you. Pack
                        your bags and let's make memories!
                      </p>
                      <br />
                      <Add update={triggerUpdate} />
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
          <Row className="mb-5" data-aos="fade-up">
            <Col lg={12}>
              <Card>
                <Card.Body>
                  <Form.Group controlId="filter">
                    <Form.Control
                      type="text"
                      placeholder="Search Your Destination"
                      value={filter}
                      onChange={handleFilterChange}
                    />
                  </Form.Group>
                  <Plans
                    allPlans={allPlans}
                    triggerUpdate={triggerUpdate}
                    filter={filter}
                    handleFilterChange={handleFilterChange}
                    filteredPlans={filteredPlans}
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mb-5" data-aos="fade-up">
            <Col lg={12}>
              <div data-aos="fade-up">
                <Services />
              </div>
            </Col>
          </Row>
          <Row className="mb-5" data-aos="fade-up">
            <Col lg={12}>
              <About />
            </Col>
          </Row>
          <Row className="mb-5" data-aos="fade-up">
            <Col lg={12}>
              <MasonryImagesGallery />
            </Col>
          </Row>
          <Row data-aos="fade-up">
            <Col lg={12}>
              <Footer />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Home;
