import React from 'react';
import ComponentWithProps from './ComponentWithProps';
function MyComponent() {
    return (
        <ComponentWithProps header="hello" content="yes its here" number="151" nonexistent="hello nonexistent" />
    );
}
export default MyComponent;