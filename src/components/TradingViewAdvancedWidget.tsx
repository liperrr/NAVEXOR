"use client";
import React, { useEffect, useRef, memo } from 'react';

function TradingViewAdvancedWidget() {
  const container = useRef<HTMLDivElement>(null);

  const scriptInjected = useRef(false);

  useEffect(() => {
    if (!container.current || scriptInjected.current) return;
    scriptInjected.current = true;
    
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "width": "100%",
        "height": "100%",
        "symbol": "FX_IDC:USDBRL",
        "interval": "D",
        "timezone": "America/Sao_Paulo",
        "theme": "light",
        "style": "1",
        "locale": "br",
        "enable_publishing": false,
        "backgroundColor": "rgba(255, 255, 255, 1)",
        "gridColor": "rgba(240, 243, 250, 0)",
        "allow_symbol_change": true,
        "details": true,
        "hotlist": true,
        "calendar": true,
        "watchlist": [
          "FX_IDC:USDBRL",
          "FX_IDC:EURBRL",
          "BMFBOVESPA:IBOV",
          "FOREXCOM:SPXUSD",
          "TVC:UKOIL",
          "CME_MINI:QC1!",
          "CBOT_MINI:ZS1!"
        ],
        "support_host": "https://www.tradingview.com"
      }`;
    container.current.appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container w-full" ref={container}>
      <div className="tradingview-widget-container__widget w-full"></div>
    </div>
  );
}

export default memo(TradingViewAdvancedWidget);
