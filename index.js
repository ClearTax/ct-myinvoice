const iframeSrcArr = [
  'myinvoice-dev.my.cleartax.com',
  'myinvoice.my.cleartax.com',
  'myinvoice-sandbox.my.cleartax.com',
];

function renderClearCustomerPortal({
  width,
  height,
  tin,
  sid,
  title,
  iframeSrc = 'myinvoice-dev.my.cleartax.com',
}) {
  if (!width || !height || !sid) {
    throw new Error('Width, height, sid are required parameters.');
  } else if (!iframeSrcArr.includes(iframeSrc)) {
    throw new Error('Invalid iframeSrc');
  }

  // Creation of iframe element
  const iframe = document.createElement('iframe');

  const tinQuery = tin ? `&tin=${tin}` : '';

  iframe.src = `https://${iframeSrc}/?iframe=true${tinQuery}`; // fixed URL

  // Apply user-defined properties
  iframe.width = width;
  iframe.height = height;
  if (title) {
    iframe.title = title;
  }
  iframe.onload = () => {
    // Sending the SID to the iframe once it's loaded
    setTimeout(() => {
      if (iframe.contentWindow)
        iframe.contentWindow.postMessage({ sid: sid }, iframe.src);
    }, 100);
  };

  // Return the iframe element
  return iframe;
}

module.exports = renderClearCustomerPortal;
