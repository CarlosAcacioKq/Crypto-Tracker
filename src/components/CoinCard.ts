export interface CoinCardProps {
    coin: any;
    index: number;
    onClick: (symbol: string) => void;
}

export class CoinCard {
    static create(props: CoinCardProps): HTMLElement {
        const { coin, index, onClick } = props;
        
        const cardElement = document.createElement('div');
        cardElement.className = 'coin-card';
        
        // Fix: Use proper event handler to prevent page reload
        cardElement.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            onClick(coin.symbol);
        });
        
        const isPositive = coin.percent_change_24h > 0;
        const changeIcon = isPositive ? '📈' : '📉';
        const changeColor = isPositive ? '#10b981' : '#ef4444';
        
        // Simplified card HTML for better performance
        cardElement.innerHTML = `
            <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px">
                <div style="flex:1">
                    <h3 style="color:#fff;font-size:1.1rem;font-weight:700;margin:0 0 4px 0">${coin.name}</h3>
                    <span style="color:#00d4ff;font-size:.8rem;font-weight:600">${coin.symbol}</span>
                </div>
                <div style="color:#b8c6db;font-size:.8rem">#${coin.rank}</div>
            </div>
            <div style="color:#fff;font-size:1.4rem;font-weight:800;margin:12px 0">$${coin.price.toFixed(2)}</div>
            <div style="color:${changeColor};font-weight:600;display:flex;align-items:center;gap:4px">
                <span>${changeIcon}</span>
                <span>${isPositive ? '+' : ''}${coin.percent_change_24h.toFixed(2)}%</span>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:12px">
                <div style="background:rgba(0,0,0,.2);padding:8px;border-radius:8px;text-align:center">
                    <div style="color:#b8c6db;font-size:.7rem">Market Cap</div>
                    <div style="color:#00d4ff;font-size:.8rem;font-weight:700">$${this.formatMarketCap(coin.market_cap)}</div>
                </div>
                <div style="background:rgba(0,0,0,.2);padding:8px;border-radius:8px;text-align:center">
                    <div style="color:#b8c6db;font-size:.7rem">Volume</div>
                    <div style="color:#00d4ff;font-size:.8rem;font-weight:700">$${this.formatVolume(coin.volume_24h)}</div>
                </div>
            </div>
        `;
        
        return cardElement;
    }

    private static formatMarketCap(marketCap: number): string {
        if (marketCap >= 1e12) return `${(marketCap / 1e12).toFixed(2)}T`;
        if (marketCap >= 1e9) return `${(marketCap / 1e9).toFixed(1)}B`;
        if (marketCap >= 1e6) return `${(marketCap / 1e6).toFixed(0)}M`;
        return `${(marketCap / 1e3).toFixed(0)}K`;
    }

    private static formatVolume(volume: number): string {
        if (volume >= 1e9) return `${(volume / 1e9).toFixed(1)}B`;
        if (volume >= 1e6) return `${(volume / 1e6).toFixed(0)}M`;
        return `${(volume / 1e3).toFixed(0)}K`;
    }
}