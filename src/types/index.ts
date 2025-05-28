export interface Coin {
    id: number;
    name: string;
    symbol: string;
    rank: number;
    price: number;
    market_cap: number;
    volume_24h: number;
    circulating_supply: number;
    percent_change_1h: number;
    percent_change_24h: number;
    percent_change_7d: number;
    last_updated: string;
}

export interface PricePoint {
    timestamp: number;
    price: number;
    volume: number;
    market_cap: number;
}

export interface ApiResponse {
    data: any[];
    status?: {
        timestamp: string;
        error_code: number;
        error_message?: string;
    };
}

export interface CryptoAnalytics {
    id: number;
    name: string;
    symbol: string;
    current_price: number;
    price_history: PricePoint[];
    momentum: {
        price_momentum_7d: number;
        volume_momentum_7d: number;
    };
    volatility: number;
    rsi: number;
    moving_averages: {
        ma_7d: number;
        ma_30d: number;
    };
}

export interface MarketSummary {
    total_market_cap: number;
    average_volatility: number;
    average_rsi: number;
    bullish_count: number;
    bearish_count: number;
}

export interface WatchlistItem {
    symbol: string;
    name: string;
    price: number;
    added_at: string;
}

export interface CryptocurrencyData {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    price: number;
    percent_change_24h: number;
    market_cap: number;
    volume_24h: number;
    circulating_supply: number;
    rsi?: number;
    // Add base tracking fields
    base_price?: number;
    base_percent_change_24h?: number;
    base_volume_24h?: number;
}

export interface MarketData {
    data: CryptocurrencyData[];
    status: string;
    total_market_cap: number;
    total_volume: number;
}

export interface FilterConfig {
    type: string;
    label: string;
    active: boolean;
}

export interface SortConfig {
    field: string;
    direction: 'asc' | 'desc';
}