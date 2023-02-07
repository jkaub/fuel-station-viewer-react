import React from "react";
import "./StationsTable.css";
import tableJson from "./sample_table.json";

export default function StationsTable() {
  return (
    <table className="price-table">
      <thead>
        <tr>
          <th style={{ width: "50%", textAlign: "left" }}>Address</th>
          <th>Price</th>
          <th>Full Tank</th>
          <th>Saved</th>
        </tr>
      </thead>
      <tbody>
        {tableJson.map((row) => {
          var color = "black";
          if (row.better_average == 1) {
            color = "green";
          } else if (row.better_average == -1) {
            color = "red";
          }
          return (
            <tr key={row.address}>
              <td style={{ width: "50%", textAlign: "left" }}>
                <a href={row.google_map_link}>{row.address}</a>
              </td>
              <td>{row.price_per_L.toString() + " €/L"}</td>
              <td>{row.price_tank.toString() + " €"}</td>
              <td style={{ color: color }}>{row.delta_average + " €"}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
