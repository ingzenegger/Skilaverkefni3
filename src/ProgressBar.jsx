//Courtesy of Google - thank you very nice - breytti litum til að stíla betur inní mitt css

import React from "react";

const ProgressBar = ({ progress, color }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "20px",
        backgroundColor: "var(--background-color)",
        borderRadius: "5px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${progress}%`,
          height: "100%",
          backgroundColor: color || "#4CAF50", // Default color if not provided
          borderRadius: "5px",
          transition: "width 0.5s ease-in-out",
        }}
      >
        <span
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            color: "var(--background-color)",
            fontWeight: "bold",
          }}
        >
          {/* {`${Math.round(progress)}%`} --- Tók þetta út, var ruglandi fyrir notanda að hafa prósentu tölu í progress bar, misskilst sem stig */}
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
