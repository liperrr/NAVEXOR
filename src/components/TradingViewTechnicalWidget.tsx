"use client";

import { useEffect, useRef } from "react";

interface TradingViewTechnicalWidgetProps {
  symbol: string;
  width?: string | number;
  height?: string | number;
}

export default function TradingViewTechnicalWidget({ 
  symbol, 
  width = "100%", 
  height = 450 
}: TradingViewTechnicalWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Limpar o container antes de injetar
    if (containerRef.current) {
      containerRef.current.innerHTML = "";
    }

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      interval: "1D",
      width: width,
      isTransparent: true,
      height: height,
      symbol: symbol,
      showIntervalTabs: true,
      displayMode: "single",
      locale: "br",
      colorTheme: "light"
    });

    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }
  }, [symbol, width, height]);

  return (
    <div className="tradingview-widget-container" style={{ width, height }}>
      <div className="tradingview-widget-container__widget" ref={containerRef} style={{ width: "100%", height: "100%" }}></div>
    </div>
  );
}
