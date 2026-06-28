"use client";

import { useEffect, useRef } from "react";

export default function TradingViewMarketOverviewWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Evita duplicar o script
    if (containerRef.current && containerRef.current.children.length > 0) {
      return;
    }

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
        "largeChartUrl": "",
        "isTransparent": true,
        "showSymbolLogo": true,
        "showFloatingTooltip": true,
        "width": "100%",
        "height": "100%",
        "tabs": [
          {
            "title": "Índices",
            "symbols": [
              { "s": "BMFBOVESPA:IBOV", "d": "Ibovespa" },
              { "s": "FOREXCOM:SPXUSD", "d": "S&P 500" },
              { "s": "FOREXCOM:NSXUSD", "d": "Nasdaq 100" },
              { "s": "FOREXCOM:DJI", "d": "Dow Jones" },
              { "s": "INDEX:NKY", "d": "Nikkei 225" },
              { "s": "INDEX:DEU40", "d": "DAX Index" }
            ],
            "originalTitle": "Indices"
          },
          {
            "title": "Futuros",
            "symbols": [
              { "s": "CME_MINI:ES1!", "d": "S&P 500" },
              { "s": "CME:6E1!", "d": "Euro" },
              { "s": "COMEX:GC1!", "d": "Ouro" },
              { "s": "NYMEX:CL1!", "d": "Petróleo WTI" },
              { "s": "NYMEX:NG1!", "d": "Gás Natural" },
              { "s": "CBOT:ZC1!", "d": "Milho" }
            ],
            "originalTitle": "Futures"
          },
          {
            "title": "Títulos",
            "symbols": [
              { "s": "CBOT:ZB1!", "d": "T-Bond" },
              { "s": "CBOT:UB1!", "d": "Ultra T-Bond" },
              { "s": "EUREX:FGBL1!", "d": "Euro Bund" },
              { "s": "EUREX:FBTP1!", "d": "Euro BTP" },
              { "s": "EUREX:FGBM1!", "d": "Euro BOBL" }
            ],
            "originalTitle": "Bonds"
          },
          {
            "title": "Forex",
            "symbols": [
              { "s": "FX_IDC:USDBRL", "d": "USD para BRL" },
              { "s": "FX_IDC:EURBRL", "d": "EUR para BRL" },
              { "s": "OANDA:EURUSD", "d": "EUR/USD" },
              { "s": "OANDA:GBPUSD", "d": "GBP/USD" },
              { "s": "OANDA:USDJPY", "d": "USD/JPY" }
            ],
            "originalTitle": "Forex"
          }
        ]
      }
    `;

    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container" style={{ height: "100%", width: "100%" }}>
      <div className="tradingview-widget-container__widget" ref={containerRef} style={{ height: "100%", width: "100%" }}></div>
    </div>
  );
}
