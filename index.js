const iframeSrcArr = [
  'myinvoice-dev.my.cleartax.com',
  'myinvoice.my.cleartax.com',
  'myinvoice-sandbox.my.cleartax.com',
];

function renderClearCustomerPortal({
  sid,
  width,
  height,
  tin,
  title,
  iframeSrc = 'myinvoice-dev.my.cleartax.com',
  style,
}) {
  if (!sid) {
    throw new Error('sid is required parameter.');
  } else if (!iframeSrcArr.includes(iframeSrc)) {
    throw new Error('Invalid iframe Src');
  }

  // Creation of iframe element
  const iframe = document.createElement('iframe');

  const tinQuery = tin ? `&tin=${tin}` : '';

  iframe.src = `https://${iframeSrc}/?iframe=true${tinQuery}`; // fixed URL

  // Apply user-defined properties
  if (width) iframe.width = width;
  if (height) iframe.height = height;
  if (title) iframe.title = title;

  if (style) {
    Object.keys(style).forEach((key) => {
      iframe.style[key] = style[key];
    });
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
