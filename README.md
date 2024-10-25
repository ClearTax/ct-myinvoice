## ct-myinvoice

This package provides a function to create an iframe element with customizable `width`, `height`, `token`, `tin`, and `title`, while the `environment` is fixed to a specific URL.

## Installation

To install the package, use npm:

```bash
npm install ct-myinvoice
```

### How To use in javascript base project ?

```bash
// Import the package
const renderClearCustomerPortal = require('ct-myinvoice');

// Here in data you will get status code
window.addEventListener('message', (event) => {
  if (event.data.status) {
    // You will get status code in above field
    // You can update status in your application and then use it according to your usecase    sethttpstatuscode(event.data.status);
  }
});

// Here you can either send width - height or you can send style object
const iframe = renderClearCustomerPortal({
  width: '600',
  height: '400',
  token: '123',
  tin: 'XYZ',
  title: 'Generate einvoice',
  environment: 'sandbox',
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
  const [httpstatuscode, sethttpstatuscode] = useState();

  // Here in event data you will get status code
  useEffect(() => {
    window.addEventListener('message', (event) => {
      if (event.data.status) {
        // You will get status code in above field
        // You can update status in your application and then use it according to your usecase
        sethttpstatuscode(event.data.status);
      }
    });
  }, []);


  useEffect(() => {
    // Create the iframe using the package's function
    // Here you can either send width - height or you can send style object
    const iframe = renderClearCustomerPortal({
      width: '600',
      height: '400',
      token: '123',
      tin: 'XYZ',
      title: 'My Custom Iframe',
      style: { width: '100%', height: '100%' },
      environment: 'sandbox',
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
