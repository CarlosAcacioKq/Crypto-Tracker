import { PriceChart } from './PriceChart';

export interface CoinData {
    id: number;
    name: string;
    symbol: string;
    rank: number;
    price: number;
    percent_change_24h: number;
    percent_change_7d?: number;
    percent_change_30d?: number;
    market_cap: number;
    volume_24h: number;
    circulating_supply: number;
    max_supply?: number | null;
    price_history: number[];
    volume_history?: number[];
    market_cap_history?: number[];
    volatility_score?: number;
    liquidity_score?: number;
    market_dominance?: number;
    fear_greed_index?: number;
    social_sentiment?: number;
    correlation_btc?: number;
    rsi?: number;
    moving_avg_50?: number;
    moving_avg_200?: number;
    support_level?: number;
    resistance_level?: number;
}

export interface CryptoDetailViewProps {
    coin: any;
    onClose?: () => void;
}

export function createCryptoDetailView(props: CryptoDetailViewProps): HTMLElement {
    const { coin, onClose } = props;
    
    const modal = document.createElement('div');
    modal.className = 'crypto-detail-modal';
    modal.style.cssText = `
        position: fixed; top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(0,0,0,0.9); display: flex; align-items: center; justify-content: center;
        z-index: 10000; backdrop-filter: blur(8px);
    `;
    
    modal.innerHTML = `
        <div style="
            background: rgba(15,23,42,0.98); border: 2px solid rgba(0,212,255,0.3);
            border-radius: 16px; padding: 24px; max-width: 600px; width: 95%;
            max-height: 85vh; overflow-y: auto; color: #fff;
        ">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px">
                <h2 style="margin:0;color:#00d4ff">${coin.name} (${coin.symbol})</h2>
                <button class="close-btn" style="
                    background:rgba(239,68,68,0.2); border:1px solid rgba(239,68,68,0.4);
                    color:#ef4444; padding:8px; border-radius:50%; cursor:pointer;
                ">✕</button>
            </div>
            <div style="font-size:2rem;color:#00d4ff;margin-bottom:16px">
                $${coin.price.toFixed(2)}
            </div>
            <div style="color:${coin.percent_change_24h > 0 ? '#10b981' : '#ef4444'};margin-bottom:16px">
                ${coin.percent_change_24h > 0 ? '+' : ''}${coin.percent_change_24h.toFixed(2)}% (24h)
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
                <div>
                    <strong>Market Cap:</strong><br>
                    $${(coin.market_cap / 1e9).toFixed(2)}B
                </div>
                <div>
                    <strong>Volume (24h):</strong><br>
                    $${(coin.volume_24h / 1e6).toFixed(0)}M
                </div>
            </div>
        </div>
    `;
    
    const closeBtn = modal.querySelector('.close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            if (onClose) onClose();
            modal.remove();
        });
    }
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            if (onClose) onClose();
            modal.remove();
        }
    });
    
    return modal;
}

export default createCryptoDetailView;
