import React, { useState } from 'react';
import { TreeSelect } from '../tree-select/tree-select';
import { CodeRenderer } from '../code-renderer/code-renderer';
import '../index.scss';

export default {
  title: 'TreeSelect',
  component: TreeSelect,
};

function generateTree() {
  let tree = [];
  let toCharCode = char => char.charCodeAt(0);
  let fromCharCode = code => String.fromCharCode(code);

  for (let i = toCharCode('A'); i <= toCharCode('C'); i ++) {
    let char = fromCharCode(i);
    let node = {
      id: char, 
      title: char,
      value: char,
      children: []
    }
    for (let j = 1; j < 3; j ++) {
      node.children.push({
        id: char + j, 
        title: char + j,
        value: char + j,
        children: []
      })
    }

    tree.push(node);
  }

  return tree;
}


export function Documentation() {
  const data = generateTree();
  const [value, setValue] = useState([]);

  return <div className="m-2">
      <h1>TreeSelect</h1>
      <hr />
      <p>The TreeSelect control allows users to search and select items from a hierarchical data structure.</p>

      <section className="mb-4">
          <h2>Import</h2>
          <CodeRenderer code="import { Navbar } from '@cbiitss/react-components';" />
      </section>
      <section className="mb-4">
          <h2>Sample Usage</h2>
          <div className="mb-2">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md" style={{maxWidth: '400px'}}>
                  <TreeSelect 
                    data={data}
                    value={value}
                    onChange={value => setValue(value)}
                  />
                </div>
                <div className="col-md">
                  <pre>{JSON.stringify(value, null, 2)}</pre>                
                </div>
              </div>
            </div>            
          </div>
          <CodeRenderer removeIndentation code={`
            function Sample() {
              const [value, setValue] = useState([]);
              const data = [
                {
                  "id": "A", "title": "A", "value": "A", "children": [
                    {"id": "A1", "title": "A1", "value": "A1", "children": []},
                    {"id": "A2", "title": "A2", "value": "A2", "children": []}
                  ]
                },
                {
                  "id": "B", "title": "B", "value": "B", "children": [
                    {"id": "B1", "title": "B1", "value": "B1", "children": []},
                    {"id": "B2", "title": "B2", "value": "B2", "children": []}
                  ]
                },
                {
                  "id": "C", "title": "C", "value": "C", "children": [
                    {"id": "C1", "title": "C1", "value": "C1", "children": []},
                    {"id": "C2", "title": "C2", "value": "C2", "children": []}
                  ]
                }
              ];
              return <>
                <TreeSelect
                  data={data}
                  value={value}
                  onChange={value => setValue(value)}
                />
                <pre>{JSON.stringify(value, null, 2)}</pre>
              </>
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
                      <td>data</td>
                      <td>{`{id: String, title: String, value: String, children: any[]}[]`}</td>
                      <td>A hierarchical structure containing a tree of all selectable nodes.</td>
                  </tr>

                  <tr>
                      <td>value</td>
                      <td>{`{id: String, title: String, value: String, children: any[]}`}</td>
                      <td>The currently selected node(s).</td>
                  </tr>

                  <tr>
                      <td>onChange</td>
                      <td>Function</td>
                      <td>A callback function to be executed when the value of this control changes.</td>
                  </tr>
                  <tr>
                      <td>singleSelect</td>
                      <td>Boolean</td>
                      <td>Restricts selection to only allow a single item.</td>
                  </tr>
                  
              </tbody>
          </table>
      </section>
  </div>
}

