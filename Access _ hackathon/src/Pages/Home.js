import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PetitionStatistics from '../components/PetitionStatistics';
import GovernmentResponse from '../components/GovernmentResponse';
import PopularPetition from '../components/PopularPetition';
import AboutUs from "./AboutUs";
import "../Styles/style.css"// Import your custom styles if not already imported

const Home = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Container className="text-center">
        {/* The content inside the Container will be centered */}
        <h1 className="mb-4">Welcome to the Housing Tenants Petition Platform</h1>

        {/* Using Bootstrap's Grid System to create rows and columns */}
        <Row>
          <Col md={8}>
            {/* Displaying the AboutUs component in a larger column */}
            <AboutUs />
          </Col>
        </Row>

        {/* Displaying other components in separate rows */}
        <Row>
          <Col>
            <PetitionStatistics />
          </Col>
        </Row>
        <Row>
          <Col>
            <GovernmentResponse />
          </Col>
        </Row>
        <Row>
          <Col>
            <PopularPetition />
          </Col>
        </Row>

        {/* Add other content here */}
      </Container>
    </div>
  );
};

export default Home;