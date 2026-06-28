"use client";

import { useEffect, useRef } from "react";

interface TradingViewScreenerWidgetProps {
  market?: "forex" | "crypto" | "america" | "brazil";
  defaultColumn?: "overview" | "performance" | "oscillators" | "moving_averages";
  width?: string | number;
  height?: string | number;
}

export default function TradingViewScreenerWidget({
  market = "brazil",
  defaultColumn = "moving_averages",
  width = "100%",
  height = 500
}: TradingViewScreenerWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.innerHTML = "";
    }

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: width,
      height: height,
      defaultColumn: defaultColumn,
      defaultScreen: "general",
      market: market,
      showToolbar: true,
      colorTheme: "light",
      locale: "br",
      isTransparent: true
    });

    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }
  }, [market, defaultColumn, width, height]);

  return (
    <div className="tradingview-widget-container" style={{ width, height }}>
      <div className="tradingview-widget-container__widget" ref={containerRef} style={{ width: "100%", height: "100%" }}></div>
    </div>
  );
}
