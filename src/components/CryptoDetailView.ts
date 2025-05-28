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

export class CryptoDetailView {
    private coinData: CoinData;
    private containerId: string;

    constructor(coinData: CoinData, containerId: string = 'crypto-detail-modal') {
        console.log('🔍 CryptoDetailView: Initializing with data:', coinData);
        
        if (!coinData) {
            console.error('❌ CryptoDetailView: No coin data provided');
            throw new Error('Coin data is required');
        }

        if (!coinData.symbol || !coinData.name) {
            console.error('❌ CryptoDetailView: Invalid coin data - missing required fields');
            throw new Error('Invalid coin data - symbol and name are required');
        }

        this.coinData = coinData;
        this.containerId = containerId;
        
        console.log('✅ CryptoDetailView: Initialized successfully for', this.coinData.symbol);
    }

    render(): string {
        try {
            console.log('🎨 CryptoDetailView: Rendering detail view for', this.coinData.symbol);
            
            const isPositive = this.coinData.percent_change_24h > 0;
            const changeColor = isPositive ? '#10b981' : '#ef4444';
            const changeIcon = isPositive ? '📈' : '📉';
            
            const detailHTML = `
                <div class="crypto-detail-overlay" id="${this.containerId}">
                    <div class="crypto-detail-container">
                        ${this.renderHeader()}
                        ${this.renderPriceSection()}
                        ${this.renderStatsGrid()}
                        ${this.renderTechnicalIndicators()}
                        ${this.renderPriceChart()}
                        ${this.renderMarketAnalysis()}
                        ${this.renderActionButtons()}
                    </div>
                </div>
            `;

            console.log('✅ CryptoDetailView: Render completed successfully');
            return detailHTML;

        } catch (error) {
            console.error('❌ CryptoDetailView: Error during render:', error);
            return this.renderErrorState('Failed to render coin details');
        }
    }

    private renderHeader(): string {
        try {
            return `
                <div class="detail-header">
                    <div class="header-left">
                        <div class="coin-info">
                            <h1 class="coin-name">${this.coinData.name}</h1>
                            <span class="coin-symbol">${this.coinData.symbol}</span>
                            <span class="coin-rank">#${this.coinData.rank}</span>
                        </div>
                    </div>
                    <div class="header-right">
                        <button class="close-btn" onclick="this.closest('.crypto-detail-overlay').remove()">
                            <span>✕</span>
                        </button>
                    </div>
                </div>
            `;
        } catch (error) {
            console.error('❌ CryptoDetailView: Error rendering header:', error);
            return '<div class="detail-header">Error loading header</div>';
        }
    }

    private renderPriceSection(): string {
        try {
            const isPositive = this.coinData.percent_change_24h > 0;
            const changeColor = isPositive ? '#10b981' : '#ef4444';
            const changeIcon = isPositive ? '📈' : '📉';

            return `
                <div class="price-section">
                    <div class="current-price">
                        <span class="price-label">Current Price</span>
                        <span class="price-value">$${this.formatPrice(this.coinData.price)}</span>
                    </div>
                    <div class="price-change">
                        <span class="change-icon">${changeIcon}</span>
                        <span class="change-value" style="color: ${changeColor}">
                            ${isPositive ? '+' : ''}${this.coinData.percent_change_24h.toFixed(2)}%
                        </span>
                        <span class="change-period">24h</span>
                    </div>
                    ${this.coinData.percent_change_7d !== undefined ? `
                        <div class="price-change-7d">
                            <span class="change-label">7d:</span>
                            <span class="change-value" style="color: ${this.coinData.percent_change_7d > 0 ? '#10b981' : '#ef4444'}">
                                ${this.coinData.percent_change_7d > 0 ? '+' : ''}${this.coinData.percent_change_7d.toFixed(2)}%
                            </span>
                        </div>
                    ` : ''}
                </div>
            `;
        } catch (error) {
            console.error('❌ CryptoDetailView: Error rendering price section:', error);
            return '<div class="price-section">Error loading price data</div>';
        }
    }

    private renderStatsGrid(): string {
        try {
            return `
                <div class="stats-grid">
                    <div class="stat-item">
                        <span class="stat-label">Market Cap</span>
                        <span class="stat-value">$${this.formatMarketCap(this.coinData.market_cap)}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">24h Volume</span>
                        <span class="stat-value">$${this.formatVolume(this.coinData.volume_24h)}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Circulating Supply</span>
                        <span class="stat-value">${this.formatSupply(this.coinData.circulating_supply)} ${this.coinData.symbol}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">Max Supply</span>
                        <span class="stat-value">${this.coinData.max_supply ? this.formatSupply(this.coinData.max_supply) : 'N/A'} ${this.coinData.max_supply ? this.coinData.symbol : ''}</span>
                    </div>
                    ${this.coinData.market_dominance ? `
                        <div class="stat-item">
                            <span class="stat-label">Market Dominance</span>
                            <span class="stat-value">${this.coinData.market_dominance.toFixed(2)}%</span>
                        </div>
                    ` : ''}
                    ${this.coinData.volatility_score ? `
                        <div class="stat-item">
                            <span class="stat-label">Volatility Score</span>
                            <span class="stat-value">${this.coinData.volatility_score.toFixed(1)}/10</span>
                        </div>
                    ` : ''}
                </div>
            `;
        } catch (error) {
            console.error('❌ CryptoDetailView: Error rendering stats grid:', error);
            return '<div class="stats-grid">Error loading statistics</div>';
        }
    }

    private renderTechnicalIndicators(): string {
        try {
            if (!this.coinData.rsi && !this.coinData.moving_avg_50 && !this.coinData.support_level) {
                return '';
            }

            return `
                <div class="technical-section">
                    <h3 class="section-title">Technical Indicators</h3>
                    <div class="technical-grid">
                        ${this.coinData.rsi ? `
                            <div class="technical-item">
                                <span class="tech-label">RSI (14)</span>
                                <span class="tech-value">${this.coinData.rsi.toFixed(1)}</span>
                                <div class="rsi-indicator">
                                    <div class="rsi-bar" style="width: ${this.coinData.rsi}%; background: ${this.getRSIColor(this.coinData.rsi)}"></div>
                                </div>
                            </div>
                        ` : ''}
                        ${this.coinData.moving_avg_50 ? `
                            <div class="technical-item">
                                <span class="tech-label">MA 50</span>
                                <span class="tech-value">$${this.formatPrice(this.coinData.moving_avg_50)}</span>
                            </div>
                        ` : ''}
                        ${this.coinData.moving_avg_200 ? `
                            <div class="technical-item">
                                <span class="tech-label">MA 200</span>
                                <span class="tech-value">$${this.formatPrice(this.coinData.moving_avg_200)}</span>
                            </div>
                        ` : ''}
                        ${this.coinData.support_level ? `
                            <div class="technical-item">
                                <span class="tech-label">Support</span>
                                <span class="tech-value">$${this.formatPrice(this.coinData.support_level)}</span>
                            </div>
                        ` : ''}
                        ${this.coinData.resistance_level ? `
                            <div class="technical-item">
                                <span class="tech-label">Resistance</span>
                                <span class="tech-value">$${this.formatPrice(this.coinData.resistance_level)}</span>
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
        } catch (error) {
            console.error('❌ CryptoDetailView: Error rendering technical indicators:', error);
            return '<div class="technical-section">Error loading technical indicators</div>';
        }
    }

    private renderPriceChart(): string {
        try {
            if (!this.coinData.price_history || this.coinData.price_history.length === 0) {
                return `
                    <div class="chart-section">
                        <h3 class="section-title">Price Chart</h3>
                        <div class="chart-placeholder">
                            <span>📊 No chart data available</span>
                        </div>
                    </div>
                `;
            }

            const chartColor = this.coinData.percent_change_24h > 0 ? '#10b981' : '#ef4444';
            const chart = new PriceChart(
                this.coinData.price_history,
                this.coinData.price_history.map((_, i) => `${i + 1}h`),
                { width: 600, height: 200, color: chartColor }
            );

            return `
                <div class="chart-section">
                    <h3 class="section-title">Price Chart (24h)</h3>
                    <div class="chart-container">
                        ${chart.render('detail-chart')}
                    </div>
                </div>
            `;
        } catch (error) {
            console.error('❌ CryptoDetailView: Error rendering price chart:', error);
            return `
                <div class="chart-section">
                    <h3 class="section-title">Price Chart</h3>
                    <div class="chart-error">Error loading chart</div>
                </div>
            `;
        }
    }

    private renderMarketAnalysis(): string {
        try {
            return `
                <div class="analysis-section">
                    <h3 class="section-title">Market Analysis</h3>
                    <div class="analysis-grid">
                        ${this.coinData.fear_greed_index ? `
                            <div class="analysis-item">
                                <span class="analysis-label">Fear & Greed Index</span>
                                <span class="analysis-value">${this.coinData.fear_greed_index}/100</span>
                                <div class="sentiment-bar">
                                    <div class="sentiment-fill" style="width: ${this.coinData.fear_greed_index}%; background: ${this.getFearGreedColor(this.coinData.fear_greed_index)}"></div>
                                </div>
                            </div>
                        ` : ''}
                        ${this.coinData.social_sentiment ? `
                            <div class="analysis-item">
                                <span class="analysis-label">Social Sentiment</span>
                                <span class="analysis-value">${(this.coinData.social_sentiment * 100).toFixed(0)}%</span>
                                <div class="sentiment-indicator ${this.coinData.social_sentiment > 0.6 ? 'positive' : this.coinData.social_sentiment < 0.4 ? 'negative' : 'neutral'}">
                                    ${this.coinData.social_sentiment > 0.6 ? '😊' : this.coinData.social_sentiment < 0.4 ? '😟' : '😐'}
                                </div>
                            </div>
                        ` : ''}
                        ${this.coinData.correlation_btc ? `
                            <div class="analysis-item">
                                <span class="analysis-label">BTC Correlation</span>
                                <span class="analysis-value">${this.coinData.correlation_btc.toFixed(2)}</span>
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
        } catch (error) {
            console.error('❌ CryptoDetailView: Error rendering market analysis:', error);
            return '<div class="analysis-section">Error loading market analysis</div>';
        }
    }

    private renderActionButtons(): string {
        try {
            return `
                <div class="action-buttons">
                    <button class="action-btn primary" onclick="this.addToWatchlist('${this.coinData.symbol}')">
                        ⭐ Add to Watchlist
                    </button>
                    <button class="action-btn secondary" onclick="this.shareDetails('${this.coinData.symbol}')">
                        📤 Share
                    </button>
                    <button class="action-btn secondary" onclick="this.exportData('${this.coinData.symbol}')">
                        📊 Export Data
                    </button>
                </div>
            `;
        } catch (error) {
            console.error('❌ CryptoDetailView: Error rendering action buttons:', error);
            return '<div class="action-buttons">Error loading actions</div>';
        }
    }

    private renderErrorState(message: string): string {
        return `
            <div class="crypto-detail-overlay error-state" id="${this.containerId}">
                <div class="crypto-detail-container">
                    <div class="error-content">
                        <div class="error-icon">⚠️</div>
                        <h2 class="error-title">Error Loading Details</h2>
                        <p class="error-message">${message}</p>
                        <button class="error-close-btn" onclick="this.closest('.crypto-detail-overlay').remove()">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    private formatPrice(price: number): string {
        try {
            if (typeof price !== 'number' || isNaN(price)) {
                console.warn('⚠️ CryptoDetailView: Invalid price value:', price);
                return '0.00';
            }

            if (price >= 1000) return price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            if (price >= 1) return price.toFixed(2);
            if (price >= 0.01) return price.toFixed(4);
            return price.toFixed(8);
        } catch (error) {
            console.error('❌ CryptoDetailView: Error formatting price:', error);
            return '0.00';
        }
    }

    private formatMarketCap(marketCap: number): string {
        try {
            if (typeof marketCap !== 'number' || isNaN(marketCap)) {
                console.warn('⚠️ CryptoDetailView: Invalid market cap value:', marketCap);
                return '0';
            }

            if (marketCap >= 1e12) return `${(marketCap / 1e12).toFixed(2)}T`;
            if (marketCap >= 1e9) return `${(marketCap / 1e9).toFixed(1)}B`;
            if (marketCap >= 1e6) return `${(marketCap / 1e6).toFixed(0)}M`;
            return `${(marketCap / 1e3).toFixed(0)}K`;
        } catch (error) {
            console.error('❌ CryptoDetailView: Error formatting market cap:', error);
            return '0';
        }
    }

    private formatVolume(volume: number): string {
        try {
            if (typeof volume !== 'number' || isNaN(volume)) {
                console.warn('⚠️ CryptoDetailView: Invalid volume value:', volume);
                return '0';
            }

            if (volume >= 1e9) return `${(volume / 1e9).toFixed(1)}B`;
            if (volume >= 1e6) return `${(volume / 1e6).toFixed(0)}M`;
            return `${(volume / 1e3).toFixed(0)}K`;
        } catch (error) {
            console.error('❌ CryptoDetailView: Error formatting volume:', error);
            return '0';
        }
    }

    private formatSupply(supply: number): string {
        try {
            if (typeof supply !== 'number' || isNaN(supply)) {
                console.warn('⚠️ CryptoDetailView: Invalid supply value:', supply);
                return '0';
            }

            if (supply >= 1e9) return `${(supply / 1e9).toFixed(1)}B`;
            if (supply >= 1e6) return `${(supply / 1e6).toFixed(1)}M`;
            if (supply >= 1e3) return `${(supply / 1e3).toFixed(1)}K`;
            return supply.toFixed(0);
        } catch (error) {
            console.error('❌ CryptoDetailView: Error formatting supply:', error);
            return '0';
        }
    }

    private getRSIColor(rsi: number): string {
        if (rsi > 70) return '#ef4444'; // Overbought - red
        if (rsi < 30) return '#10b981'; // Oversold - green
        return '#3b82f6'; // Neutral - blue
    }

    private getFearGreedColor(index: number): string {
        if (index > 75) return '#ef4444'; // Extreme greed - red
        if (index > 55) return '#f59e0b'; // Greed - orange
        if (index > 45) return '#eab308'; // Neutral - yellow
        if (index > 25) return '#22c55e'; // Fear - light green
        return '#10b981'; // Extreme fear - green
    }

    // Static method to show detail view
    static show(coinData: CoinData): void {
        try {
            console.log('🚀 CryptoDetailView: Showing detail view for', coinData.symbol);
            
            // Remove existing detail view
            const existing = document.getElementById('crypto-detail-modal');
            if (existing) {
                existing.remove();
            }

            const detailView = new CryptoDetailView(coinData, 'crypto-detail-modal');
            const html = detailView.render();
            
            // Add CSS if not already present
            if (!document.getElementById('crypto-detail-styles')) {
                detailView.addStyles();
            }
            
            document.body.insertAdjacentHTML('beforeend', html);
            
            // Add event listeners
            detailView.addEventListeners();
            
            console.log('✅ CryptoDetailView: Detail view shown successfully');
        } catch (error) {
            console.error('❌ CryptoDetailView: Error showing detail view:', error);
        }
    }

    private addStyles(): void {
        const styles = `
            <style id="crypto-detail-styles">
                .crypto-detail-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.8);
                    backdrop-filter: blur(8px);
                    z-index: 10000;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    animation: fadeIn 0.3s ease;
                }

                .crypto-detail-container {
                    background: rgba(30, 35, 50, 0.95);
                    backdrop-filter: blur(30px);
                    border: 1px solid rgba(255, 255, 255, 0.15);
                    border-radius: 24px;
                    padding: 32px;
                    max-width: 800px;
                    max-height: 90vh;
                    overflow-y: auto;
                    margin: 20px;
                    color: white;
                    transform: scale(0.9);
                    animation: scaleIn 0.3s ease forwards;
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes scaleIn {
                    to { transform: scale(1); }
                }

                .detail-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 24px;
                    padding-bottom: 16px;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                }

                .coin-name {
                    font-size: 2rem;
                    font-weight: 800;
                    margin: 0;
                    background: linear-gradient(135deg, #ffffff, #00d4ff);
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .coin-symbol {
                    background: rgba(0, 212, 255, 0.2);
                    color: #00d4ff;
                    padding: 4px 12px;
                    border-radius: 12px;
                    font-weight: 700;
                    margin: 0 8px;
                }

                .coin-rank {
                    background: rgba(255, 255, 255, 0.1);
                    color: #b8c6db;
                    padding: 4px 12px;
                    border-radius: 12px;
                    font-weight: 600;
                }

                .close-btn {
                    background: rgba(239, 68, 68, 0.2);
                    border: 1px solid rgba(239, 68, 68, 0.3);
                    color: #ef4444;
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    cursor: pointer;
                    font-size: 1.2rem;
                    transition: all 0.3s ease;
                }

                .close-btn:hover {
                    background: rgba(239, 68, 68, 0.4);
                    transform: scale(1.1);
                }

                .price-section {
                    display: flex;
                    align-items: center;
                    gap: 24px;
                    margin-bottom: 32px;
                    padding: 24px;
                    background: rgba(0, 0, 0, 0.2);
                    border-radius: 16px;
                    flex-wrap: wrap;
                }

                .price-value {
                    font-size: 2.5rem;
                    font-weight: 900;
                    font-family: 'JetBrains Mono', monospace;
                    color: #00d4ff;
                }

                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 16px;
                    margin-bottom: 32px;
                }

                .stat-item {
                    background: rgba(0, 0, 0, 0.2);
                    padding: 16px;
                    border-radius: 12px;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                .stat-label {
                    color: #b8c6db;
                    font-size: 0.9rem;
                    font-weight: 600;
                }

                .stat-value {
                    color: #ffffff;
                    font-weight: 700;
                    font-family: 'JetBrains Mono', monospace;
                }

                .section-title {
                    color: #00d4ff;
                    font-size: 1.3rem;
                    font-weight: 800;
                    margin-bottom: 16px;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                .technical-grid, .analysis-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                    gap: 16px;
                    margin-bottom: 32px;
                }

                .technical-item, .analysis-item {
                    background: rgba(0, 0, 0, 0.2);
                    padding: 16px;
                    border-radius: 12px;
                    text-align: center;
                }

                .tech-label, .analysis-label {
                    display: block;
                    color: #b8c6db;
                    font-size: 0.8rem;
                    font-weight: 600;
                    margin-bottom: 8px;
                }

                .tech-value, .analysis-value {
                    color: #00d4ff;
                    font-weight: 700;
                    font-family: 'JetBrains Mono', monospace;
                }

                .rsi-indicator {
                    width: 100%;
                    height: 6px;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 3px;
                    margin-top: 8px;
                    overflow: hidden;
                }

                .rsi-bar {
                    height: 100%;
                    border-radius: 3px;
                    transition: width 0.3s ease;
                }

                .chart-container {
                    background: rgba(0, 0, 0, 0.2);
                    border-radius: 16px;
                    padding: 16px;
                    margin-bottom: 32px;
                }

                .chart-placeholder, .chart-error {
                    height: 200px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #8b97a3;
                    font-size: 1.1rem;
                }

                .action-buttons {
                    display: flex;
                    gap: 12px;
                    justify-content: center;
                    flex-wrap: wrap;
                }

                .action-btn {
                    padding: 12px 24px;
                    border-radius: 12px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    border: none;
                }

                .action-btn.primary {
                    background: linear-gradient(135deg, #4facfe, #00f2fe);
                    color: white;
                }

                .action-btn.secondary {
                    background: rgba(255, 255, 255, 0.1);
                    color: #ffffff;
                    border: 1px solid rgba(255, 255, 255, 0.15);
                }

                .action-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
                }

                .error-content {
                    text-align: center;
                    padding: 40px;
                }

                .error-icon {
                    font-size: 3rem;
                    margin-bottom: 16px;
                }

                .error-title {
                    color: #ef4444;
                    font-size: 1.5rem;
                    margin-bottom: 8px;
                }

                .error-message {
                    color: #b8c6db;
                    margin-bottom: 24px;
                }

                .error-close-btn {
                    background: rgba(239, 68, 68, 0.2);
                    color: #ef4444;
                    border: 1px solid rgba(239, 68, 68, 0.3);
                    padding: 12px 24px;
                    border-radius: 12px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .error-close-btn:hover {
                    background: rgba(239, 68, 68, 0.4);
                }

                @media (max-width: 768px) {
                    .crypto-detail-container {
                        margin: 10px;
                        padding: 20px;
                        max-height: 95vh;
                    }

                    .price-section {
                        flex-direction: column;
                        align-items: center;
                        text-align: center;
                    }

                    .stats-grid {
                        grid-template-columns: 1fr;
                    }

                    .action-buttons {
                        flex-direction: column;
                    }
                }
            </style>
        `;
        document.head.insertAdjacentHTML('beforeend', styles);
    }

    private addEventListeners(): void {
        try {
            // Add keyboard escape listener
            const handleEscape = (e: KeyboardEvent) => {
                if (e.key === 'Escape') {
                    const modal = document.getElementById(this.containerId);
                    if (modal) {
                        modal.remove();
                        document.removeEventListener('keydown', handleEscape);
                    }
                }
            };
            document.addEventListener('keydown', handleEscape);

            // Add click outside to close
            const modal = document.getElementById(this.containerId);
            if (modal) {
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) {
                        modal.remove();
                    }
                });
            }

            console.log('✅ CryptoDetailView: Event listeners added');
        } catch (error) {
            console.error('❌ CryptoDetailView: Error adding event listeners:', error);
        }
    }
}

// Global functions for action buttons
(window as any).addToWatchlist = (symbol: string) => {
    console.log('⭐ Adding to watchlist:', symbol);
    // Implement watchlist functionality
};

(window as any).shareDetails = (symbol: string) => {
    console.log('📤 Sharing details for:', symbol);
    // Implement share functionality
};

(window as any).exportData = (symbol: string) => {
    console.log('📊 Exporting data for:', symbol);
    // Implement export functionality
};
