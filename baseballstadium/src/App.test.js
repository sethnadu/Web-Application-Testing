import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Display from "./Components/display.js";
import Dashboard from "./Components/dashboard.js";
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

describe('App />', () => {
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
  });
})


describe("<Display />", () => {
  it('renders info starting at 0', () => {
  const info = {strike: 0, balls: 0}
  const display = render(<Display info = {info} />)
 
  const strikes = display.getByTestId("strikes")
  const balls = display.getByTestId("balls")

  expect(strikes).toEqual();
  expect(balls).toEqual();
   });
})







// describe("dashboard.js", () => {
//   describe("handleBallSubmit()", () => {
//     it("should return the ball info", () => {
//       expect(handleBallSubmit())
//     })
    
//   })
// });