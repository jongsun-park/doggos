import styled from "styled-components";

const DoggosTable = ({ data }) => {
  if (data.length === 0)
    return (
      <TableContainer>
        <h2>No Doggos...</h2>
      </TableContainer>
    );
  return (
    <TableContainer>
      <table>
        <thead>
          <tr>
            <th className="name">Name</th>
            <th className="breed">Breed</th>
            <th className="birth">Birth</th>
            <th className="color">Color</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ name, breed, birth, color }) => {
            return (
              <tr key={name + breed + birth + color}>
                <td className="name">{name}</td>
                <td className="breed">{breed}</td>
                <td className="birth">{birth}</td>
                <td className="color">{color}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </TableContainer>
  );
};

const TableContainer = styled.div`
  width: 100%;
  margin-bottom: 1em;
  display: flex;
  align-items: center;
  justify-content: center;

  table {
    width: 100%;
  }

  //   border
  table,
  th,
  td {
    border: 1px solid #eee;
    padding: 4px 8px;
    border-collapse: collapse;
  }

  th {
    text-align: center;
    text-transform: uppercase;
    background-color: #eee;
  }

  td {
    &.name {
      text-transform: uppercase;
    }
  }

  tbody {
    tr:nth-child(even) {
      background: #ffffff44;
    }
  }
`;

export default DoggosTable;
