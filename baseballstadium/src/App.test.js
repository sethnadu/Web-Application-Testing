import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Dashboard from "./Components/dashboard.js";
import { render, getByTestId, fireEvent, getByText } from "@testing-library/react";
// import { toBe } from "@testing-library/jest-dom";



describe('App />', () => {
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
  });
})


it("strike button works", () => {
  const { container } = render(<Dashboard />);
  const strikes = getByTestId(container, "strike");
  const balls = getByTestId(container, "ball");
  const stikeButton = getByTestId(container, "strike-button");
  expect(strikes.textContent).toBe("0");
  fireEvent.click(stikeButton);
  expect(strikes.textContent).toBe("1");
  fireEvent.click(stikeButton);
  expect(strikes.textContent).toBe("2");
  fireEvent.click(stikeButton);
  expect(strikes.textContent).toBe("0");
  expect(balls.textContent).toBe("0");
});

it("ball button works", () => {
  const { container } = render(<Dashboard />);
  const balls = getByTestId(container, "ball");
  const strikes = getByTestId(container, "strike");
  const ballButton = getByTestId(container, "ball-button");
  expect(balls.textContent).toBe("0");
  fireEvent.click(ballButton);
  expect(balls.textContent).toBe("1");
  fireEvent.click(ballButton);
  expect(balls.textContent).toBe("2");
  fireEvent.click(ballButton);
  expect(balls.textContent).toBe("3");
  fireEvent.click(ballButton);
  expect(balls.textContent).toBe("0");
  expect(strikes.textContent).toBe("0");
});

it("foul button works", () => {
  const { container } = render(<Dashboard />);
  const strikes = getByTestId(container, "strike");
  const foulButton = getByTestId(container, "foul-button");
  expect(strikes.textContent).toBe("0");
  fireEvent.click(foulButton);
  expect(strikes.textContent).toBe("1");
  fireEvent.click(foulButton);
  expect(strikes.textContent).toBe("2");
  fireEvent.click(foulButton);
  expect(strikes.textContent).toBe("2");
  
});

it("hit button works", () => {
  const { container } = render(<Dashboard />);
  const strikes = getByTestId(container, "strike");
  const balls = getByTestId(container, "ball");
  const hitButton = getByTestId(container, "hit-button");
  fireEvent.click(hitButton);
  expect(strikes.textContent).toBe("0");
  expect(balls.textContent).toBe("0");
  fireEvent.click(hitButton);
  expect(strikes.textContent).toBe("0");
  expect(balls.textContent).toBe("0");
  
});

it("element test works", () => {
  const {container} = render(<Dashboard />);
  const titleText = getByText(container, ("at bat", {exact: false}))

  expect(titleText).toBe("at bat")
})