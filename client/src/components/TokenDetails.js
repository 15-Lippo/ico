import React from "react";

const TokenDetails = ({ title, value }) => {
  if (title === "Token Address") {
    return (
      <div>
        <div className="flex justify-center items-center flex-col card">
          <div className="text-center" title={value}>
            {title} : {value.substring(0, 8)}......{value.substring(34, 42)}
          </div>
          <div className="m-2">
            <a
              className="btn text-sm mt-2 "
              href="https://polygonscan.com/token/0x70E546c7a2cA4495cFcbE263a3b6D5ce68B2204C"
              target="_blank"
              rel="noreferrer noopener"
            >
              View on explorer
            </a>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="card">
        {title} : {value}
      </div>
    </div>
  );
};

export default TokenDetails;
