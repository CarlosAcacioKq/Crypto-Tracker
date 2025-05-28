import { CoinCard, CoinCardProps } from './CoinCard';

export interface CoinListProps {
    coins: any[];
    onCoinClick: (symbol: string) => void;
}

export class CoinList {
    static render(props: CoinListProps): DocumentFragment {
        const { coins, onCoinClick } = props;
        const fragment = document.createDocumentFragment();
        
        const listContainer = document.createElement('div');
        listContainer.className = 'coin-list';
        
        // Use requestAnimationFrame for better performance
        const renderBatch = (startIndex: number, batchSize: number = 8) => {
            const endIndex = Math.min(startIndex + batchSize, coins.length);
            
            for (let i = startIndex; i < endIndex; i++) {
                const cardElement = CoinCard.create({
                    coin: coins[i],
                    index: i,
                    onClick: onCoinClick
                });
                listContainer.appendChild(cardElement);
            }
            
            if (endIndex < coins.length) {
                requestAnimationFrame(() => renderBatch(endIndex, batchSize));
            }
        };
        
        renderBatch(0);
        fragment.appendChild(listContainer);
        return fragment;
    }
}