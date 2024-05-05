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

    it("renders all links", () => {
        render(<Navbar />);
        const logoElement = screen.getByText("Plantify");
        const homeLink = screen.getByText("Home");
        const productsLink = screen.getByText("Products");
        const aboutLink = screen.getByText("About");
        const shoppingCartIcon = screen.getByTestId("shopping-cart-icon");
        const profile = screen.getByTestId("profile");

        expect(logoElement).toBeInTheDocument();
        expect(homeLink).toBeInTheDocument();
        expect(productsLink).toBeInTheDocument();
        expect(aboutLink).toBeInTheDocument();
        expect(shoppingCartIcon).toBeInTheDocument();
        expect(profile).toBeInTheDocument();
    });
})