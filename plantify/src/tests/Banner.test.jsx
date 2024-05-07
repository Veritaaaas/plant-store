//importing the necessary modules
import {render, screen} from '@testing-library/react';
import Banner from '../components/Banner';

//test to check if the Banner component is rendered
describe("Banner", () => {
    it("renders Banner component", () => {
      render(<Banner />);
      const bannerElement = screen.getByTestId("banner");
      expect(bannerElement).toBeInTheDocument();
    });
  
    it("displays the correct heading text", () => {
      render(<Banner />);
      const headingElement = screen.getByText("Buy your dream plants");
      expect(headingElement).toBeInTheDocument();
    });
  
    it("displays the correct number of plant species", () => {
      render(<Banner />);
      const plantSpeciesElement = screen.getByText("50+");
      expect(plantSpeciesElement).toBeInTheDocument();
    });
  
    it("displays the correct number of customers", () => {
      render(<Banner />);
      const customersElement = screen.getByText("100+");
      expect(customersElement).toBeInTheDocument();
    });
  
    it("renders the search input field", () => {
      render(<Banner />);
      const searchInput = screen.getByLabelText("Search");
      expect(searchInput).toBeInTheDocument();
    });
  
    it("renders the search button", () => {
      render(<Banner />);
      const searchButton = screen.getByRole("button", { name: "Search-Button" });
      expect(searchButton).toBeInTheDocument();
    });
  });
