## ct-myinvoice

This package provides a function to create an iframe element with customizable `width`, `height`, `sid`, `tin` and `title`, while the `src` is fixed to a specific URL.

## Installation

To install the package, use npm:

```bash
npm install ct-myinvoice
```

### How To use in javascript base project ?

```bash
// Import the package
const renderClearCustomerPortal = require('ct-myinvoice');

// Create an iframe with specific width, height, and title as per your requirement
const iframe = renderClearCustomerPortal({
  width: '600',
  height: '400',
  sid: '123',
  tin: 'XYZ',
  title: 'Generate einvoice',
});

// Append the iframe to the document body or any element
document.body.appendChild(iframe);

```

### How To use in React base project ?

```bash
// ExampleComponent.js
import React, { useEffect, useRef } from 'react';
import renderClearCustomerPortal from 'ct-myinvoice';

const ExampleComponent = () => {
  const iframeContainerRef = useRef(null);

  useEffect(() => {
    // Create the iframe using the package's function
    const iframe = renderClearCustomerPortal({
      width: '600',
      height: '400',
      sid: '123',
      tin: 'XYZ',
      title: 'My Custom Iframe',
    });

    // Append the iframe to the div container when the component mounts
    if (iframeContainerRef.current) {
      iframeContainerRef.current.appendChild(iframe);
    }

    // Clean up iframe when the component unmounts
    return () => {
      if (iframeContainerRef.current) {
        iframeContainerRef.current.removeChild(iframe);
      }
    };
  }, []);

  return (
    <div>
      <h1>Iframe Example in React</h1>
      {/* This is where the iframe will be appended */}
      <div ref={iframeContainerRef} />
    </div>
  );
};

export default ExampleComponent;

```
