
import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const HousingResources = () => {
  return (
    <div>
      
      <DropdownButton id="dropdown-basic-button" title="Select a resource">
        <Dropdown.Item eventKey="1">
          <h3>NYC Housing Preservation and Development (HPD)</h3>
          <p>
            HPD offers various housing programs, affordable housing lotteries, and resources for tenants and landlords. They provide assistance in finding affordable housing options and address housing-related issues.
          </p>
          <a href="https://www1.nyc.gov/site/hpd/index.page" target="_blank" rel="noopener noreferrer">Learn more</a>
        </Dropdown.Item>
        <Dropdown.Item eventKey="2">
          <h3>NYC Housing Connect</h3>
          <p>
            This platform allows you to apply for affordable housing lotteries and find available affordable rental units in the city. It's a useful tool for those looking for affordable housing options.
          </p>
          <a href="https://www1.nyc.gov/site/hpd/renters/housing-connect.page" target="_blank" rel="noopener noreferrer">Learn more</a>
        </Dropdown.Item>
        <Dropdown.Item eventKey="3">
          <h3>Tenant Resource Portal</h3>
          <p>
            The NYC Tenant Resource Portal provides information on tenant rights, eviction prevention, rent freezes, and other resources to help tenants understand their rights and protect their housing stability.
          </p>
          <a href="https://access.nyc.gov/programs/nyc-tenant-resource-portal/" target="_blank" rel="noopener noreferrer">Learn more</a>
        </Dropdown.Item>
        {/* Add other Dropdown.Items for each housing resource */}
      </DropdownButton>
    </div>
  );
};

export default HousingResources;