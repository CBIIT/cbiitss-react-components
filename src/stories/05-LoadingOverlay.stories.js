import React, { useState } from 'react';
import { Button } from '../button/button';
import { LoadingOverlay } from '../loading-overlay/loading-overlay';
import '../index.scss';
import { CodeRenderer } from '../code-renderer/code-renderer';

export default {
  title: 'LoadingOverlay',
  component: LoadingOverlay,
};

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget purus sollicitudin, viverra ipsum vel, imperdiet ipsum. Phasellus massa enim, ornare et blandit et, hendrerit imperdiet nibh. Duis metus lectus, pulvinar ac lobortis non, porta nec tortor. Maecenas porta felis at finibus placerat. Mauris euismod faucibus risus sit amet luctus. Nulla sit amet dignissim diam, at dictum tellus. Fusce maximus eget est id auctor. In vitae porta quam, vel interdum libero. Proin tempor quam varius magna lacinia, ac dignissim eros porttitor. Donec mattis efficitur cursus. Donec non interdum nisi. Praesent dictum eu dolor quis consectetur. Fusce bibendum lacinia odio quis tincidunt. Fusce finibus eleifend risus et fringilla.";
const truncate = (str, length) => str.length > length ? str.slice(0, length) + '...' : str;

export function Documentation() {
  const [loading, setLoading] = useState(false);
  function handleClick() {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  }

  return <div className="m-2">
    <h1>Icon</h1>
    <hr />
    <p>The LoadingOverlay component renders an overlay over an element which disables interaction with any components within the element.</p>

    <section className="mb-4">
      <h2>Import</h2>
      <CodeRenderer code={`import { LoadingOverlay } from '@cbiitss/react-components';`} />
    </section>

    <section className="mb-4">
      <h2>Sample Usage</h2>
      <div className="mb-2">
        <div className="p-2 border">
          <LoadingOverlay active={loading} />
          <p>{text}</p>
          <Button variant="light" onClick={handleClick}>Show Loading Overlay</Button>
        </div>
      </div>
      <CodeRenderer removeIndentation code={`
        function Sample(props) {
          const [loading, setLoading] = useState(false);
          function handleClick() {
            setLoading(true);
            setTimeout(() => setLoading(false), 3000);
          }
  
          return <div className="border">
            <LoadingOverlay active={loading} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            <Button variant="light" onClick={handleClick}>Show Loading Overlay</Button>
          </div>
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
            <td>children</td>
            <td>Array&lt;React.Component&gt;</td>
            <td>Any children of the LoadingOverlay component will be rendered (transcluded) overlay, overriding the default loader.</td>
          </tr>

          <tr>
            <td>active</td>
            <td>Boolean</td>
            <td>Specifies whether the LoadingOverlay is visible or not.</td>
          </tr>

          <tr>
            <td>overlayClass</td>
            <td>String</td>
            <td>Specifies additional classes to apply to the overlay element.</td>
          </tr>

          <tr>
            <td>overlayStyle</td>
            <td>Object</td>
            <td>Specifies additional styles to apply to the overlay element.</td>
          </tr>

          <tr>
            <td>overlayProps</td>
            <td>Object</td>
            <td>Specifies additional properties to apply to the overlay element.</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
}

export function Examples() {
  const [defaultLoading, setDefaultLoading] = useState(false);
  const [customLoaderLoading, setCustomLoaderLoading] = useState(false);
  const [customOverlayLoading, setCustomOverlayLoading] = useState(false);
  const handleClick = setLoading => () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  }

  return <div className="m-2">
    <h1>Examples</h1>
    <hr />
    <p>The LoadingOverlay component renders an overlay over an element which disables interaction with any components within the element.</p>

    <section className="mb-4">
      <h2>Active</h2>
      <div className="mb-2 p-2 border">
        <LoadingOverlay active={defaultLoading} />
        <p>{text}</p>
        <Button onClick={handleClick(setDefaultLoading)}>Show Loading Overlay</Button>
      </div>
      <CodeRenderer removeIndentation code={`
        <div>
          <LoadingOverlay active={loading} />
          <p>${truncate(text, 20)}</p>
          <Button onClick={showOverlay}>Show Loading Overlay</Button>
        </div>
      `} />
    </section>


    <section className="mb-4">
      <h2>Active (Custom Loader)</h2>
      <div className="mb-2 p-2 border">
        <LoadingOverlay active={customLoaderLoading}>Custom Loader</LoadingOverlay>
        <p>{text}</p>
        <Button onClick={handleClick(setCustomLoaderLoading)}>Show Loading Overlay</Button>
      </div>
      <CodeRenderer removeIndentation code={`
        <div>
          <LoadingOverlay active={loading}>Custom Loader</Loading>
          <p>${truncate(text, 20)}</p>
          <Button onClick={showOverlay}>Show Loading Overlay</Button>
        </div>
      `} />
    </section>


    <section className="mb-4">
      <h2>Active (Custom Overlay)</h2>
      <div className="mb-2 p-2 border">
        <LoadingOverlay active={customOverlayLoading} overlayStyle={{ backgroundColor: '#333' }}>
          <div className="text-light">
            Custom Overlay Style
          </div>
        </LoadingOverlay>
        <p>{text}</p>
        <Button onClick={handleClick(setCustomOverlayLoading)}>Show Loading Overlay</Button>
      </div>
      <CodeRenderer removeIndentation code={`
        <div>
          <LoadingOverlay active={loading} overlayStyle={{ backgroundColor: '#333' }}>
            <span className="text-light">Custom Overlay</span>
          </LoadingOverlay>
          <p>${truncate(text, 20)}</p>
          <Button onClick={showOverlay}>Show Loading Overlay</Button>
        </div>
      `} />
    </section>

  </div>
}
