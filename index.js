const EnvironmentArr = ['development', 'sandbox', 'production'];

const domainOriginMapping = {
  development: 'https://myinvoice-dev.my.cleartax.com',
  sandbox: 'https://myinvoice-sandbox.my.cleartax.com',
  production: 'https://myinvoice.my.cleartax.com',
};

function renderClearCustomerPortal({
  token,
  width,
  height,
  tin,
  title,
  environment = 'sandbox',
  style,
  callbackFunc,
}) {
  if (!token) {
    throw new Error('token is required parameter.');
  } else if (!EnvironmentArr.includes(environment)) {
    throw new Error('Invalid iframe Src');
  }

  // Creation of iframe element
  const iframe = document.createElement('iframe');

  const tinQuery = tin ? `&tin=${tin}` : '';

  const domainOrigin = domainOriginMapping[environment];

  iframe.src = `${domainOrigin}/?token=${token}&iframe=true${tinQuery}`; // fixed URL

  // Apply user-defined properties
  if (width) iframe.width = width;
  if (height) iframe.height = height;
  if (title) iframe.title = title;

  if (style) {
    Object.keys(style).forEach((key) => {
      iframe.style[key] = style[key];
    });
  }

  iframe.addEventListener('load', function () {
    setTimeout(() => {
      if (callbackFunc) {
        iframe.contentWindow.postMessage(
          { type: 'callback', iframeCallback: callbackFunc.toString() },
          domainOrigin
        );
      }
    }, 100);
  });

  // Return the iframe element
  return iframe;
}

module.exports = renderClearCustomerPortal;
