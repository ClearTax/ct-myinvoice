const iframeSrcArr = [
  'myinvoice-dev.my.cleartax.com',
  'myinvoice.my.cleartax.com',
  'myinvoice-sandbox.my.cleartax.com',
];

function renderClearCustomerPortal({
  token,
  width,
  height,
  tin,
  title,
  iframeSrc = 'myinvoice-dev.my.cleartax.com',
  style,
}) {
  if (!token) {
    throw new Error('token is required parameter.');
  } else if (!iframeSrcArr.includes(iframeSrc)) {
    throw new Error('Invalid iframe Src');
  }

  // Creation of iframe element
  const iframe = document.createElement('iframe');

  const tinQuery = tin ? `&tin=${tin}` : '';

  iframe.src = `https://${iframeSrc}/?token=${token}&iframe=true${tinQuery}`; // fixed URL

  // Apply user-defined properties
  if (width) iframe.width = width;
  if (height) iframe.height = height;
  if (title) iframe.title = title;

  if (style) {
    Object.keys(style).forEach((key) => {
      iframe.style[key] = style[key];
    });
  }

  // Return the iframe element
  return iframe;
}

module.exports = renderClearCustomerPortal;
