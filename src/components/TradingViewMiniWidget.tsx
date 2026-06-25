"use client";
import React, { useEffect, useRef, memo } from 'react';

function TradingViewMiniWidget() {
  const container = useRef<HTMLDivElement>(null);

  const scriptInjected = useRef(false);

  useEffect(() => {
    if (!container.current || scriptInjected.current) return;
    scriptInjected.current = true;
    
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "colorTheme": "light",
        "dateRange": "12M",
        "showChart": true,
        "locale": "br",
        "width": "100%",
        "height": "100%",
        "largeChartUrl": "",
        "isTransparent": true,
        "showSymbolLogo": true,
        "showFloatingTooltip": false,
        "tabs": [
          {
            "title": "Moedas",
            "symbols": [
              { "s": "FX_IDC:USDBRL", "d": "Dólar Comercial" },
              { "s": "FX_IDC:EURBRL", "d": "Euro" }
            ]
          },
          {
            "title": "Agro",
            "symbols": [
              { "s": "CME_MINI:QC1!", "d": "Café" },
              { "s": "CBOT_MINI:ZS1!", "d": "Soja" },
              { "s": "CBOT_MINI:ZC1!", "d": "Milho" }
            ]
          },
          {
            "title": "Energia",
            "symbols": [
              { "s": "NYMEX:CL1!", "d": "Petróleo WTI" },
              { "s": "TVC:UKOIL", "d": "Petróleo Brent" }
            ]
          },
          {
            "title": "Índices",
            "symbols": [
              { "s": "BMFBOVESPA:IBOV", "d": "Ibovespa" },
              { "s": "FOREXCOM:SPXUSD", "d": "S&P 500" }
            ]
          }
        ]
      }`;
    container.current.appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container w-full h-full" ref={container}>
      <div className="tradingview-widget-container__widget w-full h-full"></div>
    </div>
  );
}

export default memo(TradingViewMiniWidget);
