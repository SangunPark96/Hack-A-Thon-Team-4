import React from "react";
import { Card, ListGroup, Button } from "react-bootstrap";
import "../Styles/HousingResources.css";

const HousingResources = () => {
  const resources = [
    {
      title: "NYC Housing Preservation and Development (HPD)",
      description:
        "HPD offers various housing programs, affordable housing lotteries, and resources for tenants and landlords. They provide assistance in finding affordable housing options and address housing-related issues.",
      link: "https://www1.nyc.gov/site/hpd/index.page",
    },
    {
      title: "NYC Housing Connect",
      description:
        "This platform allows you to apply for affordable housing lotteries and find available affordable rental units in the city. It's a useful tool for those looking for affordable housing options.",
      link: "https://a806-housingconnect.nyc.gov/nyclottery/lottery.html",
    },
    {
      title: "Tenant Resource Portal",
      description:
        "The NYC Tenant Resource Portal provides information on tenant rights, eviction prevention, rent freezes, and other resources to help tenants understand their rights and protect their housing stability.",
      link: "https://www.nyc.gov/content/tenantresourceportal/pages/",
    },
    {
      title: "SNAP / EBT",
      description:
        "SNAP / EBT provides essential food assistance for eligible low-income individuals and families in NYC. ",
      link: "https://www.ny.gov/services/apply-snap",
    },
    {
      title: "Legal Help",
      description:
        "NYC Housing Court provides free lawyers for tenants under Right to Counsel, handling various cases including landlord-tenant disputes.",
      link: "https://www.nycourts.gov/courts/nyc/housing/freeLawyerQualify.shtml",
    },
  ];

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Housing Resources</h2>
      <ListGroup>
        {resources.map((resource, index) => (
          <ListGroup.Item key={index}>
            <Card>
              <Card.Body>
                <Card.Title className="resource-title">
                  {resource.title}
                </Card.Title>
                <Card.Text className="resource-description">
                  {resource.description}
                </Card.Text>
                <Button href={resource.link} target="_blank" variant="primary">
                  Learn more
                </Button>
              </Card.Body>
            </Card>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default HousingResources;
