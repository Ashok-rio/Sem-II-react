import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const StepProgressBar = (props) => {
  const value = props.value;
  return (
    <div style={{ padding: "2%" }}>
          <ProgressBar
              width={"500px"}
        percent={value}
        filledBackground="linear-gradient(to right, #808080, #808080)"
      >
        <Step transition="scale">
          {({ accomplished }) => (
            <React.Fragment>
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                width="30"
                alt={""}
                src={
                  value >= 0
                    ? "https://bit.ly/31FkOEo"
                    : "https://bit.ly/31KNnk5"
                }
              />
              <span style={{ position: "absolute", marginTop: "100px" }}>
                Shipment{" "}
              </span>
            </React.Fragment>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <React.Fragment>
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                width="30"
                alt={""}
                src={
                  value === 40
                    ? "https://bit.ly/3eQ6psR"
                    : value > 40
                    ? "https://bit.ly/31FkOEo"
                    : "https://bit.ly/31KNnk5"
                }
              />
              <span style={{ position: "absolute", marginTop: "100px" }}>
                Address{" "}
              </span>
            </React.Fragment>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <React.Fragment>
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                width="30"
                alt={""}
                src={
                  value === 70
                    ? "https://bit.ly/3eQ6psR"
                    : value > 70
                    ? "https://bit.ly/31FkOEo"
                    : "https://bit.ly/31KNnk5"
                }
              />
              <span style={{ position: "absolute", marginTop: "100px" }}>
                Payment{" "}
              </span>
            </React.Fragment>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <React.Fragment>
              <img
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                width="30"
                alt={""}
                src={
                  value === 100
                    ? "https://bit.ly/3eQ6psR"
                    :  "https://bit.ly/31KNnk5"
                }
              />
              <span style={{ position: "absolute", marginTop: "100px" }}>
                Order{" "}
              </span>
            </React.Fragment>
          )}
        </Step>
      </ProgressBar>
    </div>
  );
};

export default StepProgressBar;
