"use client";
import React, { useEffect, useRef } from 'react';

function TradingViewHeatmapWidget() {
  const container = useRef<HTMLDivElement>(null);
  const scriptInjected = useRef(false);

  useEffect(() => {
    if (!container.current || scriptInjected.current) return;
    scriptInjected.current = true;
    
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-forex-heat-map.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "width": "100%",
        "height": "100%",
        "currencies": [
          "EUR",
          "USD",
          "JPY",
          "GBP",
          "CHF",
          "AUD",
          "CAD",
          "NZD",
          "BRL"
        ],
        "isTransparent": true,
        "colorTheme": "light",
        "locale": "br"
      }`;
    container.current.appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container w-full h-full" ref={container}>
      <div className="tradingview-widget-container__widget w-full h-full"></div>
    </div>
  );
}

export default TradingViewHeatmapWidget;
