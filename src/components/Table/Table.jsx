import { useEffect, useState } from "react";
import './Table.css'

const Table = () => {
  const [data, setData] = useState();

  useEffect(() => {
    // Fetch data from API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((apiData) => {
        const modifiedData = apiData.map((item) => {
          if (item.InfoCompany == null) {
            item.InfoCompany = "Newroz";
          }
          return item;
        });
        // console.log(modifiedData);
        setData(modifiedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="" style={{ padding: "20px", backgroundColor: "#fff" }}>
      <div style={{ height: 850, width: "1100px" }}>
        {data?.map((user) => (
          <table key={user.id}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>InfoCompany</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.InfoCompany}</td>
            </tr>
          </tbody>
        </table>
        ))}
      </div>
    </div>
  );
};

export default Table;
