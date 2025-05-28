// CoinList.ts
// CoinList.ts
// A TypeScript class for displaying a list of cryptocurrencies with filtering and sorting capabilities
export interface CoinListProps {
    coins: any[];
    onCoinClick?: (symbol: string) => void;
    maxCoins?: number;
    showLoadMore?: boolean;
    onLoadMore?: () => void;
}

export interface CoinListFilter {
    type: 'all' | 'high_momentum' | 'oversold' | 'overbought' | 'large_cap' | 'mid_cap' | 'small_cap';
    label: string;
}

export interface CoinListSort {
    field: 'rank' | 'price' | 'change' | 'volume' | 'market_cap' | 'name';
    direction: 'asc' | 'desc';
}

export class CoinList {
    private container: HTMLElement;
    private coins: any[] = [];
    private filteredCoins: any[] = [];
    private currentFilter: string = 'all';
    private currentSort: string = 'rank';
    private maxDisplayCoins: number = 10;
    private onCoinClickCallback: ((symbol: string) => void) | undefined;
    private onLoadMoreCallback: (() => void) | undefined;

    constructor(containerId: string, options: Partial<CoinListProps> = {}) {
        const element = document.getElementById(containerId);
        if (!element) {
            throw new Error(`Container element with id '${containerId}' not found`);
        }
        
        this.container = element;
        this.maxDisplayCoins = options.maxCoins || 10;
        this.onCoinClickCallback = options.onCoinClick;
        this.onLoadMoreCallback = options.onLoadMore;
        
        console.log('🏗️ CoinList component initialized');
    }

    // Update coins data and re-render
    updateCoins(coins: any[]): void {
        try {
            if (!Array.isArray(coins)) {
                console.error('❌ CoinList: Invalid coins data - expected array, got:', typeof coins);
                return;
            }

            this.coins = coins;
            this.applyFilterAndSort();
            this.render();
            
            console.log(`✅ CoinList updated with ${coins.length} coins, showing ${this.filteredCoins.length} after filter`);
        } catch (error) {
            console.error('❌ CoinList updateCoins error:', error);
            this.renderError('Failed to update coin list');
        }
    }

    // Apply current filter and sort
    private applyFilterAndSort(): void {
        try {
            // Apply filter
            this.filteredCoins = this.filterCoins(this.coins, this.currentFilter);
            
            // Apply sort
            this.filteredCoins = this.sortCoins(this.filteredCoins, this.currentSort);
            
            console.log(`🔄 Applied filter '${this.currentFilter}' and sort '${this.currentSort}': ${this.filteredCoins.length} coins`);
        } catch (error) {
            console.error('❌ CoinList applyFilterAndSort error:', error);
            this.filteredCoins = this.coins; // Fallback to unfiltered
        }
    }

    // Filter coins based on type
    private filterCoins(coins: any[], filterType: string): any[] {
        try {
            switch (filterType) {
                case 'high_momentum':
                    return coins.filter(coin => (coin.percent_change_24h || 0) > 5);
                case 'oversold':
                    return coins.filter(coin => (coin.rsi || 50) < 30);
                case 'overbought':
                    return coins.filter(coin => (coin.rsi || 50) > 70);
                case 'large_cap':
                    return coins.filter(coin => (coin.market_cap || 0) > 10e9);
                case 'mid_cap':
                    return coins.filter(coin => {
                        const mcap = coin.market_cap || 0;
                        return mcap > 1e9 && mcap <= 10e9;
                    });
                case 'small_cap':
                    return coins.filter(coin => (coin.market_cap || 0) <= 1e9);
                case 'all':
                default:
                    return coins;
            }
        } catch (error) {
            console.error('❌ CoinList filterCoins error:', error);
            return coins; // Return unfiltered on error
        }
    }

    // Sort coins based on field
    private sortCoins(coins: any[], sortType: string): any[] {
        try {
            const sorted = [...coins];
            
            switch (sortType) {
                case 'price':
                    return sorted.sort((a, b) => (b.price || 0) - (a.price || 0));
                case 'change':
                    return sorted.sort((a, b) => (b.percent_change_24h || 0) - (a.percent_change_24h || 0));
                case 'volume':
                    return sorted.sort((a, b) => (b.volume_24h || 0) - (a.volume_24h || 0));
                case 'market_cap':
                    return sorted.sort((a, b) => (b.market_cap || 0) - (a.market_cap || 0));
                case 'name':
                    return sorted.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
                case 'rank':
                default:
                    return sorted.sort((a, b) => (a.rank || 0) - (b.rank || 0));
            }
        } catch (error) {
            console.error('❌ CoinList sortCoins error:', error);
            return coins; // Return unsorted on error
        }
    }

    // Set filter and update display
    setFilter(filterType: string): void {
        if (this.currentFilter === filterType) return;
        
        this.currentFilter = filterType;
        this.applyFilterAndSort();
        this.render();
        
        console.log(`🔍 Filter changed to: ${filterType}`);
    }

    // Set sort and update display
    setSort(sortType: string): void {
        if (this.currentSort === sortType) return;
        
        this.currentSort = sortType;
        this.applyFilterAndSort();
        this.render();
        
        console.log(`📊 Sort changed to: ${sortType}`);
    }

    // Set maximum coins to display
    setMaxDisplayCoins(max: number): void {
        this.maxDisplayCoins = Math.max(1, max);
        this.render();
        
        console.log(`📋 Max display coins set to: ${this.maxDisplayCoins}`);
    }

    // Load more coins (increase display limit)
    loadMore(): void {
        const increment = window.innerWidth < 768 ? 4 : 6;
        this.maxDisplayCoins += increment;
        this.render();
        
        if (this.onLoadMoreCallback) {
            this.onLoadMoreCallback();
        }
        
        console.log(`📈 Loaded more coins, now showing: ${this.maxDisplayCoins}`);
    }

    // Main render method
    private render(): void {
        try {
            if (!this.container) {
                console.error('❌ CoinList: No container element found');
                return;
            }

            if (this.filteredCoins.length === 0) {
                this.renderEmpty();
                return;
            }

            const coinsToShow = this.filteredCoins.slice(0, this.maxDisplayCoins);
            const hasMoreCoins = this.filteredCoins.length > this.maxDisplayCoins;

            // Create main container
            const fragment = document.createDocumentFragment();

            // Add info bar
            fragment.appendChild(this.createInfoBar(coinsToShow.length, this.filteredCoins.length, hasMoreCoins));

            // Add coin grid
            fragment.appendChild(this.createCoinGrid(coinsToShow));

            // Clear and append
            this.container.innerHTML = '';
            this.container.appendChild(fragment);

            console.log(`🎨 CoinList rendered: ${coinsToShow.length} of ${this.filteredCoins.length} coins`);
        } catch (error) {
            console.error('❌ CoinList render error:', error);
            this.renderError('Failed to render coin list');
        }
    }

    // Create info bar with statistics
    private createInfoBar(showing: number, total: number, hasMore: boolean): HTMLElement {
        const infoDiv = document.createElement('div');
        infoDiv.style.cssText = `
            margin-bottom: 12px;
            padding: 10px 12px;
            background: rgba(0,0,0,.3);
            border-radius: 8px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 8px;
        `;

        const gainersCount = this.filteredCoins.filter(coin => (coin.percent_change_24h || 0) > 0).length;
        const losersCount = this.filteredCoins.filter(coin => (coin.percent_change_24h || 0) < 0).length;

        infoDiv.innerHTML = `
            <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap">
                <span style="color:#b8c6db;font-size:.8rem">
                    Showing <span style="color:#00d4ff;font-weight:700">${showing}</span> of ${total}
                </span>
                <span style="color:#10b981;font-size:.8rem">📈 ${gainersCount}</span>
                <span style="color:#ef4444;font-size:.8rem">📉 ${losersCount}</span>
                <span style="color:#b8c6db;font-size:.8rem">Filter: <span style="color:#00d4ff">${this.currentFilter}</span></span>
            </div>
            ${hasMore ? `
                <button 
                    class="load-more-btn" 
                    style="
                        padding:6px 12px;
                        background:linear-gradient(135deg,#00d4ff,#4facfe);
                        border:none;
                        border-radius:6px;
                        color:#fff;
                        cursor:pointer;
                        font-size:.8rem;
                        font-weight:600;
                        transition: all 0.3s ease;
                    "
                >
                    Load More (${total - showing})
                </button>
            ` : ''}
        `;

        // Add load more functionality
        const loadMoreBtn = infoDiv.querySelector('.load-more-btn');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.loadMore();
            });

            // Add hover effect
            loadMoreBtn.addEventListener('mouseenter', () => {
                (loadMoreBtn as HTMLElement).style.transform = 'translateY(-1px)';
                (loadMoreBtn as HTMLElement).style.boxShadow = '0 4px 12px rgba(0,212,255,0.3)';
            });

            loadMoreBtn.addEventListener('mouseleave', () => {
                (loadMoreBtn as HTMLElement).style.transform = 'translateY(0)';
                (loadMoreBtn as HTMLElement).style.boxShadow = 'none';
            });
        }

        return infoDiv;
    }

    // Create the main coin grid
    private createCoinGrid(coins: any[]): HTMLElement {
        const gridDiv = document.createElement('div');
        gridDiv.className = 'coin-list';
        gridDiv.style.cssText = `
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 12px;
        `;

        coins.forEach((coin, index) => {
            const coinCard = this.createCoinCard(coin, index);
            gridDiv.appendChild(coinCard);
        });

        return gridDiv;
    }

    // Create individual coin card
    private createCoinCard(coin: any, index: number): HTMLElement {
        const card = document.createElement('div');
        card.className = 'coin-card';
        card.style.cssText = `
            background: rgba(255,255,255,.05);
            border: 1px solid rgba(255,255,255,.1);
            border-radius: 12px;
            padding: 12px;
            cursor: pointer;
            transition: all .2s ease;
            color: #fff;
            min-height: 150px;
            position: relative;
            overflow: hidden;
        `;

        // Add click handler
        card.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            if (this.onCoinClickCallback && coin.symbol) {
                this.onCoinClickCallback(coin.symbol);
            }
        });

        // Add hover effects
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-2px)';
            card.style.borderColor = 'rgba(0,212,255,.3)';
            card.style.boxShadow = '0 8px 25px rgba(0,0,0,.4)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.borderColor = 'rgba(255,255,255,.1)';
            card.style.boxShadow = 'none';
        });

        const isPositive = (coin.percent_change_24h || 0) > 0;
        const changeIcon = isPositive ? '📈' : '📉';
        const changeColor = isPositive ? '#10b981' : '#ef4444';

        card.innerHTML = `
            <!-- Header with name and rank -->
            <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px">
                <div style="flex:1">
                    <h3 style="color:#fff;font-size:1rem;font-weight:700;margin:0 0 4px 0;word-break:break-word">
                        ${this.sanitizeString(coin.name || 'Unknown')}
                    </h3>
                    <span style="color:#00d4ff;font-size:.8rem;font-weight:600">
                        ${this.sanitizeString(coin.symbol || 'N/A')}
                    </span>
                </div>
                <div style="color:#b8c6db;font-size:.7rem;background:rgba(0,0,0,.2);padding:2px 6px;border-radius:4px">
                    #${coin.rank || '?'}
                </div>
            </div>

            <!-- Price -->
            <div class="coin-price" style="color:#fff;font-size:1.3rem;font-weight:800;margin:10px 0;font-family:monospace">
                $${this.formatPrice(coin.price || 0)}
            </div>

            <!-- 24h Change -->
            <div class="coin-change" style="color:${changeColor};font-weight:600;display:flex;align-items:center;gap:4px;margin-bottom:10px">
                <span>${changeIcon}</span>
                <span>${isPositive ? '+' : ''}${(coin.percent_change_24h || 0).toFixed(2)}%</span>
            </div>

            <!-- Market data grid -->
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px">
                <div style="background:rgba(0,0,0,.2);padding:6px;border-radius:6px;text-align:center">
                    <div style="color:#b8c6db;font-size:.6rem;text-transform:uppercase;margin-bottom:2px">Market Cap</div>
                    <div style="color:#00d4ff;font-size:.7rem;font-weight:700;font-family:monospace">
                        $${this.formatMarketCap(coin.market_cap || 0)}
                    </div>
                </div>
                <div style="background:rgba(0,0,0,.2);padding:6px;border-radius:6px;text-align:center">
                    <div style="color:#b8c6db;font-size:.6rem;text-transform:uppercase;margin-bottom:2px">Volume</div>
                    <div style="color:#00d4ff;font-size:.7rem;font-weight:700;font-family:monospace">
                        $${this.formatVolume(coin.volume_24h || 0)}
                    </div>
                </div>
            </div>

            <!-- Loading animation overlay for initial load -->
            ${index < 3 ? `
                <div class="card-loading" style="position:absolute;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.8);display:flex;align-items:center;justify-content:center;border-radius:12px;animation:cardFadeOut 0.8s ease forwards;animation-delay:${index * 0.1}s">
                    <div style="width:20px;height:20px;border:2px solid rgba(0,212,255,.2);border-top:2px solid #00d4ff;border-radius:50%;animation:spin 1s linear infinite"></div>
                </div>
            ` : ''}
        `;

        return card;
    }

    // Render empty state
    private renderEmpty(): void {
        this.container.innerHTML = `
            <div style="
                text-align: center;
                padding: 40px 20px;
                color: #b8c6db;
                background: rgba(255,255,255,.05);
                border: 1px solid rgba(255,255,255,.1);
                border-radius: 12px;
                margin: 20px 0;
            ">
                <div style="font-size: 3rem; margin-bottom: 16px; opacity: 0.6;">🔍</div>
                <h3 style="color: #fff; margin-bottom: 8px; font-weight: 700;">No Coins Found</h3>
                <p style="margin: 0; font-size: 0.9rem;">
                    ${this.currentFilter === 'all' 
                        ? 'No cryptocurrency data available. Please try refreshing the page.' 
                        : `No coins match the current filter: "${this.currentFilter}". Try a different filter.`
                    }
                </p>
                <button 
                    onclick="window.location.reload()" 
                    style="
                        margin-top: 16px;
                        padding: 8px 16px;
                        background: linear-gradient(135deg, #00d4ff, #4facfe);
                        border: none;
                        border-radius: 8px;
                        color: #fff;
                        cursor: pointer;
                        font-weight: 600;
                        transition: all 0.3s ease;
                    "
                >
                    🔄 Refresh Data
                </button>
            </div>
        `;
    }

    // Render error state
    private renderError(message: string): void {
        this.container.innerHTML = `
            <div style="
                text-align: center;
                padding: 30px 20px;
                color: #ef4444;
                background: rgba(239,68,68,.1);
                border: 1px solid rgba(239,68,68,.3);
                border-radius: 12px;
                margin: 20px 0;
            ">
                <div style="font-size: 2.5rem; margin-bottom: 12px;">⚠️</div>
                <h3 style="color: #ef4444; margin-bottom: 8px; font-weight: 700;">Error Loading Coins</h3>
                <p style="margin: 0 0 16px 0; font-size: 0.9rem; color: #b8c6db;">${this.sanitizeString(message)}</p>
                <button 
                    onclick="window.location.reload()" 
                    style="
                        padding: 8px 16px;
                        background: rgba(239,68,68,.2);
                        border: 1px solid rgba(239,68,68,.4);
                        border-radius: 8px;
                        color: #ef4444;
                        cursor: pointer;
                        font-weight: 600;
                        transition: all 0.3s ease;
                    "
                >
                    🔄 Retry
                </button>
            </div>
        `;
    }

    // Utility methods
    private formatPrice(price: number): string {
        if (price >= 1000) return price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        if (price >= 1) return price.toFixed(2);
        if (price >= 0.01) return price.toFixed(4);
        return price.toFixed(6);
    }

    private formatMarketCap(marketCap: number): string {
        if (marketCap >= 1e12) return `${(marketCap / 1e12).toFixed(2)}T`;
        if (marketCap >= 1e9) return `${(marketCap / 1e9).toFixed(1)}B`;
        if (marketCap >= 1e6) return `${(marketCap / 1e6).toFixed(0)}M`;
        return `${(marketCap / 1e3).toFixed(0)}K`;
    }

    private formatVolume(volume: number): string {
        if (volume >= 1e9) return `${(volume / 1e9).toFixed(1)}B`;
        if (volume >= 1e6) return `${(volume / 1e6).toFixed(0)}M`;
        return `${(volume / 1e3).toFixed(0)}K`;
    }

    private sanitizeString(str: string): string {
        return str.replace(/[<>'"&]/g, (char) => {
            switch (char) {
                case '<': return '&lt;';
                case '>': return '&gt;';
                case '"': return '&quot;';
                case "'": return '&#39;';
                case '&': return '&amp;';
                default: return char;
            }
        });
    }

    // Public getters for external access
    get currentFilterType(): string {
        return this.currentFilter;
    }

    get currentSortType(): string {
        return this.currentSort;
    }

    get totalCoins(): number {
        return this.coins.length;
    }

    get filteredCoinsCount(): number {
        return this.filteredCoins.length;
    }

    get displayedCoinsCount(): number {
        return Math.min(this.maxDisplayCoins, this.filteredCoins.length);
    }

    // Cleanup method
    destroy(): void {
        if (this.container) {
            this.container.innerHTML = '';
        }
        this.coins = [];
        this.filteredCoins = [];
        this.onCoinClickCallback = undefined;
        this.onLoadMoreCallback = undefined;
        
        console.log('🧹 CoinList component destroyed');
    }
}

// Add required animations to page
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    @keyframes cardFadeOut {
        0% { opacity: 1; }
        100% { opacity: 0; pointer-events: none; }
    }
    
    .coin-card:hover {
        transform: translateY(-2px) !important;
    }
    
    .coin-price {
        transition: color 0.3s ease;
    }
    
    .coin-change {
        transition: color 0.3s ease;
    }
`;

// Only add style if not already present
if (!document.querySelector('#coinlist-styles')) {
    style.id = 'coinlist-styles';
    document.head.appendChild(style);
}

// Export the class as default
export default CoinList;