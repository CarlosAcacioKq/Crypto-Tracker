import { createCoinCard } from './CoinCard';

export interface CoinListProps {
    coins: any[];
    onCoinClick?: (symbol: string) => void;
}

export function createCoinList(props: CoinListProps): HTMLElement {
    const { coins, onCoinClick } = props;
    
    const container = document.createElement('div');
    container.className = 'coin-list';
    container.style.cssText = `
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 16px;
        margin-top: 20px;
    `;
    
    coins.forEach(coin => {
        const coinCard = createCoinCard({ coin, onClick: onCoinClick });
        container.appendChild(coinCard);
    });
    
    return container;
}

export default createCoinList;