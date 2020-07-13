import React, { useState } from 'react';
import {
  Table,
  paginationText,
  paginationSizeSelector,
  paginationButton,
} from '../table/table';
import { CodeRenderer } from '../code-renderer/code-renderer';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory from 'react-bootstrap-table2-filter';
import '../index.scss';

export default {
  title: 'Table',
  component: Table,
};

function getData(columns, numRows) {
  numRows = numRows || 100;
  let data = [];

  for (let i = 1; i <= numRows; i++) {
    let row = {id: i};
    for (let column of columns)
      row[column] = Math.floor(Math.random() * 100);
    data.push(row);
  }

  return data;
}

export function Documentation() {
  const columns = [
    {dataField: 'id', text: 'ID', sort: true},
    {dataField: 'a', text: 'Column A', sort: true},
    {dataField: 'b', text: 'Column B', sort: true},
    {dataField: 'c', text: 'Column C', sort: true},
    {dataField: 'd', text: 'Column D', sort: true},
  ];
  
  const data = getData(columns.map(c => c.dataField), 10);

  return <div className="m-2">
    <h1>Table</h1>
    <hr />
    <p>The Table component is a thin wrapper over the react-bootstrap-table2 library. Any properties used are identical to those found in
       the <a href="https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/table-props.html">react-bootstrap-table2 api</a>, 
       and a comprehensive listing of all properties is not given below.
    </p>

    <section className="mb-4">
      <h2>Import</h2>
      <CodeRenderer code={`import { Table } from '@cbiitss/react-components';`} />
    </section>

    <section className="mb-4">
      <h2>Sample Usage</h2>
      <div className="mb-2">
        <Table 
          keyField="id" 
          columns={columns} 
          data={data} 
        />
      </div>
      <CodeRenderer removeIndentation code={`
        function Sample(props) {
          const columns = [
            {dataField: 'id', text: 'ID', sort: true},
            {dataField: 'a', text: 'Column A', sort: true},
            {dataField: 'b', text: 'Column B', sort: true},
            {dataField: 'c', text: 'Column C', sort: true},
            {dataField: 'd', text: 'Column D', sort: true},
          ];

          // getData generates a array of objects with properties corresponding to the provided dataFields
          const data = getData(columns.map(c => c.dataField), 10);
  
          return <Table 
            keyField="id" 
            columns={columns} 
            data={data} 
          />
        }
      `} />
    </section>

    <section className="mb-4">
      <h2>Properties</h2>
      <table className="table">
      <thead>
        <tr>
          <th>Property</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>keyField</td>
          <td>String</td>
          <td>Specifies the column key which uniquely identifies each row.</td>
        </tr>
        <tr>
          <td>columns</td>
          <td>{'Array<{dataField: String, text: String, sort: Boolean}>'}</td>
          <td>Specifies the columns which will be rendered within this table.</td>
        </tr>
        <tr>
          <td>data</td>
          <td>{'Array<Object>'}</td>
          <td>Specifies the rows which will be rendered within this table. Each row is an object with properties defined by each column's dataField. </td>
        </tr>
      </tbody>
    </table>
    </section>
  </div>
}

export function Examples() {
  const columns = [
    {dataField: 'id', text: 'ID', sort: true},
    {dataField: 'a', text: 'Column A', sort: true},
    {dataField: 'b', text: 'Column B', sort: true},
    {dataField: 'c', text: 'Column C', sort: true},
    {dataField: 'd', text: 'Column D', sort: true},
  ];

  // getData generates a array of objects with properties corresponding to the provided dataFields
  const data = getData(columns.map(c => c.dataField), 10);
  const largeData = getData(columns.map(c => c.dataField), 100);

  return <div className="m-2">
    <h1>Examples</h1>
    <hr />

    <section className="mb-4">
      <h2>Default</h2>
      <div className="mb-2">
        <Table 
          keyField="id" 
          columns={columns} 
          data={data} 
        />
      </div>
      <CodeRenderer removeIndentation code={`
        function Sample(props) {
          const columns = [
            {dataField: 'id', text: 'ID', sort: true},
            {dataField: 'a', text: 'Column A', sort: true},
            {dataField: 'b', text: 'Column B', sort: true},
            {dataField: 'c', text: 'Column C', sort: true},
            {dataField: 'd', text: 'Column D', sort: true},
          ];

          // getData generates a array of objects with properties corresponding to the provided dataFields
          const data = getData(columns.map(c => c.dataField), 10);
  
          return <Table 
            keyField="id" 
            columns={columns} 
            data={data} 
          />
        }
      `} />
    </section>


    <section className="mb-4">
      <h2>With Pagination</h2>
      <div className="mb-2">
        <Table
          keyField="id"
          columns={columns}
          data={largeData}
          filter={filterFactory()}
          pagination={paginationFactory({
            showTotal: true,
            sizePerPageList: [10, 50, 100],
            paginationTotalRenderer: paginationText('record', 'records'),
            sizePerPageRenderer: paginationSizeSelector,
            pageButtonRenderer: paginationButton
          })} />
      </div>
      <CodeRenderer removeIndentation code={`
        import {
          Table,
          paginationText,
          paginationSizeSelector,
          paginationButton,
        } from '../table/table';
        import paginationFactory from 'react-bootstrap-table2-paginator';
        import filterFactory from 'react-bootstrap-table2-filter';

        function Sample(props) {
          const columns = [
            {dataField: 'id', text: 'ID', sort: true},
            {dataField: 'a', text: 'Column A', sort: true},
            {dataField: 'b', text: 'Column B', sort: true},
            {dataField: 'c', text: 'Column C', sort: true},
            {dataField: 'd', text: 'Column D', sort: true},
          ];

          // getData generates a array of objects with properties corresponding to the provided dataFields
          const data = getData(columns.map(c => c.dataField), 100);
  
          <Table
            keyField="id"
            columns={columns}
            data={data}
            filter={filterFactory()}
            pagination={paginationFactory({
              showTotal: true,
              sizePerPageList: [10, 50, 100],
              paginationTotalRenderer: paginationText('record', 'records'),
              sizePerPageRenderer: paginationSizeSelector,
              pageButtonRenderer: paginationButton
          })} />
        }
      `} />
    </section>

  </div>
}

