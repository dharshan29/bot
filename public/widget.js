(function () {
  const script = document.currentScript;
  const widgetUrl = script.getAttribute("data-widget-url") || "https://bot-silk-tau.vercel.app";

  // Create the chat button
  const button = document.createElement('button');
  button.textContent = '💬 Chat';
  button.style.position = 'fixed';
  button.style.bottom = '20px';
  button.style.right = '20px';
  button.style.backgroundColor = '#0061FE';
  button.style.color = 'white';
  button.style.border = 'none';
  button.style.borderRadius = '50%';
  button.style.width = '50px';
  button.style.height = '50px';
  button.style.zIndex = '1000';
  button.style.cursor = 'pointer';
  button.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
  
  // Create the iframe (hidden initially)
  const iframe = document.createElement('iframe');
  iframe.src = `${widgetUrl}/chat-widget`;
  iframe.style.position = 'fixed';
  iframe.style.bottom = '80px';
  iframe.style.right = '20px';
  iframe.style.width = '300px';
  iframe.style.height = '400px';
  iframe.style.border = 'none';
  iframe.style.zIndex = '1000';
  iframe.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
  iframe.style.borderRadius = '8px';
  iframe.style.display = 'none'; // Initially hidden

  // Toggle iframe visibility when button is clicked
  button.onclick = () => {
      const isIframeVisible = iframe.style.display === 'block';
      iframe.style.display = isIframeVisible ? 'none' : 'block';
      button.textContent = isIframeVisible ? '💬 Chat' : '❌ Close';
  };

  // Add elements to the DOM
  document.body.appendChild(button);
  document.body.appendChild(iframe);
})();
