// public/widget.js
(function () {
    const script = document.currentScript;
    const widgetUrl = script.getAttribute("data-widget-url") || "http://localhost:3002";
  
    const iframe = document.createElement("iframe");
    iframe.src = `${widgetUrl}/chat-widget`;
    iframe.style.position = "fixed";
    iframe.style.bottom = "20px";
    iframe.style.right = "20px";
    iframe.style.width = "300px";
    iframe.style.height = "400px";
    iframe.style.border = "none";
    iframe.style.zIndex = "1000";
    document.body.appendChild(iframe);
  })();
  