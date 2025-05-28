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
        cardElement.onclick = () => onClick(coin.symbol);
        
        // Basic structure - detailed rendering is handled by CryptoApp
        return cardElement;
    }
}