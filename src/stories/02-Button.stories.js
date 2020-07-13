import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '../button/button';
import { CodeRenderer } from '../code-renderer/code-renderer';
import '../index.scss';

export default {
  title: 'Button',
  component: Button,
};

export function Documentation() {
  return <div className="m-2">
    <h1>Button</h1>
    <hr />

    <section className="mb-4">
      <h2>Import</h2>
      <CodeRenderer code="import { Button } from '@cbiitss/react-components';" />
    </section>

    <section className="mb-4">
      <h2>Sample Usage</h2>
      <div className="mb-2">
        <Button className="mr-2" variant="light">light variant</Button>
        <Button className="mr-2" variant="dark">dark variant</Button>
        <Button className="mr-2" variant="primary">primary variant</Button>
        <Button className="mr-2" variant="secondary">secondary variant</Button>
        <Button className="mr-2" variant="success">success variant</Button>
        <Button className="mr-2" variant="danger">danger variant</Button>
        <Button className="mr-2" variant="warning">warning variant</Button>
        <Button className="mr-2" variant="info">info variant</Button>
      </div>
      <CodeRenderer removeIndentation code={`
        <Button variant="light">light variant</Button>
        <Button variant="dark">dark variant</Button>
        <Button variant="primary">primary variant</Button>
        <Button variant="secondary">secondary variant</Button>
        <Button variant="success">success variant</Button>
        <Button variant="danger">danger variant</Button>
        <Button variant="warning">warning variant</Button>
        <Button variant="info">info variant</Button>`} />
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
            <td>React.Component[]</td>
            <td>Any children of the Button component will be rendered (transcluded) within the button element.</td>
          </tr>
          <tr>
            <td>active</td>
            <td>Boolean</td>
            <td>Specifies whether the button is active or not.
            Adds or removes the active class to the button element.
          </td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>Boolean</td>
            <td>Specifies whether the button is disabled or not.
            Sets the disabled attribute of the button element.
          </td>
          </tr>
          <tr>
            <td>onClick</td>
            <td>Function</td>
            <td>Specifies an onClick handler for the button.</td>
          </tr>
          <tr>
            <td>size</td>
            <td>'lg', 'sm'</td>
            <td>Specifies the size of the button.
            Adds the specified {'btn-${size}'} class to the button element.
          </td>
          </tr>
          <tr>
            <td>type</td>
            <td>'button', 'reset', 'submit'</td>
            <td>Specifies the type of the button.
            Adds the specified type attribute to the button element.
          </td>
          </tr>
          <tr>
            <td>variant</td>
            <td>'light', 'dark', 'primary', 'secondary', 'success', 'danger', 'warning', 'info'</td>
            <td>Specifies which semantic variant of the button to use.
            Adds the specified {'btn-${variant}'} class to the button element.
          </td>
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
        <Button className="mr-2" variant="light">light variant</Button>
        <Button className="mr-2" variant="dark">dark variant</Button>
        <Button className="mr-2" variant="primary">primary variant</Button>
        <Button className="mr-2" variant="secondary">secondary variant</Button>
        <Button className="mr-2" variant="success">success variant</Button>
        <Button className="mr-2" variant="danger">danger variant</Button>
        <Button className="mr-2" variant="warning">warning variant</Button>
        <Button className="mr-2" variant="info">info variant</Button>
      </div>
      <CodeRenderer removeIndentation code={`
        <Button className="mr-2" variant="light">light variant</Button>
        <Button className="mr-2" variant="dark">dark variant</Button>
        <Button className="mr-2" variant="primary">primary variant</Button>
        <Button className="mr-2" variant="secondary">secondary variant</Button>
        <Button className="mr-2" variant="success">success variant</Button>
        <Button className="mr-2" variant="danger">danger variant</Button>
        <Button className="mr-2" variant="warning">warning variant</Button>
        <Button className="mr-2" variant="info">info variant</Button>
      `} />
    </section>

    <section className="mb-4">
      <h2>Active</h2>
      <div className="mb-2">
        <Button active className="mr-2" variant="light">light variant</Button>
        <Button active className="mr-2" variant="dark">dark variant</Button>
        <Button active className="mr-2" variant="primary">primary variant</Button>
        <Button active className="mr-2" variant="secondary">secondary variant</Button>
        <Button active className="mr-2" variant="success">success variant</Button>
        <Button active className="mr-2" variant="danger">danger variant</Button>
        <Button active className="mr-2" variant="warning">warning variant</Button>
        <Button active className="mr-2" variant="info">info variant</Button>
      </div>
      <CodeRenderer removeIndentation code={`
        <Button active className="mr-2" variant="light">light variant</Button>
        <Button active className="mr-2" variant="dark">dark variant</Button>
        <Button active className="mr-2" variant="primary">primary variant</Button>
        <Button active className="mr-2" variant="secondary">secondary variant</Button>
        <Button active className="mr-2" variant="success">success variant</Button>
        <Button active className="mr-2" variant="danger">danger variant</Button>
        <Button active className="mr-2" variant="warning">warning variant</Button>
        <Button active className="mr-2" variant="info">info variant</Button>
      `} />
    </section>

    <section className="mb-4">
      <h2>Disabled</h2>
      <div className="mb-2">
        <Button disabled className="mr-2" variant="light">light variant</Button>
        <Button disabled className="mr-2" variant="dark">dark variant</Button>
        <Button disabled className="mr-2" variant="primary">primary variant</Button>
        <Button disabled className="mr-2" variant="secondary">secondary variant</Button>
        <Button disabled className="mr-2" variant="success">success variant</Button>
        <Button disabled className="mr-2" variant="danger">danger variant</Button>
        <Button disabled className="mr-2" variant="warning">warning variant</Button>
        <Button disabled className="mr-2" variant="info">info variant</Button>
      </div>
      <CodeRenderer removeIndentation code={`
        <Button disabled className="mr-2" variant="light">light variant</Button>
        <Button disabled className="mr-2" variant="dark">dark variant</Button>
        <Button disabled className="mr-2" variant="primary">primary variant</Button>
        <Button disabled className="mr-2" variant="secondary">secondary variant</Button>
        <Button disabled className="mr-2" variant="success">success variant</Button>
        <Button disabled className="mr-2" variant="danger">danger variant</Button>
        <Button disabled className="mr-2" variant="warning">warning variant</Button>
        <Button disabled className="mr-2" variant="info">info variant</Button>
      `} />
    </section>
  </div>
}

export function EventHandlers() {
  return <div className="m-2">
    <h1>Event Handlers</h1>
    <hr />

    <section className="mb-4">
      <h2>onClick</h2>
      <div className="mb-2">
        <Button onClick={e => window.alert('Clicked')}>Click</Button>
      </div>
      <CodeRenderer removeIndentation code={`
        <Button onClick={e => window.alert('Clicked')}>Click</Button>
      `} />
    </section>
  </div>
}