import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('renders the landing page', () => {
  render(<App />);
});

test('calculator returns correct value', () => {
    const { getByTestId, getByText } = render(<App />);
    const counterValueEl = getByTestId("counter-value");
    const oneButtonEl = getByText("1", { selector: "button" });
    const plusButtonEl = getByText("+", { selector: "button" });
    const twoButtonEl = getByText("2", { selector: "button" });
    const equalsButtonEl = getByText("=", { selector: "button" });

    fireEvent.click(oneButtonEl);
    fireEvent.click(plusButtonEl);
    fireEvent.click(twoButtonEl);
    fireEvent.click(equalsButtonEl);
    expect(counterValueEl).toHaveTextContent("3");
});