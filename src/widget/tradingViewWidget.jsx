// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
  const isMobile = window.innerWidth < 600;

  // Set the width and height based on whether it's a mobile device
  const width = isMobile ? "300" : "800";
  const height = isMobile ? "300" : "600";
  const config = {
    width: width,
    height: height,
    symbol: "BITSTAMP:BTCUSD",
    interval: "W",
    timezone: "Etc/UTC",
    theme: "light",
    style: "2",
    locale: "en",
    enable_publishing: false,
    withdateranges: true,
    allow_symbol_change: true,
    save_image: false,
    calendar: false,
    hide_volume: true,
    support_host: "https://www.tradingview.com",
  };

  // Convert the configuration object to a JSON string
  const configString = JSON.stringify(config);

  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = configString;
    container.current.appendChild(script);
  }, [configString]);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
