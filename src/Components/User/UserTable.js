import React from "react";
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
  useAsyncDebounce,
} from "react-table";
import BTable from "react-bootstrap/Table";

function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <span>
      Search:{" "}
      <input
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
        style={{
          fontSize: "1.1rem",
          border: "0",
          borderBottom: "1px solid"
        }}
      />
    </span>
  );
}

function UserTable({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    { columns, data, initialState: { pageIndex: 0 } },
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  return (
    <>
      <div className="d-flex justify-content-between">
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
          className="mb-3"
          style={{
            padding: "0.25rem",
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={data.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      </div>

      <BTable hover size="sm" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr scope="col" {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr scope="row" {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </BTable>

      <div className="pagination d-flex justify-content-between">
        <div>
          <span>
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
          <span>
            | Go to page:{" "}
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              style={{ width: "100px" }}
            />
          </span>{" "}
        </div>

        <div>
          <button
            className="btn btn-outline-dark font-weight-bold"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            {"<<"}
          </button>{" "}
          <button
            className="btn btn btn-outline-dark font-weight-bold"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            {"<"}
          </button>{" "}
          <button
            className="btn btn btn-outline-dark font-weight-bold"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            {">"}
          </button>{" "}
          <button
            className="btn btn btn-outline-dark font-weight-bold"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {">>"}
          </button>{" "}
        </div>
      </div>
    </>
  );
}

export default UserTable;
