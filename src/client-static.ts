// Static version for GitHub Pages deployment
// Uses external APIs instead of local Express server

console.log('🚀 CryptoTracker Static Loading...');

// Static mock data for GitHub Pages (when API fails)
const STATIC_MOCK_DATA = [
    {
        id: 1,
        name: "Bitcoin",
        symbol: "BTC",
        rank: 1,
        price: 43250.00,
        percent_change_24h: 2.34,
        market_cap: 846000000000,
        volume_24h: 18500000000,
        circulating_supply: 19500000,
        price_history: [42500, 43100, 42800, 43250, 43500, 43250, 43400],
        rsi: 58.4
    },
    {
        id: 1027,
        name: "Ethereum",
        symbol: "ETH",
        rank: 2,
        price: 2650.00,
        percent_change_24h: 1.87,
        market_cap: 318000000000,
        volume_24h: 12800000000,
        circulating_supply: 120000000,
        price_history: [2600, 2620, 2590, 2650, 2680, 2650, 2670],
        rsi: 62.1
    }
    // ...existing code... (add more coins as needed)
];

class CryptoAppStatic {
    private coins: any[] = [];
    private currentFilter = 'all';
    private currentSort = 'rank';
    private countdownTimer = 60;
    private countdownInterval: any;
    private isLoading = false;

    async init() {
        console.log('🚀 Initializing Static Crypto App...');
        await this.loadData();
        this.startCountdown();
        this.setupEventListeners();
        console.log('✅ Static App initialized');
    }

    private setupEventListeners() {
        let resizeTimeout: any;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                if (this.coins.length > 0) this.renderCoins();
            }, 250);
        }, { passive: true });
    }

    async loadData() {
        if (this.isLoading) return;
        this.isLoading = true;

        const statusEl = document.getElementById('status');
        if (!statusEl) return;

        try {
            // Try external API first (you can use CoinGecko's free API)
            let data;
            try {
                const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true', {
                    headers: { 'Accept': 'application/json' }
                });
                
                if (response.ok) {
                    const apiData = await response.json();
                    data = this.transformCoinGeckoData(apiData);
                } else {
                    throw new Error('API failed');
                }
            } catch (apiError) {
                console.log('📡 Using static mock data (API unavailable)');
                data = this.generateMockData();
            }

            this.coins = data;
            this.updateMarketStats();
            this.renderCoins();
            this.updateLastUpdated();
            statusEl.style.display = 'none';
            
        } catch (error) {
            console.error('❌ Error loading data:', error);
            statusEl.innerHTML = `
                <div style="text-align:center;padding:30px;color:#ef4444">
                    <h3 style="margin-bottom:8px">Loading Error</h3>
                    <p>Using demo data. Refresh to try again.</p>
                    <button onclick="location.reload()" style="padding:6px 12px;background:rgba(0,212,255,.2);border:1px solid #00d4ff;border-radius:6px;color:#00d4ff;cursor:pointer;font-weight:600;margin-top:8px">🔄 Retry</button>
                </div>
            `;
        } finally {
            this.isLoading = false;
        }
    }

    private transformCoinGeckoData(apiData: any[]): any[] {
        return apiData.map((coin, index) => ({
            id: coin.id,
            name: coin.name,
            symbol: coin.symbol.toUpperCase(),
            rank: coin.market_cap_rank || index + 1,
            price: coin.current_price,
            percent_change_24h: coin.price_change_percentage_24h || 0,
            market_cap: coin.market_cap,
            volume_24h: coin.total_volume,
            circulating_supply: coin.circulating_supply,
            price_history: coin.sparkline_in_7d?.price?.slice(-30) || this.generatePriceHistory(coin.current_price, 30),
            rsi: 50 + (Math.random() - 0.5) * 40 // Mock RSI
        }));
    }

    private generateMockData(): any[] {
        return STATIC_MOCK_DATA.map(coin => ({
            ...coin,
            price: coin.price * (0.98 + Math.random() * 0.04), // Add small variation
            percent_change_24h: coin.percent_change_24h + (Math.random() - 0.5) * 2,
            price_history: coin.price_history || this.generatePriceHistory(coin.price, 30)
        }));
    }

    private generatePriceHistory(currentPrice: number, days: number = 30): number[] {
        const history: number[] = [];
        let price = currentPrice;
        
        for (let i = days; i > 0; i--) {
            const change = (Math.random() - 0.5) * 0.05; // ±2.5% change
            price = Math.max(currentPrice * 0.7, Math.min(currentPrice * 1.3, price * (1 + change)));
            history.unshift(price);
        }
        
        // Ensure last price matches current
        history[history.length - 1] = currentPrice;
        return history;
    }

    private startCountdown() {
        if (this.countdownInterval) clearInterval(this.countdownInterval);

        this.countdownInterval = setInterval(() => {
            this.countdownTimer--;
            const countdownEl = document.getElementById('countdown-display');
            
            if (countdownEl) {
                countdownEl.textContent = `${this.countdownTimer}s`;
                countdownEl.className = `countdown-display ${
                    this.countdownTimer <= 10 ? 'critical' : 
                    this.countdownTimer <= 20 ? 'warning' : ''
                }`;
            }
            
            if (this.countdownTimer <= 0) {
                this.countdownTimer = 300; // 5 minutes for external API
                this.loadData();
            }
        }, 1000);
    }

    // ...existing code... (copy other methods from client.ts)
    
    updateMarketStats() {
        if (this.coins.length === 0) return;

        const totalMarketCap = this.coins.reduce((sum, coin) => sum + (coin.market_cap || 0), 0);
        const totalVolume = this.coins.reduce((sum, coin) => sum + (coin.volume_24h || 0), 0);
        const positiveCoins = this.coins.filter(coin => coin.percent_change_24h > 0).length;

        const elements = {
            'total-market-cap': `$${(totalMarketCap / 1e12).toFixed(2)}T`,
            'total-volume': `$${(totalVolume / 1e9).toFixed(1)}B`,
            'btc-dominance': '42.3%', // Static for demo
            'market-sentiment': `${((positiveCoins / this.coins.length) * 100).toFixed(0)}%`,
            'active-coins': this.coins.length.toString(),
            'trending-up': positiveCoins.toString()
        };

        Object.entries(elements).forEach(([id, value]) => {
            const el = document.getElementById(id);
            if (el) el.textContent = value;
        });
    }

    // Copy other necessary methods from client.ts
    // renderCoins(), filterCoins(), sortCoins(), etc.

    // Minimal renderCoins implementation to avoid errors
    renderCoins() {
        const container = document.getElementById('coin-list-container');
        if (!container) return;
        
        container.innerHTML = this.coins.map(coin => `
            <div class="coin-row" style="
                display:flex;
                justify-content:space-between;
                align-items:center;
                padding:12px;
                margin:8px 0;
                background:rgba(255,255,255,0.05);
                border:1px solid rgba(255,255,255,0.1);
                border-radius:8px;
                cursor:pointer;
            ">
                <span class="coin-rank" style="color:#b8c6db;min-width:40px">#${coin.rank}</span>
                <span class="coin-name" style="color:#fff;font-weight:600;flex:1;margin:0 12px">${coin.name} (${coin.symbol})</span>
                <span class="coin-price" style="color:#00d4ff;font-weight:700;margin:0 12px">$${coin.price.toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
                <span class="coin-change ${coin.percent_change_24h >= 0 ? 'positive' : 'negative'}" style="
                    color:${coin.percent_change_24h >= 0 ? '#10b981' : '#ef4444'};
                    font-weight:700;
                    min-width:80px;
                    text-align:right;
                ">
                    ${coin.percent_change_24h.toFixed(2)}%
                </span>
            </div>
        `).join('');
    }

    updateLastUpdated() {
        const el = document.getElementById('last-updated');
        if (el) {
            const now = new Date();
            el.textContent = `Last updated: ${now.toLocaleTimeString()}`;
        }
    }
}

// Initialize static app
let staticApp: CryptoAppStatic;

function refreshAnalysis(): void {
    if (staticApp) staticApp.loadData();
}

function filterByAnalysis(type: string): void {
    // Implement filtering logic
}

function handleSortChange(): void {
    // Implement sorting logic
}

// Make functions globally available
(window as any).refreshAnalysis = refreshAnalysis;
(window as any).filterByAnalysis = filterByAnalysis;
(window as any).handleSortChange = handleSortChange;

document.addEventListener('DOMContentLoaded', () => {
    staticApp = new CryptoAppStatic();
    staticApp.init();
});