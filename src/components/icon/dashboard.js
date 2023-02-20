import React from "react";

function Dashboard(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size ? props.size : 16}
      height={props.size ? props.size : 16}
      fill="none"
      viewBox="0 0 35 35"
    >
      <path
        fill={props.color}
        d="M2.917 16.042h16.041a2.917 2.917 0 002.917-2.917V2.917A2.917 2.917 0 0018.958 0H2.917A2.917 2.917 0 000 2.917v10.208a2.917 2.917 0 002.917 2.917zm0-13.125h16.041v10.208H2.917V2.917zM32.083 0h-4.375a2.917 2.917 0 00-2.916 2.917v10.208a2.917 2.917 0 002.916 2.917h4.375A2.917 2.917 0 0035 13.125V2.917A2.917 2.917 0 0032.083 0zm0 13.125h-4.375V2.917h4.375v10.208zM7.292 18.958H2.917A2.917 2.917 0 000 21.875v10.208A2.917 2.917 0 002.917 35h4.375a2.917 2.917 0 002.916-2.917V21.875a2.917 2.917 0 00-2.916-2.917zm0 13.125H2.917V21.875h4.375v10.208zm24.791-13.125H16.042a2.917 2.917 0 00-2.917 2.917v10.208A2.917 2.917 0 0016.042 35h16.041A2.917 2.917 0 0035 32.083V21.875a2.917 2.917 0 00-2.917-2.917zm0 13.125H16.042V21.875h16.041v10.208z"
      ></path>
    </svg>
  );
}

export default Dashboard;