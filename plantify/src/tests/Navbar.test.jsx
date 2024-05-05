//importing the necessary modules
import {render, screen} from '@testing-library/react';
import Navbar from '../components/Navbar';

//test to check if the Navbar component is rendered
describe("Navbar", () => {
    it("renders Navbar component", () => {
        render(<Navbar />);
        const navbarElement = screen.getByTestId("navbar");
        expect(navbarElement).toBeInTheDocument();
    });
})