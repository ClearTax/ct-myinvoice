function renderClearCustomerPortal({ width, height, title }) {
  if (!width || !height) {
    throw new Error('Width, height are required parameters.');
  }

  // Creation of iframe element
  const iframe = document.createElement('iframe');

  iframe.src = 'https://myinvoice.my.cleartax.com/'; // fixed URL

  // Apply user-defined properties
  iframe.width = width;
  iframe.height = height;
  iframe.title = title || 'Generate E-invoice';

  // Return the iframe element
  return iframe;
}

module.exports = renderClearCustomerPortal;
