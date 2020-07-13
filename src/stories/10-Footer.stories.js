import React from 'react';
import { NCIFooter } from '../nci-footer/nci-footer';
import { CodeRenderer } from '../code-renderer/code-renderer';
import '../index.scss';

export default {
  title: 'NCI Footer',
  component: NCIFooter,
};


export function Documentation() {
  return <div className="m-2">
      <h1>NCI Footer</h1>
      <hr />
      <p>The NCIFooter component provides a standardized footer for applications developed for the NCI.</p>

      <section className="mb-4">
          <h2>Import</h2>
          <CodeRenderer code="import { NCIFooter } from '@cbiitss/react-components';" />
      </section>

      <section className="mb-4">
          <h2>Sample Usage</h2>
          <div className="mb-2">
              <NCIFooter  />
          </div>
          <CodeRenderer removeIndentation code={`<NCIFooter  />`} />
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
                      <td>title</td>
                      <td>React.Component</td>
                      <td>Specifies a title component that should replace the default title in the upper left of the footer.</td>
                  </tr>
                  <tr>
                      <td>columns</td>
                      <td>{`{title: String, links: {title: String, href: String}[]}[]`}</td>
                      <td>Specifies the columns and links that should appear in each column.</td>
                  </tr>
                  <tr>
                      <td>footerLinks</td>
                      <td>{`{title: String, href: String}[]`}</td>
                      <td>Specifies the links that should be shown below the columns</td>
                  </tr>
                  <tr>
                      <td>footerText</td>
                      <td>React.Component</td>
                      <td>Specifies footer text that should replace the default text specified. </td>
                  </tr>
              </tbody>
          </table>
      </section>
  </div>
}


export function Examples() {

  return <div className="m-2">
    <h1>Examples</h1>
    <hr />

    <section className="mb-4">
      <h2>Default</h2>
      <div className="mb-2">
        <NCIFooter />
      </div>
      <CodeRenderer removeIndentation code={`<NCIFooter />`} />
    </section>

    <section className="mb-4">
      <h2>DCEG</h2>
      <div className="mb-2">
        <NCIFooter
          style={{background: 'linear-gradient(45deg,#006789,#54beb9)'}}
          title={<>
            <div className="h4 mb-0">Division of Cancer Epidemiology and Genetics</div>
            <div className="h6">at the National Cancer Institute</div>
          </>}
        />
      </div>
      <CodeRenderer removeIndentation code={`
        <NCIFooter
          style={{background: 'linear-gradient(45deg,#006789,#54beb9)'}}
          title={<>
            <div className="h4 mb-0">Division of Cancer Epidemiology and Genetics</div>
            <div className="h6">at the National Cancer Institute</div>
          </>}
        `} />
    </section>
  </div>
}