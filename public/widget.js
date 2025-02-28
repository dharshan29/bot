(function () {
  const script = document.currentScript;
  const widgetUrl = script.getAttribute("data-widget-url") || "https://bot-silk-tau.vercel.app";

  const iframe = document.createElement("iframe");
  iframe.src = `${widgetUrl}/chat-widget`;
  iframe.style.position = "fixed";
  iframe.style.bottom = "20px";
  iframe.style.right = "20px";
  iframe.style.width = "300px";
  iframe.style.height = "400px";
  iframe.style.border = "none";
  iframe.style.zIndex = "1000";
  iframe.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
  iframe.style.borderRadius = "8px";

  document.body.appendChild(iframe);
})();
