import React, { useState } from 'react';
import { Navbar } from '../navbar/navbar';
import { CodeRenderer } from '../code-renderer/code-renderer';
import '../index.scss';

export default {
  title: 'Navbar',
  component: Navbar,
};

export function Documentation() {
  let [links, setLinks] = useState([
    {href: '#/home', title: 'Home', active: true},
    {href: '#/example', title: 'Example'},
    {href: '#/about', title: 'About'},
  ]);

  function setLink(href) {
    setLinks(links.map(link => {
      link.active = link.href == href;
      return link;
    }));
  }

  return <div className="m-2">
      <h1>Navbar</h1>
      <hr />
      <p>The Navbar component provides a standardized control used to navigate to different pages within a web application.</p>

      <section className="mb-4">
          <h2>Import</h2>
          <CodeRenderer code="import { Navbar } from '@cbiitss/react-components';" />
      </section>

      <section className="mb-4">
          <h2>Sample Usage</h2>
          <div className="mb-2">
              <Navbar links={links} onClick={setLink} />
          </div>
          <CodeRenderer removeIndentation code={`
            let links = [
              {href: '#/home', title: 'Home', active: true},
              {href: '#/example', title: 'Example'},
              {href: '#/about', title: 'About'},
            ];

            <Navbar links={links} onClick={setActiveLink} />
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
                      <td>links</td>
                      <td>{`{href: String, title: String, active: Boolean}`}</td>
                      <td>Specifies the links to render within the navbar. Each link has a href property, a title, and optionally, an active flag which helps users visually determine which page they are currently on. This flag must be set manually.</td>
                  </tr>

                  <tr>
                      <td>onClick</td>
                      <td>Function</td>
                      <td>Specifies a function to be called whenever a linked is clicked. The argument passed to this function is the original link object provided in the properties.</td>
                  </tr>
              </tbody>
          </table>
      </section>
  </div>
}
