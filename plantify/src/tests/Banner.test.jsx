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

})