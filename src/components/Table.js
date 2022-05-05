import { useEffect, useState } from "react";
import "./Table.module.scss";
import classes from "./Table.module.scss";
import AddNewUserWrapper from "./AddNewUserWrapper";
import UserSettingsButton from "./UserSettingsButton";

  import {
    DataTable,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableHeader,
    TableBody,
    TableCell,
    Button
  } from "@carbon/react";
function TableWrapper() {
    const [users,setUsers]=useState([]);
    const [addNew, setAddNew] = useState(false);
    useEffect(()=>{
        fetch("http://localhost:8080/users")
        .then(res=>{ return res.json()})
        .then((data)=>{
            setUsers(data);
        })
    })
    const headerData = [
      {
        key: "name",
        header: "Name",
      },
      {
        key: "email",
        header: "Email",
      },
      {
        key: "birthdate",
        header: "Birth Date",
      },
      {
        key: "department",
        header: "Department",
      },
    ];
  return (
    <>
      <DataTable
        className={"bx--data-table-container"}
        rows={users}
        headers={headerData}
      >
        {({ rows, headers, getHeaderProps, getTableProps }) => (
          <TableContainer title="Person Database" description="List of person">
            <div className={"bx--toolbar-content"}>
              <Button
                className={"bx--btn bx--btn--primary"}
                onClick={() => {
                  setAddNew(!addNew);
                }}
              >
                Add user
              </Button>
            </div>

            <Table
              className={"bx--data-table bx--data-table--zebra"}
              {...getTableProps()}
            >
              <TableHead>
                <TableRow>
                  {headers.map((header) => (
                    <TableHeader {...getHeaderProps({ header })}>
                      {header.header}
                    </TableHeader>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.reverse().map((row) => (
                  <TableRow key={row.id.toString()}>
                    {row.cells.map((cell) => (
                      <TableCell key={cell.id}>{cell.value}</TableCell>
                    ))}
                    <UserSettingsButton
                      user={row}
                    />
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </DataTable>
      {addNew && <AddNewUserWrapper />}
    </>
  );
}
export default TableWrapper;
