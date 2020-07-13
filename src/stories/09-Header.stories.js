import React, { useState } from 'react';
import { NCIHeader } from '../nci-header/nci-header';
import { CodeRenderer } from '../code-renderer/code-renderer';
import '../index.scss';

export default {
  title: 'NCI Header',
  component: NCIHeader,
};


export function Documentation() {
  return <div className="m-2">
    <h1>NCI Header</h1>
    <hr />
    <p>The NCIHeader component provides a standardized header for applications developed for the NCI. This header should adhere to NCI Digital Media guidelines.</p>

    <section className="mb-4">
      <h2>Import</h2>
      <CodeRenderer code="import { NCIHeader } from '@cbiitss/react-components';" />
    </section>

    <section className="mb-4">
      <h2>Sample Usage</h2>
      <div className="mb-2">
        <NCIHeader
          imageSource="assets/images/nci-logo.svg"
          url="https://cancer.gov"
        />
      </div>
      <CodeRenderer removeIndentation code={`
        <NCIHeader
          imageSource="assets/images/nci-logo.svg"
          url="https://cancer.gov"
        />
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
            <td>className</td>
            <td>String</td>
            <td>Specifies additional classes to apply to the header component</td>
          </tr>
          <tr>
            <td>style</td>
            <td>String</td>
            <td>Specifies additional style to apply to the header component</td>
          </tr>
          <tr>
            <td>imageClassName</td>
            <td>String</td>
            <td>Specifies additional classes to apply to the header's image</td>
          </tr>
          <tr>
            <td>imageStyle</td>
            <td>String</td>
            <td>Specifies additional styles to apply to the header's image</td>
          </tr>
          <tr>
            <td>imageProps</td>
            <td>String</td>
            <td>Specifies additional properties or attributes to apply to the header's image</td>
          </tr>
          <tr>
            <td>imageSource</td>
            <td>String</td>
            <td>Specifies the path to the header image</td>
          </tr>
          <tr>
            <td>url</td>
            <td>String</td>
            <td>Specifies the url for the header image</td>
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
        <NCIHeader
          imageSource="assets/images/nci-logo.svg"
          url="https://cancer.gov"
        />
      </div>
      <CodeRenderer removeIndentation code={`
        <NCIHeader
          imageSource="assets/images/nci-logo.svg"
          url="https://cancer.gov"
        />
      `} />
    </section>

    <section className="mb-4">
      <h2>DCEG</h2>
      <div className="mb-2">
        <NCIHeader
          imageSource="assets/images/dceg-logo.svg"
          url="https://dceg.cancer.gov"
        />
      </div>
      <CodeRenderer removeIndentation code={`
        <NCIHeader
          imageSource="assets/images/dceg-logo.svg"
          url="https://dceg.cancer.gov"
        />      
      `} />
    </section>
  </div>
}