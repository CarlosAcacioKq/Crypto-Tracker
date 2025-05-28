// DELETE THIS FILE - Not needed for the essential application
export interface MarketOverviewChartProps {
    totalMarketCap: number;
    totalVolume: number;
    btcDominance: number;
    coins: any[];
}

export function createMarketOverviewChart(props: MarketOverviewChartProps): HTMLElement {
    const { totalMarketCap, totalVolume, btcDominance, coins } = props;
    
    const container = document.createElement('div');
    container.className = 'market-overview-chart';
    container.style.cssText = `
        background: rgba(255,255,255,0.05);
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 12px;
        padding: 16px;
        margin-bottom: 16px;
    `;
    
    const positiveCoins = coins.filter(coin => coin.percent_change_24h > 0).length;
    const marketSentiment = coins.length > 0 ? ((positiveCoins / coins.length) * 100).toFixed(0) : '0';
    
    container.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
            <h3 style="color:#fff;font-size:1.2rem;font-weight:700;margin:0">📊 Market Overview</h3>
            <div style="color:#b8c6db;font-size:0.8rem">Updated: ${new Date().toLocaleTimeString()}</div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px">
            <div style="background:rgba(0,0,0,0.2);border:1px solid rgba(255,255,255,0.1);border-radius:8px;padding:10px;text-align:center">
                <div style="color:#b8c6db;font-size:0.7rem;font-weight:600;text-transform:uppercase;margin-bottom:4px">Total Market Cap</div>
                <div style="color:#00d4ff;font-size:0.9rem;font-weight:700">$${(totalMarketCap / 1e12).toFixed(2)}T</div>
            </div>
        </div>
    `;
    
    return container;
}

export default createMarketOverviewChart;
