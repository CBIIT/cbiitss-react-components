import React from 'react';
import { Icon } from '../icon/icon';
import { CodeRenderer } from '../code-renderer/code-renderer'
import '../index.scss';

export default {
    title: 'Icon',
    component: Icon,
};

export function Documentation() {
    return <div className="m-2">
        <h1>Icon</h1>
        <hr />
        <p>The Icon component by default renders svg images assumed to be located the 'assets/icons' folder, relative to the current page's document root. SVG names correspond to icon names. For example, a svg called 'plus.svg' corresponds to an icon named 'plus'.</p>

        <section className="mb-4">
            <h2>Import</h2>
            <CodeRenderer code="import { Icon } from '@cbiitss/react-components';" />
        </section>

        <section className="mb-4">
            <h2>Sample Usage</h2>
            <div className="mb-2">
                <Icon name="exclamation-circle" />
            </div>
            <CodeRenderer removeIndentation code={`<Icon name="exclamation-circle" />`} />
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
                        <td>name</td>
                        <td>String</td>
                        <td>Specifies the name of the icon to use. Should correspond to an image asset found in the 'assets/icons' folder.</td>
                    </tr>

                    <tr>
                        <td>path</td>
                        <td>String</td>
                        <td>Specifies an alternative to the 'assets/icons' folder. In the future, this can be configured globally using the IconProvider component.</td>
                    </tr>

                    <tr>
                        <td>width</td>
                        <td>Number</td>
                        <td>Specifies the width of the icon (in pixels)</td>
                    </tr>

                    <tr>
                        <td>height</td>
                        <td>Number</td>
                        <td>Specifies the height of the icon (in pixels)</td>
                    </tr>

                    <tr>
                        <td>alt</td>
                        <td>String</td>
                        <td>Specifies the alternate text for the icon.</td>
                    </tr>

                    <tr>
                        <td>(Additional Properties)</td>
                        <td>any</td>
                        <td>Any properties not listed above will be added to the img element as attributes. This allows us to add arbitrary styles, classes, event handlers, and selectors to the generated img element. </td>
                    </tr>
                </tbody>
            </table>
        </section>
    </div>
}

export function Examples() {
    const iconNames = ["angle-double-down", "angle-double-left", "angle-double-right", "angle-double-up", "angle-down", "angle-left", "angle-right", "angle-up", "arrow-left", "arrow-right", "exclamation-circle", "minus", "plus", "sort", "sort-down", "sort-up", "times"];
    return <div className="m-2">
        <h1>Icon Examples</h1>
        <hr />
        <p>The examples below show some of the icons found in the 'assets/icons' folder.</p>
        {iconNames.map(name => <div className="m-2">
            <Icon name={name} />
            <small className="text-muted ml-2">({name}, filepath: 'assets/icons/{name}.svg)</small>
            <CodeRenderer code={`<Icon name="${name}" />`} />
        </div>)}
    </div>
}
