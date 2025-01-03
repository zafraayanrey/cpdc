import React from "react";
import { Heading } from "../styled-components/elements";
import { plansReports } from "../utils/plansReports";
import styled from "styled-components";

// const PlansContainer = styled.div`
//   background-color: red;
// `;

const PlansTable = styled.table`
  margin: auto;
  text-align: center;
  border-spacing: 0;

  td,
  th {
    width: 50%;
    padding: 5px;
  }

  th {
    background-color: var(--four-hundred);
  }

  tr:nth-child(odd) {
    background-color: var(--fifty);
    font-weight: 400;
  }

  tr:nth-child(even) {
    background-color: var(--two-hundred);
    font-weight: 400;
  }
`;

function PlansReport() {
  return (
    <>
      <Heading>Plans & Reports</Heading>
      <PlansTable>
        <tr>
          <th>Title</th>
          <th>Validity</th>
        </tr>
        {plansReports.map((el) => (
          <tr>
            <td>{el.title}</td>
            <td>{`${el.term} years`}</td>
          </tr>
        ))}
      </PlansTable>
    </>
  );
}

export default PlansReport;
