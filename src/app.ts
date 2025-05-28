import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

const publicPath = path.join(process.cwd(), 'public');

console.log('🚀 Starting server...');

// Basic middleware
app.use(cors());
app.use(express.json());
app.use(express.static(publicPath));

// Define proper TypeScript interfaces
interface CoinData {
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
    // Add base tracking properties
    base_price?: number;
    base_percent_change_24h?: number;
    base_volume_24h?: number;
}

// Enhanced mock data with proper typing
const MOCK_DATA: CoinData[] = [
    {
        id: 1,
        name: "Bitcoin",
        symbol: "BTC",
        rank: 1,
        price: 43250.00,
        percent_change_24h: 2.34,
        percent_change_7d: -1.15,
        percent_change_30d: 5.78,
        market_cap: 846000000000,
        volume_24h: 18500000000,
        circulating_supply: 19500000,
        max_supply: 21000000,
        price_history: [42500, 43100, 42800, 43250, 43500, 43250, 43400],
        volume_history: [18200000000, 17800000000, 19100000000, 18500000000, 20100000000, 18500000000, 19200000000],
        market_cap_history: [830000000000, 841000000000, 836000000000, 846000000000, 849000000000, 846000000000, 847000000000],
        volatility_score: 3.2,
        liquidity_score: 9.8,
        market_dominance: 52.3,
        fear_greed_index: 67,
        social_sentiment: 0.72,
        correlation_btc: 1.0,
        rsi: 58.4,
        moving_avg_50: 42800,
        moving_avg_200: 41200,
        support_level: 41500,
        resistance_level: 45000
    },
    {
        id: 1027,
        name: "Ethereum", 
        symbol: "ETH",
        rank: 2,
        price: 2650.00,
        percent_change_24h: 1.87,
        percent_change_7d: 3.22,
        percent_change_30d: 8.45,
        market_cap: 318000000000,
        volume_24h: 12800000000,
        circulating_supply: 120000000,
        max_supply: null,
        price_history: [2600, 2620, 2590, 2650, 2680, 2650, 2670],
        volume_history: [12500000000, 12100000000, 13200000000, 12800000000, 13500000000, 12800000000, 13100000000],
        market_cap_history: [312000000000, 314000000000, 311000000000, 318000000000, 322000000000, 318000000000, 320000000000],
        volatility_score: 4.1,
        liquidity_score: 9.2,
        market_dominance: 19.7,
        fear_greed_index: 72,
        social_sentiment: 0.68,
        correlation_btc: 0.85,
        rsi: 62.1,
        moving_avg_50: 2580,
        moving_avg_200: 2420,
        support_level: 2500,
        resistance_level: 2800
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
        volume_history: [1150000000, 1100000000, 1250000000, 1200000000, 1300000000, 1200000000, 1180000000],
        market_cap_history: [30500000000, 30200000000, 31200000000, 31000000000, 31800000000, 31000000000, 30800000000],
        volatility_score: 5.2,
        liquidity_score: 7.8,
        market_dominance: 1.9,
        fear_greed_index: 55,
        social_sentiment: 0.45,
        correlation_btc: 0.65,
        rsi: 42.3,
        moving_avg_50: 0.57,
        moving_avg_200: 0.55
    },
    {
        id: 2010,
        name: "Cardano",
        symbol: "ADA",
        rank: 4,
        price: 0.48,
        percent_change_24h: 3.45,
        percent_change_7d: 1.89,
        market_cap: 17000000000,
        volume_24h: 450000000,
        circulating_supply: 35000000000,
        price_history: [0.46, 0.47, 0.45, 0.48, 0.49, 0.48, 0.50],
        volume_history: [420000000, 410000000, 470000000, 450000000, 480000000, 450000000, 460000000],
        market_cap_history: [16100000000, 16450000000, 15750000000, 17000000000, 17150000000, 17000000000, 17500000000],
        volatility_score: 6.8,
        liquidity_score: 6.2,
        market_dominance: 1.05,
        fear_greed_index: 62,
        social_sentiment: 0.58,
        correlation_btc: 0.72,
        rsi: 65.2,
        moving_avg_50: 0.46,
        moving_avg_200: 0.44
    },
    {
        id: 5426,
        name: "Solana",
        symbol: "SOL",
        rank: 5,
        price: 98.50,
        percent_change_24h: -2.15,
        percent_change_7d: 4.32,
        market_cap: 43000000000,
        volume_24h: 2100000000,
        circulating_supply: 437000000,
        price_history: [100, 99, 101, 98.5, 97, 98.5, 96],
        volume_history: [2050000000, 1980000000, 2180000000, 2100000000, 2240000000, 2100000000, 2120000000],
        market_cap_history: [43700000000, 43263000000, 44137000000, 43000000000, 42389000000, 43000000000, 41952000000],
        volatility_score: 7.5,
        liquidity_score: 8.1,
        market_dominance: 2.67,
        fear_greed_index: 58,
        social_sentiment: 0.64,
        correlation_btc: 0.78,
        rsi: 48.7,
        moving_avg_50: 99.2,
        moving_avg_200: 95.8
    },
    {
        id: 1839,
        name: "BNB",
        symbol: "BNB",
        rank: 6,
        price: 315.75,
        percent_change_24h: 1.92,
        market_cap: 47000000000,
        volume_24h: 890000000,
        circulating_supply: 149000000,
        price_history: [310, 312, 308, 315.75, 318, 315.75, 320]
    },
    {
        id: 3408,
        name: "USDC",
        symbol: "USDC",
        rank: 7,
        price: 1.00,
        percent_change_24h: 0.05,
        market_cap: 28000000000,
        volume_24h: 3200000000,
        circulating_supply: 28000000000,
        price_history: [1.00, 1.00, 0.999, 1.00, 1.001, 1.00, 1.00]
    },
    {
        id: 825,
        name: "Tether",
        symbol: "USDT",
        rank: 8,
        price: 1.00,
        percent_change_24h: -0.02,
        market_cap: 91000000000,
        volume_24h: 28000000000,
        circulating_supply: 91000000000,
        price_history: [1.00, 1.00, 1.001, 1.00, 0.999, 1.00, 1.00]
    },
    {
        id: 1975,
        name: "Chainlink",
        symbol: "LINK",
        rank: 9,
        price: 14.25,
        percent_change_24h: 4.67,
        market_cap: 8300000000,
        volume_24h: 390000000,
        circulating_supply: 583000000,
        price_history: [13.6, 13.8, 13.5, 14.25, 14.5, 14.25, 14.8]
    },
    {
        id: 3890,
        name: "Polygon",
        symbol: "MATIC",
        rank: 10,
        price: 0.92,
        percent_change_24h: -3.21,
        market_cap: 8500000000,
        volume_24h: 420000000,
        circulating_supply: 9200000000,
        price_history: [0.95, 0.93, 0.96, 0.92, 0.90, 0.92, 0.89]
    },
    // Adding 11 more cryptocurrencies
    {
        id: 74,
        name: "Dogecoin",
        symbol: "DOGE",
        rank: 11,
        price: 0.088,
        percent_change_24h: 5.23,
        market_cap: 12600000000,
        volume_24h: 580000000,
        circulating_supply: 143000000000,
        price_history: [0.083, 0.085, 0.082, 0.088, 0.091, 0.088, 0.092]
    },
    {
        id: 3635,
        name: "Avalanche",
        symbol: "AVAX",
        rank: 12,
        price: 36.45,
        percent_change_24h: -1.87,
        market_cap: 14200000000,
        volume_24h: 320000000,
        circulating_supply: 389000000,
        price_history: [37.2, 36.8, 37.5, 36.45, 36.1, 36.45, 35.9]
    },
    {
        id: 1958,
        name: "TRON",
        symbol: "TRX",
        rank: 13,
        price: 0.105,
        percent_change_24h: 2.14,
        market_cap: 9400000000,
        volume_24h: 250000000,
        circulating_supply: 89500000000,
        price_history: [0.103, 0.104, 0.102, 0.105, 0.107, 0.105, 0.108]
    },
    {
        id: 6636,
        name: "Polkadot",
        symbol: "DOT",
        rank: 14,
        price: 6.85,
        percent_change_24h: 3.76,
        market_cap: 8900000000,
        volume_24h: 180000000,
        circulating_supply: 1300000000,
        price_history: [6.6, 6.7, 6.5, 6.85, 7.1, 6.85, 7.2]
    },
    {
        id: 1765,
        name: "Ethereum Classic",
        symbol: "ETC",
        rank: 15,
        price: 28.90,
        percent_change_24h: -2.45,
        market_cap: 4200000000,
        volume_24h: 95000000,
        circulating_supply: 145000000,
        price_history: [29.6, 29.2, 30.1, 28.90, 28.5, 28.90, 28.2]
    },
    {
        id: 2416,
        name: "Litecoin",
        symbol: "LTC",
        rank: 16,
        price: 72.35,
        percent_change_24h: 1.89,
        market_cap: 5400000000,
        volume_24h: 340000000,
        circulating_supply: 74600000,
        price_history: [71.0, 71.8, 70.5, 72.35, 73.2, 72.35, 74.1]
    },
    {
        id: 7083,
        name: "Uniswap",
        symbol: "UNI",
        rank: 17,
        price: 8.42,
        percent_change_24h: 4.32,
        market_cap: 6300000000,
        volume_24h: 120000000,
        circulating_supply: 749000000,
        price_history: [8.07, 8.15, 7.98, 8.42, 8.75, 8.42, 8.89]
    },
    {
        id: 512,
        name: "Stellar",
        symbol: "XLM",
        rank: 18,
        price: 0.128,
        percent_change_24h: -0.78,
        market_cap: 3700000000,
        volume_24h: 75000000,
        circulating_supply: 28900000000,
        price_history: [0.129, 0.128, 0.130, 0.128, 0.127, 0.128, 0.126]
    },
    {
        id: 1720,
        name: "IOTA",
        symbol: "MIOTA",
        rank: 19,
        price: 0.245,
        percent_change_24h: 6.12,
        market_cap: 683000000,
        volume_24h: 18000000,
        circulating_supply: 2800000000,
        price_history: [0.231, 0.235, 0.228, 0.245, 0.260, 0.245, 0.265]
    },
    {
        id: 328,
        name: "Monero",
        symbol: "XMR",
        rank: 20,
        price: 158.75,
        percent_change_24h: -1.23,
        market_cap: 2900000000,
        volume_24h: 85000000,
        circulating_supply: 18200000,
        price_history: [160.8, 159.5, 161.2, 158.75, 157.9, 158.75, 156.4]
    },
    {
        id: 1376,
        name: "Neo",
        symbol: "NEO",
        rank: 21,
        price: 15.68,
        percent_change_24h: 2.87,
        market_cap: 1100000000,
        volume_24h: 42000000,
        circulating_supply: 70500000,
        price_history: [15.25, 15.40, 15.10, 15.68, 16.12, 15.68, 16.35]
    }
];

// Store base data to prevent accumulation
let BASE_DATA: CoinData[] = [];

// Initialize base data on first load
function initializeBaseData() {
    if (BASE_DATA.length === 0) {
        BASE_DATA = MOCK_DATA.map(coin => ({
            ...coin,
            base_price: coin.price,
            base_percent_change_24h: coin.percent_change_24h,
            base_volume_24h: coin.volume_24h
        }));
    }
}

// API Routes with proper error handling
app.get('/api/crypto-data', (req: express.Request, res: express.Response): void => {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const secondsInMinute = now.getSeconds();
    
    // Initialize base data if needed
    initializeBaseData();
    
    // Log if this is a clock-aligned request (within first 5 seconds of minute)
    if (secondsInMinute <= 5) {
        console.log(`📡 🕐 Clock-synced /api/crypto-data request at ${timeString} (${secondsInMinute}s past minute)`);
    } else {
        console.log(`📡 /api/crypto-data called at ${timeString}`);
    }
    
    try {
        // Add more realistic and controlled variations
        const liveData: CoinData[] = MOCK_DATA.map((coin: CoinData, index: number) => {
            // Use time-based seed for consistent but changing data
            const timeSeed = Math.floor(now.getTime() / 60000); // Changes every minute
            const randomSeed = ((coin.id * timeSeed) % 1000) / 1000; // Pseudo-random but consistent per minute
            
            // Get base values to prevent accumulation
            const baseCoin = BASE_DATA[index];
            const basePrice = baseCoin?.base_price || coin.price;
            const baseChange24h = baseCoin?.base_percent_change_24h || coin.percent_change_24h;
            const baseVolume = baseCoin?.base_volume_24h || coin.volume_24h;
            
            // Create realistic variations from base values (not accumulated)
            const priceVariation = (randomSeed - 0.5) * 0.04; // Max 4% variation from base
            const changeVariation = (randomSeed - 0.5) * 2; // Max 2% variation from base change
            const volumeVariation = (randomSeed - 0.5) * 0.3; // Max 30% variation from base volume
            
            // Calculate new values from base, not from previous values
            const newPrice = Math.max(0.01, basePrice * (1 + priceVariation));
            const newVolume = Math.max(1000000, baseVolume * (1 + volumeVariation));
            const newMarketCap = newPrice * coin.circulating_supply;
            
            // Calculate realistic 24h change (from base + small variation)
            const new24hChange = Math.max(-50, Math.min(50, baseChange24h + changeVariation));
            
            // IMPROVED: Create more varied price history with realistic price movements
            let updatedPriceHistory: number[];
            let updatedVolumeHistory: number[];
            
            if (coin.price_history && coin.price_history.length >= 7) {
                // For existing price history, create more realistic updates
                const currentHistory = [...coin.price_history];
                
                // Add some volatility to the historical data to prevent straight lines
                const volatilityFactor = 0.02; // 2% max change per update
                const trendFactor = (randomSeed - 0.5) * volatilityFactor;
                
                // Update the last few prices to create more movement
                for (let i = Math.max(0, currentHistory.length - 3); i < currentHistory.length; i++) {
                    const localVariation = (Math.sin(timeSeed * 0.1 + i) * 0.5 + (Math.random() - 0.5)) * volatilityFactor;
                    currentHistory[i] = Math.max(0.01, currentHistory[i] * (1 + localVariation));
                }
                
                // Shift and add new price
                updatedPriceHistory = [...currentHistory.slice(1), newPrice];
                
                // Ensure the progression makes sense
                const lastPrice = updatedPriceHistory[updatedPriceHistory.length - 2];
                const maxChange = lastPrice * 0.05; // Max 5% change from previous
                const adjustedNewPrice = Math.max(
                    lastPrice - maxChange, 
                    Math.min(lastPrice + maxChange, newPrice)
                );
                updatedPriceHistory[updatedPriceHistory.length - 1] = adjustedNewPrice;
            } else {
                // Generate fresh price history with proper variation
                updatedPriceHistory = generateRealisticPriceHistory(newPrice, 30, timeSeed + index);
            }
            
            // Similar approach for volume history
            if (coin.volume_history && coin.volume_history.length >= 7) {
                const currentVolumeHistory = [...coin.volume_history];
                
                // Add volume volatility
                for (let i = Math.max(0, currentVolumeHistory.length - 3); i < currentVolumeHistory.length; i++) {
                    const volumeVariation = (Math.random() - 0.5) * 0.3; // 30% max volume change
                    currentVolumeHistory[i] = Math.max(1000000, currentVolumeHistory[i] * (1 + volumeVariation));
                }
                
                updatedVolumeHistory = [...currentVolumeHistory.slice(1), newVolume];
            } else {
                updatedVolumeHistory = generateRealisticVolumeHistory(newVolume, 30, timeSeed + index);
            }
            
            const updatedMarketCapHistory = coin.market_cap_history ?
                [...coin.market_cap_history.slice(1), newMarketCap] :
                updatedPriceHistory.map((price, i) => price * coin.circulating_supply);
            
            // Update technical indicators with controlled variations
            const baseRSI = baseCoin?.rsi || 50;
            const newRSI = Math.max(10, Math.min(90, baseRSI + (randomSeed - 0.5) * 8)); // Max 8 point RSI change
            
            const baseMA50 = baseCoin?.moving_avg_50 || basePrice;
            const baseMA200 = baseCoin?.moving_avg_200 || basePrice;
            const newMA50 = baseMA50 * (1 + priceVariation * 0.2); // MA moves slower
            const newMA200 = baseMA200 * (1 + priceVariation * 0.05); // MA200 moves even slower
            
            return {
                ...coin,
                price: updatedPriceHistory[updatedPriceHistory.length - 1], // Use price from history
                percent_change_24h: new24hChange,
                percent_change_7d: Math.max(-80, Math.min(80, (coin.percent_change_7d || 0) + (randomSeed - 0.5) * 1)),
                volume_24h: newVolume,
                market_cap: newMarketCap,
                price_history: updatedPriceHistory,
                volume_history: updatedVolumeHistory,
                market_cap_history: updatedMarketCapHistory,
                rsi: newRSI,
                moving_avg_50: newMA50,
                moving_avg_200: newMA200,
                volatility_score: Math.max(1, Math.min(10, (coin.volatility_score || 5) + (randomSeed - 0.5) * 0.5)),
                social_sentiment: Math.max(0, Math.min(1, (coin.social_sentiment || 0.5) + (randomSeed - 0.5) * 0.05)),
                fear_greed_index: Math.max(0, Math.min(100, (coin.fear_greed_index || 50) + (randomSeed - 0.5) * 3)),
                correlation_btc: Math.max(-1, Math.min(1, (coin.correlation_btc || 0.5) + (randomSeed - 0.5) * 0.02)),
                support_level: updatedPriceHistory[updatedPriceHistory.length - 1] * (0.92 + randomSeed * 0.03),
                resistance_level: updatedPriceHistory[updatedPriceHistory.length - 1] * (1.05 + randomSeed * 0.03)
            };
        });
        
        // Update the mock data for next request to maintain continuity
        MOCK_DATA.forEach((coin, index) => {
            if (liveData[index]) {
                // Only update the current values, keep base values intact
                Object.assign(coin, {
                    ...liveData[index],
                    base_price: BASE_DATA[index]?.base_price || coin.price,
                    base_percent_change_24h: BASE_DATA[index]?.base_percent_change_24h || coin.percent_change_24h,
                    base_volume_24h: BASE_DATA[index]?.base_volume_24h || coin.volume_24h
                });
            }
        });
        
        // Add market-wide indicators
        const marketTotalCap = liveData.reduce((sum, coin) => sum + coin.market_cap, 0);
        const avgChange = liveData.reduce((sum, coin) => sum + coin.percent_change_24h, 0) / liveData.length;
        
        res.json({
            success: true,
            data: liveData,
            timestamp: now.toISOString(),
            clock_synced: secondsInMinute <= 5,
            total_coins: liveData.length,
            update_interval: 'Every minute (clock-synced)',
            market_indicators: {
                total_market_cap: marketTotalCap,
                average_change_24h: avgChange,
                bullish_coins: liveData.filter(c => c.percent_change_24h > 0).length,
                bearish_coins: liveData.filter(c => c.percent_change_24h < 0).length,
                high_volume_coins: liveData.filter(c => c.volume_24h > 1e9).length
            }
        });
    } catch (error) {
        console.error('Error in /api/crypto-data:', error);
        res.status(500).json({
            success: false,
            error: 'Internal server error'
        });
    }
});

// Helper function to generate realistic price history with proper variation
function generateRealisticPriceHistory(currentPrice: number, periods: number, seed: number): number[] {
    const history: number[] = [];
    let price = currentPrice;
    
    // Create a deterministic but varied price history
    for (let i = periods; i >= 0; i--) {
        const timeFactor = i / periods; // 1.0 to 0.0
        const cycleFactor = Math.sin((seed + i) * 0.1) * 0.02; // 2% cycle
        const noiseFactor = (Math.sin((seed * 7 + i * 3) * 0.3) * 0.5 + Math.sin((seed * 11 + i * 5) * 0.7) * 0.3) * 0.03; // 3% noise
        const trendFactor = (timeFactor - 0.5) * 0.01; // 1% trend toward current
        
        const totalChange = cycleFactor + noiseFactor + trendFactor;
        price = currentPrice * (1 + totalChange * (1 + timeFactor)); // Stronger variation in the past
        price = Math.max(currentPrice * 0.5, Math.min(currentPrice * 1.8, price)); // Keep reasonable bounds
        
        history.unshift(price);
    }
    
    // Smooth the transition to current price over last 5 periods
    const targetPrice = currentPrice;
    for (let i = Math.max(0, history.length - 5); i < history.length; i++) {
        const weight = (i - (history.length - 5)) / 4; // 0 to 1
        const currentVal = history[i];
        history[i] = currentVal + (targetPrice - currentVal) * weight * 0.8; // 80% adjustment
    }
    
    // Ensure last price is exactly the current price
    history[history.length - 1] = currentPrice;
    
    return history;
}

// Helper function to generate realistic volume history
function generateRealisticVolumeHistory(currentVolume: number, periods: number, seed: number): number[] {
    const history: number[] = [];
    
    for (let i = periods; i >= 0; i--) {
        const timeFactor = i / periods;
        const cycleFactor = Math.sin((seed + i) * 0.15) * 0.3; // 30% cycle
        const spikeFactor = Math.random() < 0.1 ? Math.random() * 0.5 : 0; // 10% chance of 50% spike
        const noiseFactor = (Math.random() - 0.5) * 0.2; // 20% noise
        
        const totalChange = cycleFactor + spikeFactor + noiseFactor;
        let volume = currentVolume * (1 + totalChange);
        volume = Math.max(currentVolume * 0.2, Math.min(currentVolume * 3, volume));
        
        history.unshift(volume);
    }
    
    // Smooth transition to current volume
    for (let i = Math.max(0, history.length - 3); i < history.length; i++) {
        const weight = (i - (history.length - 3)) / 2; // 0 to 1
        const currentVal = history[i];
        history[i] = currentVal + (currentVolume - currentVal) * weight * 0.6;
    }
    
    history[history.length - 1] = currentVolume;
    
    return history;
}

// API Routes with proper error handling
app.get('/api/crypto-data', (req: express.Request, res: express.Response): void => {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const secondsInMinute = now.getSeconds();
    
    // Initialize base data if needed
    initializeBaseData();
    
    // Log if this is a clock-aligned request (within first 5 seconds of minute)
    if (secondsInMinute <= 5) {
        console.log(`📡 🕐 Clock-synced /api/crypto-data request at ${timeString} (${secondsInMinute}s past minute)`);
    } else {
        console.log(`📡 /api/crypto-data called at ${timeString}`);
    }
    
    try {
        // Add more realistic and controlled variations
        const liveData: CoinData[] = MOCK_DATA.map((coin: CoinData, index: number) => {
            // Use time-based seed for consistent but changing data
            const timeSeed = Math.floor(now.getTime() / 60000); // Changes every minute
            const randomSeed = ((coin.id * timeSeed) % 1000) / 1000; // Pseudo-random but consistent per minute
            
            // Get base values to prevent accumulation
            const baseCoin = BASE_DATA[index];
            const basePrice = baseCoin?.base_price || coin.price;
            const baseChange24h = baseCoin?.base_percent_change_24h || coin.percent_change_24h;
            const baseVolume = baseCoin?.base_volume_24h || coin.volume_24h;
            
            // Create realistic variations from base values (not accumulated)
            const priceVariation = (randomSeed - 0.5) * 0.04; // Max 4% variation from base
            const changeVariation = (randomSeed - 0.5) * 2; // Max 2% variation from base change
            const volumeVariation = (randomSeed - 0.5) * 0.3; // Max 30% variation from base volume
            
            // Calculate new values from base, not from previous values
            const newPrice = Math.max(0.01, basePrice * (1 + priceVariation));
            const newVolume = Math.max(1000000, baseVolume * (1 + volumeVariation));
            const newMarketCap = newPrice * coin.circulating_supply;
            
            // Calculate realistic 24h change (from base + small variation)
            const new24hChange = Math.max(-50, Math.min(50, baseChange24h + changeVariation));
            
            // IMPROVED: Create more varied price history with realistic price movements
            let updatedPriceHistory: number[];
            let updatedVolumeHistory: number[];
            
            if (coin.price_history && coin.price_history.length >= 7) {
                // For existing price history, create more realistic updates
                const currentHistory = [...coin.price_history];
                
                // Add some volatility to the historical data to prevent straight lines
                const volatilityFactor = 0.02; // 2% max change per update
                const trendFactor = (randomSeed - 0.5) * volatilityFactor;
                
                // Update the last few prices to create more movement
                for (let i = Math.max(0, currentHistory.length - 3); i < currentHistory.length; i++) {
                    const localVariation = (Math.sin(timeSeed * 0.1 + i) * 0.5 + (Math.random() - 0.5)) * volatilityFactor;
                    currentHistory[i] = Math.max(0.01, currentHistory[i] * (1 + localVariation));
                }
                
                // Shift and add new price
                updatedPriceHistory = [...currentHistory.slice(1), newPrice];
                
                // Ensure the progression makes sense
                const lastPrice = updatedPriceHistory[updatedPriceHistory.length - 2];
                const maxChange = lastPrice * 0.05; // Max 5% change from previous
                const adjustedNewPrice = Math.max(
                    lastPrice - maxChange, 
                    Math.min(lastPrice + maxChange, newPrice)
                );
                updatedPriceHistory[updatedPriceHistory.length - 1] = adjustedNewPrice;
            } else {
                // Generate fresh price history with proper variation
                updatedPriceHistory = generateRealisticPriceHistory(newPrice, 30, timeSeed + index);
            }
            
            // Similar approach for volume history
            if (coin.volume_history && coin.volume_history.length >= 7) {
                const currentVolumeHistory = [...coin.volume_history];
                
                // Add volume volatility
                for (let i = Math.max(0, currentVolumeHistory.length - 3); i < currentVolumeHistory.length; i++) {
                    const volumeVariation = (Math.random() - 0.5) * 0.3; // 30% max volume change
                    currentVolumeHistory[i] = Math.max(1000000, currentVolumeHistory[i] * (1 + volumeVariation));
                }
                
                updatedVolumeHistory = [...currentVolumeHistory.slice(1), newVolume];
            } else {
                updatedVolumeHistory = generateRealisticVolumeHistory(newVolume, 30, timeSeed + index);
            }
            
            const updatedMarketCapHistory = coin.market_cap_history ?
                [...coin.market_cap_history.slice(1), newMarketCap] :
                updatedPriceHistory.map((price, i) => price * coin.circulating_supply);
            
            // Update technical indicators with controlled variations
            const baseRSI = baseCoin?.rsi || 50;
            const newRSI = Math.max(10, Math.min(90, baseRSI + (randomSeed - 0.5) * 8)); // Max 8 point RSI change
            
            const baseMA50 = baseCoin?.moving_avg_50 || basePrice;
            const baseMA200 = baseCoin?.moving_avg_200 || basePrice;
            const newMA50 = baseMA50 * (1 + priceVariation * 0.2); // MA moves slower
            const newMA200 = baseMA200 * (1 + priceVariation * 0.05); // MA200 moves even slower
            
            return {
                ...coin,
                price: updatedPriceHistory[updatedPriceHistory.length - 1], // Use price from history
                percent_change_24h: new24hChange,
                percent_change_7d: Math.max(-80, Math.min(80, (coin.percent_change_7d || 0) + (randomSeed - 0.5) * 1)),
                volume_24h: newVolume,
                market_cap: newMarketCap,
                price_history: updatedPriceHistory,
                volume_history: updatedVolumeHistory,
                market_cap_history: updatedMarketCapHistory,
                rsi: newRSI,
                moving_avg_50: newMA50,
                moving_avg_200: newMA200,
                volatility_score: Math.max(1, Math.min(10, (coin.volatility_score || 5) + (randomSeed - 0.5) * 0.5)),
                social_sentiment: Math.max(0, Math.min(1, (coin.social_sentiment || 0.5) + (randomSeed - 0.5) * 0.05)),
                fear_greed_index: Math.max(0, Math.min(100, (coin.fear_greed_index || 50) + (randomSeed - 0.5) * 3)),
                correlation_btc: Math.max(-1, Math.min(1, (coin.correlation_btc || 0.5) + (randomSeed - 0.5) * 0.02)),
                support_level: updatedPriceHistory[updatedPriceHistory.length - 1] * (0.92 + randomSeed * 0.03),
                resistance_level: updatedPriceHistory[updatedPriceHistory.length - 1] * (1.05 + randomSeed * 0.03)
            };
        });
        
        // Update the mock data for next request to maintain continuity
        MOCK_DATA.forEach((coin, index) => {
            if (liveData[index]) {
                // Only update the current values, keep base values intact
                Object.assign(coin, {
                    ...liveData[index],
                    base_price: BASE_DATA[index]?.base_price || coin.price,
                    base_percent_change_24h: BASE_DATA[index]?.base_percent_change_24h || coin.percent_change_24h,
                    base_volume_24h: BASE_DATA[index]?.base_volume_24h || coin.volume_24h
                });
            }
        });
        
        // Add market-wide indicators
        const marketTotalCap = liveData.reduce((sum, coin) => sum + coin.market_cap, 0);
        const avgChange = liveData.reduce((sum, coin) => sum + coin.percent_change_24h, 0) / liveData.length;
        
        res.json({
            success: true,
            data: liveData,
            timestamp: now.toISOString(),
            clock_synced: secondsInMinute <= 5,
            total_coins: liveData.length,
            update_interval: 'Every minute (clock-synced)',
            market_indicators: {
                total_market_cap: marketTotalCap,
                average_change_24h: avgChange,
                bullish_coins: liveData.filter(c => c.percent_change_24h > 0).length,
                bearish_coins: liveData.filter(c => c.percent_change_24h < 0).length,
                high_volume_coins: liveData.filter(c => c.volume_24h > 1e9).length
            }
        });
    } catch (error) {
        console.error('Error in /api/crypto-data:', error);
        res.status(500).json({
            success: false,
            error: 'Internal server error'
        });
    }
});

app.get('/api/status', (req: express.Request, res: express.Response): void => {
    try {
        res.json({ 
            status: 'ok', 
            timestamp: new Date().toISOString(),
            coins_available: MOCK_DATA.length
        });
    } catch (error) {
        console.error('Error in /api/status:', error);
        res.status(500).json({ status: 'error', error: 'Internal server error' });
    }
});

// Add new analytics endpoints with proper error handling
app.get('/api/market-overview', (req: express.Request, res: express.Response): void => {
    console.log('📡 /api/market-overview called at', new Date().toLocaleTimeString());
    
    try {
        const totalMarketCap = MOCK_DATA.reduce((sum, coin) => sum + coin.market_cap, 0);
        const totalVolume = MOCK_DATA.reduce((sum, coin) => sum + coin.volume_24h, 0);
        const avgVolatility = MOCK_DATA.reduce((sum, coin) => sum + (coin.volatility_score || 0), 0) / MOCK_DATA.length;
        const avgFearGreed = MOCK_DATA.reduce((sum, coin) => sum + (coin.fear_greed_index || 0), 0) / MOCK_DATA.length;
        
        // Add slight variations to market overview data
        const marketCapVariation = (Math.random() - 0.5) * 0.02;
        const volumeVariation = (Math.random() - 0.5) * 0.1;
        
        res.json({
            success: true,
            data: {
                total_market_cap: totalMarketCap * (1 + marketCapVariation),
                total_volume_24h: totalVolume * (1 + volumeVariation),
                bitcoin_dominance: (MOCK_DATA[0]?.market_dominance ?? 0) + (Math.random() - 0.5) * 0.5,
                market_fear_greed: avgFearGreed + (Math.random() - 0.5) * 5,
                avg_volatility: avgVolatility + (Math.random() - 0.5) * 0.5,
                trending_up: MOCK_DATA.filter(coin => coin.percent_change_24h > 0).length,
                trending_down: MOCK_DATA.filter(coin => coin.percent_change_24h < 0).length,
                timestamp: new Date().toISOString()
            }
        });
    } catch (error) {
        console.error('Error in /api/market-overview:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
});

app.get('/api/correlation-matrix', (req: express.Request, res: express.Response): void => {
    console.log('📡 /api/correlation-matrix called');
    
    try {
        const correlations = MOCK_DATA.slice(0, 10).map(coin => ({
            symbol: coin.symbol,
            name: coin.name,
            btc_correlation: coin.correlation_btc || 0,
            volatility: coin.volatility_score || 0,
            volume_correlation: Math.random() * 0.8 + 0.2 // Mock correlation
        }));
        
        res.json({
            success: true,
            data: correlations
        });
    } catch (error) {
        console.error('Error in /api/correlation-matrix:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
});

app.get('/api/technical-indicators/:symbol', (req: express.Request, res: express.Response): void => {
    console.log(`📡 /api/technical-indicators/${req.params.symbol} called`);
    
    try {
        const symbol = req.params.symbol?.toUpperCase();
        if (!symbol) {
            res.status(400).json({ success: false, error: 'Symbol parameter required' });
            return;
        }
        
        const coin = MOCK_DATA.find(c => c.symbol === symbol);
        if (!coin) {
            res.status(404).json({ success: false, error: 'Coin not found' });
            return;
        }
        
        res.json({
            success: true,
            data: {
                symbol: coin.symbol,
                rsi: coin.rsi || 50,
                moving_avg_50: coin.moving_avg_50 || coin.price,
                moving_avg_200: coin.moving_avg_200 || coin.price,
                support_level: coin.support_level || coin.price * 0.9,
                resistance_level: coin.resistance_level || coin.price * 1.1,
                bollinger_bands: {
                    upper: coin.price * 1.05,
                    middle: coin.price,
                    lower: coin.price * 0.95
                },
                macd: {
                    signal: Math.random() * 10 - 5,
                    histogram: Math.random() * 5 - 2.5,
                    macd_line: Math.random() * 8 - 4
                }
            }
        });
    } catch (error) {
        console.error(`Error in /api/technical-indicators/${req.params.symbol}:`, error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
});

// Serve simple HTML for all routes with proper error handling
app.get('*', (req: express.Request, res: express.Response): void => {
    try {
        // First try to serve the actual index.html file
        const indexPath = path.join(process.cwd(), 'src', 'index.html');
        const fs = require('fs');
        
        if (fs.existsSync(indexPath)) {
            const htmlContent = fs.readFileSync(indexPath, 'utf8');
            res.send(htmlContent);
            return;
        }
        
        // Fallback if index.html doesn't exist - serve from public
        const publicIndexPath = path.join(process.cwd(), 'public', 'index.html');
        if (fs.existsSync(publicIndexPath)) {
            const htmlContent = fs.readFileSync(publicIndexPath, 'utf8');
            res.send(htmlContent);
            return;
        }
        
        // Last resort fallback
        res.status(404).send(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>CryptoTracker Pro</title>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
            <body>
                <h1>CryptoTracker Pro</h1>
                <p>HTML file not found. Please run 'npm run build' to generate the required files.</p>
                <script>
                    console.error('HTML file not found - please run npm run build');
                    setTimeout(() => window.location.reload(), 3000);
                </script>
            </body>
            </html>
        `);
    } catch (error) {
        console.error('Error serving HTML:', error);
        res.status(500).send('<h1>Internal Server Error</h1>');
    }
});

// Start server with proper error handling
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
    console.log(`📊 Serving ${MOCK_DATA.length} cryptocurrencies`);
}).on('error', (error: Error) => {
    console.error('❌ Server failed to start:', error);
    process.exit(1);
});

export default app;