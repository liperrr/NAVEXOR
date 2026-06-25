"use client";
import React, { useEffect, useRef } from 'react';

function TradingViewCalendarWidget() {
  const container = useRef<HTMLDivElement>(null);
  const scriptInjected = useRef(false);

  useEffect(() => {
    if (!container.current || scriptInjected.current) return;
    scriptInjected.current = true;
    
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-events.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "colorTheme": "light",
        "isTransparent": true,
        "width": "100%",
        "height": "100%",
        "locale": "br",
        "importanceFilter": "-1,0,1",
        "currencyFilter": "USD,EUR,BRL"
      }`;
    container.current.appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container w-full h-full" ref={container}>
      <div className="tradingview-widget-container__widget w-full h-full"></div>
    </div>
  );
}

export default TradingViewCalendarWidget;
