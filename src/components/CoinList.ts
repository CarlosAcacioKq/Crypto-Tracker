import { CoinCard, CoinCardProps } from './CoinCard';

export interface CoinListProps {
    coins: any[];
    onCoinClick: (symbol: string) => void;
}

export class CoinList {
    static render(props: CoinListProps): DocumentFragment {
        const { coins, onCoinClick } = props;
        const fragment = document.createDocumentFragment();
        
        coins.forEach((coin, index) => {
            const cardElement = CoinCard.create({
                coin,
                index,
                onClick: onCoinClick
            });
            fragment.appendChild(cardElement);
        });
        
        return fragment;
    }
}