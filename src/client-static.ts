// Static client for GitHub Pages - uses mock data instead of server API
console.log('✅ Static GitHub Pages client starting...');

import './styles/main.css';

// Mock data for static hosting
const STATIC_MOCK_DATA = [
    {
        id: 1,
        name: "Bitcoin",
        symbol: "BTC",
        rank: 1,
        price: 43250.00,
        percent_change_24h: 2.34,
        percent_change_7d: -1.15,
        market_cap: 846000000000,
        volume_24h: 18500000000,
        circulating_supply: 19500000,
        price_history: [42500, 43100, 42800, 43250, 43500, 43250, 43400],
        volume_history: [18200000000, 17800000000, 19100000000, 18500000000, 20100000000, 18500000000, 19200000000],
        volatility_score: 3.2,
        market_dominance: 52.3,
        rsi: 58.4,
        moving_avg_50: 42800,
        moving_avg_200: 41200,
        correlation_btc: 1.0
    },
    {
        id: 1027,
        name: "Ethereum", 
        symbol: "ETH",
        rank: 2,
        price: 2650.00,
        percent_change_24h: 1.87,
        percent_change_7d: 3.22,
        market_cap: 318000000000,
        volume_24h: 12800000000,
        circulating_supply: 120000000,
        price_history: [2600, 2620, 2590, 2650, 2680, 2650, 2670],
        volume_history: [12500000000, 12100000000, 13200000000, 12800000000, 13500000000, 12800000000, 13100000000],
        volatility_score: 4.1,
        market_dominance: 19.7,
        rsi: 62.1,
        moving_avg_50: 2580,
        moving_avg_200: 2420,
        correlation_btc: 0.85
    },
    {
        id: 52,
        name: "XRP",
        symbol: "XRP",
        rank: 3,
        price: 0.58,
        percent_change_24h: -1.23,
        percent_change_7d: 2.45,
        market_cap: 31000000000,
        volume_24h: 1200000000,
        circulating_supply: 53500000000,
        price_history: [0.59, 0.58, 0.60, 0.58, 0.57, 0.58, 0.56],
        volatility_score: 5.2,
        market_dominance: 1.9,
        rsi: 42.3,
        correlation_btc: 0.65
    }
    // ...existing code... (add more coins as needed)
];

// Global variables
let currentCryptoData: any[] = STATIC_MOCK_DATA;
let isDashboardVisible = false;
let isCorrelationVisible = false;

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', initStaticApp);

function initStaticApp() {
    console.log('🔄 Initializing static GitHub Pages app...');
    
    const app = document.getElementById('app') || document.body;
    
    // ...existing code... (use the same HTML structure from client.ts)
    app.innerHTML = `
        <div style="
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
            color: white;
            min-height: 100vh;
            margin: 0;
            padding: 0;
        ">
            <div style="max-width: 1400px; margin: 0 auto; padding: 20px;">
                <header style="text-align: center; margin-bottom: 30px;">
                    <h1 style="color: #f1c40f; font-size: 3rem; font-weight: 700; margin: 0 0 10px 0; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">
                        📊 CryptoAnalytics Pro (GitHub Pages Demo)
                    </h1>
                    <p style="color: #ecf0f1; font-size: 1.1rem; margin: 0 0 20px 0; opacity: 0.9;">
                        Static Demo - Advanced Cryptocurrency Market Analysis
                    </p>
                    
                    <!-- GitHub Badge -->
                    <div style="margin-bottom: 20px;">
                        <a href="https://github.com/yourusername/crypto-web-app" target="_blank" style="
                            background: rgba(52, 73, 94, 0.8);
                            border: 1px solid rgba(255, 255, 255, 0.2);
                            color: white;
                            padding: 10px 20px;
                            border-radius: 8px;
                            text-decoration: none;
                            font-weight: 600;
                            display: inline-flex;
                            align-items: center;
                            gap: 8px;
                        ">
                            ⭐ View on GitHub
                        </a>
                    </div>
                </header>
                
                <div id="status" style="background: rgba(46, 204, 113, 0.2); border: 1px solid rgba(46, 204, 113, 0.3); border-radius: 8px; padding: 15px; margin-bottom: 30px; text-align: center;">
                    ✅ Static demo loaded with ${STATIC_MOCK_DATA.length} cryptocurrencies
                </div>
                
                <div id="coin-list" style="display: grid; gap: 20px; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));"></div>
            </div>
        </div>
    `;

    // Load static data
    loadStaticCryptoData();

    // Add global function for coin details
    (window as any).showCoinDetails = function(coin: any) {
        showDetailedView(coin);
    };
}

function loadStaticCryptoData() {
    const listEl = document.getElementById('coin-list');
    if (!listEl) return;

    // ...existing code... (use the same coin card generation from client.ts)
    const coinCards = STATIC_MOCK_DATA.map((coin: any) => {
        const isPositive = coin.percent_change_24h >= 0;
        const changeColor = isPositive ? '#2ecc71' : '#e74c3c';
        const changeIcon = isPositive ? '📈' : '📉';
        const changeSign = isPositive ? '+' : '';
        
        return `
            <div onclick="showCoinDetails(${JSON.stringify(coin).replace(/"/g, '&quot;')})" style="
                background: linear-gradient(145deg, rgba(52, 73, 94, 0.6), rgba(44, 62, 80, 0.6));
                backdrop-filter: blur(20px);
                border: 2px solid rgba(255, 255, 255, 0.15);
                border-radius: 20px;
                padding: 25px;
                box-shadow: 0 15px 45px rgba(0, 0, 0, 0.3);
                transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                cursor: pointer;
                position: relative;
                overflow: hidden;
            " onmouseover="this.style.transform='translateY(-8px) scale(1.02)'" onmouseout="this.style.transform='translateY(0) scale(1)'">
                
                <div style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, #f39c12, #e67e22, #3498db, #9b59b6); border-radius: 20px 20px 0 0;"></div>
                
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px;">
                    <div>
                        <h3 style="color: #f1c40f; font-size: 1.4rem; font-weight: 700; margin: 0 0 8px 0;">${coin.name}</h3>
                        <div style="background: rgba(241, 196, 15, 0.2); color: #f1c40f; padding: 4px 12px; border-radius: 15px; font-size: 0.85rem; font-weight: 600; display: inline-block;">${coin.symbol}</div>
                    </div>
                    <div style="background: rgba(52, 152, 219, 0.2); color: #3498db; padding: 6px 12px; border-radius: 12px; font-size: 0.8rem; font-weight: 700;">#${coin.rank}</div>
                </div>
                
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                    <div>
                        <div style="font-size: 1.6rem; font-weight: 800; color: #ecf0f1; margin-bottom: 3px;">
                            $${coin.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: coin.price < 1 ? 4 : 2 })}
                        </div>
                        <div style="color: #bdc3c7; font-size: 0.85rem;">💰 Current Price</div>
                    </div>
                    <div style="text-align: right;">
                        <div style="color: ${changeColor}; font-size: 1.2rem; font-weight: 700; margin-bottom: 3px;">
                            ${changeIcon} ${changeSign}${Math.abs(coin.percent_change_24h).toFixed(2)}%
                        </div>
                        <div style="color: #bdc3c7; font-size: 0.85rem;">24h Change</div>
                    </div>
                </div>
                
                <div style="border-top: 2px solid rgba(255,255,255,0.1); padding-top: 15px; margin-top: 15px;">
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; font-size: 0.8rem;">
                        <div style="text-align: center; padding: 8px; background: rgba(52, 152, 219, 0.1); border-radius: 8px;">
                            <div style="color: #3498db; font-weight: 600; font-size: 0.7rem;">Market Cap</div>
                            <div style="color: #ecf0f1; font-weight: 700; font-size: 0.9rem;">${(coin.market_cap / 1e9).toFixed(1)}B</div>
                        </div>
                        <div style="text-align: center; padding: 8px; background: rgba(155, 89, 182, 0.1); border-radius: 8px;">
                            <div style="color: #9b59b6; font-weight: 600; font-size: 0.7rem;">Volume</div>
                            <div style="color: #ecf0f1; font-weight: 700; font-size: 0.9rem;">${(coin.volume_24h / 1e6).toFixed(0)}M</div>
                        </div>
                        <div style="text-align: center; padding: 8px; background: rgba(230, 126, 34, 0.1); border-radius: 8px;">
                            <div style="color: #e67e22; font-weight: 600; font-size: 0.7rem;">Rank</div>
                            <div style="color: #ecf0f1; font-weight: 700; font-size: 0.9rem;">#${coin.rank}</div>
                        </div>
                    </div>
                </div>
                
                <div style="margin-top: 12px; text-align: center; color: #bdc3c7; font-size: 0.75rem; opacity: 0.8;">
                    🕒 Static Demo Data
                </div>
            </div>
        `;
    }).join('');
    
    listEl.innerHTML = coinCards;
}

// Function to show detailed cryptocurrency view
function showDetailedView(coin: any) {
    alert(`Detailed view for ${coin.name} (${coin.symbol})\nPrice: $${coin.price}\nThis would open a modal in the full version!`);
}