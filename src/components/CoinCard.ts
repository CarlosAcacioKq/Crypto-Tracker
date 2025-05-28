export interface CoinCardProps {
    coin: any;
    onClick?: (symbol: string) => void;
}

export function createCoinCard(props: CoinCardProps): HTMLElement {
    const { coin, onClick } = props;
    
    const card = document.createElement('div');
    card.className = 'coin-card';
    
    if (onClick) {
        card.addEventListener('click', () => onClick(coin.symbol));
    }
    
    const isPositive = coin.percent_change_24h > 0;
    
    card.innerHTML = `
        <div style="display:flex;justify-content:space-between;margin-bottom:8px">
            <h3 style="margin:0;color:#fff">${coin.name}</h3>
            <span style="color:#666">#${coin.rank}</span>
        </div>
        <div style="color:#00d4ff;font-size:1.2rem;margin:8px 0">$${coin.price.toFixed(2)}</div>
        <div style="color:${isPositive ? '#10b981' : '#ef4444'}">
            ${isPositive ? '+' : ''}${coin.percent_change_24h.toFixed(2)}%
        </div>
    `;
    
    return card;
}

export default createCoinCard;