function renderClearCustomerPortal({ width, height, sid, tin, title }) {
  if (!width || !height || !sid) {
    throw new Error('Width, height, sid are required parameters.');
  }

  // Creation of iframe element
  const iframe = document.createElement('iframe');

  const tinQuery = tin ? `&tin=${tin}` : '';

  iframe.src = `https://myinvoice-dev.my.cleartax.com/?iframe=true${tinQuery}`; // fixed URL

  // Apply user-defined properties
  iframe.width = width;
  iframe.height = height;
  if (title) {
    iframe.title = title;
  }
  iframe.onload = () => {
    // Sending the SID to the iframe once it's loaded
    setTimeout(() => {
      iframe.contentWindow.postMessage({ sid: sid }, iframe.src);
    }, [100]);
  };

  // Return the iframe element
  return iframe;
}

module.exports = renderClearCustomerPortal;
