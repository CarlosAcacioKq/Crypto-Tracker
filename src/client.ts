// Modern Cryptocurrency Dashboard - High Performance Optimized

console.log('🚀 CryptoTracker Loading...');

// Immediate performance optimizations
const PERFORMANCE_CONFIG = {
    MAX_COINS_INITIAL: 12,
    MAX_COINS_MOBILE: 8,
    RENDER_BATCH_SIZE: 4,
    ANIMATION_DURATION: 150,
    UPDATE_THROTTLE: 1000
};

// Ultra-lightweight critical CSS injection
function initializeCriticalCSS() {
    const style = document.createElement('style');
    style.textContent = `
        *{box-sizing:border-box;margin:0;padding:0}
        body{font-family:-apple-system,BlinkMacSystemFont,sans-serif!important;background:#0c0c0c!important;color:#fff!important;line-height:1.4!important;min-height:100vh!important}
        .app-header{background:rgba(255,255,255,.05)!important;backdrop-filter:blur(10px)!important;border-bottom:1px solid rgba(255,255,255,.1)!important;padding:16px 0!important;position:sticky!important;top:0!important;z-index:1000!important}
        .header-content{max-width:1400px!important;margin:0 auto!important;padding:0 20px!important;display:flex!important;justify-content:space-between!important;align-items:center!important;gap:16px!important}
        .app-title{color:#fff!important;font-size:1.8rem!important;font-weight:800!important;margin:0!important;display:flex!important;align-items:center!important;gap:8px!important}
        .crypto-icon{font-size:2rem!important;color:#00d4ff!important}
        .version{font-size:.7rem!important;background:#667eea!important;color:#fff!important;padding:4px 8px!important;border-radius:8px!important;font-weight:600!important}
        .header-actions{display:flex!important;gap:8px!important;align-items:center!important}
        .header-btn,.update-timer{background:rgba(255,255,255,.08)!important;color:#fff!important;border:1px solid rgba(255,255,255,.1)!important;padding:8px 12px!important;border-radius:12px!important;font-weight:600!important;font-size:.8rem!important;cursor:pointer!important;transition:all .15s ease!important}
        .header-btn:hover{background:rgba(255,255,255,.12)!important;color:#00d4ff!important}
        .update-timer{cursor:default!important;font-family:monospace!important}
        .countdown-display{color:#00d4ff!important;font-weight:700!important;min-width:28px!important;text-align:center!important}
        .countdown-display.warning{color:#f59e0b!important}
        .countdown-display.critical{color:#ef4444!important}
        .app-main{max-width:1400px!important;margin:0 auto!important;padding:20px!important}
        .market-overview{background:rgba(255,255,255,.05)!important;backdrop-filter:blur(10px)!important;border:1px solid rgba(255,255,255,.1)!important;border-radius:16px!important;padding:20px!important;margin-bottom:20px!important}
        .overview-header{display:flex!important;justify-content:space-between!important;align-items:center!important;margin-bottom:16px!important;gap:16px!important}
        .overview-title{color:#fff!important;font-size:1.4rem!important;font-weight:700!important;margin:0!important}
        .last-updated{color:#b8c6db!important;font-size:.8rem!important;font-family:monospace!important}
        .market-stats{display:grid!important;grid-template-columns:repeat(auto-fit,minmax(140px,1fr))!important;gap:12px!important}
        .stat-item{background:rgba(0,0,0,.2)!important;border:1px solid rgba(255,255,255,.1)!important;border-radius:12px!important;padding:12px!important;text-align:center!important;transition:transform .15s ease!important}
        .stat-item:hover{transform:translateY(-1px)!important;background:rgba(0,212,255,.1)!important}
        .stat-label{display:block!important;color:#b8c6db!important;font-size:.7rem!important;font-weight:600!important;text-transform:uppercase!important;margin-bottom:4px!important}
        .stat-value{color:#00d4ff!important;font-size:1rem!important;font-weight:700!important;font-family:monospace!important}
        .coin-list{display:grid!important;grid-template-columns:repeat(auto-fill,minmax(320px,1fr))!important;gap:16px!important}
        .coin-card{background:rgba(255,255,255,.05)!important;backdrop-filter:blur(10px)!important;border:1px solid rgba(255,255,255,.1)!important;border-radius:16px!important;padding:16px!important;cursor:pointer!important;transition:all .15s ease!important;color:#fff!important;min-height:200px!important;display:flex!important;flex-direction:column!important;justify-content:space-between!important}
        .coin-card:hover{transform:translateY(-2px)!important;border-color:rgba(0,212,255,.3)!important;box-shadow:0 4px 20px rgba(0,0,0,.3)!important}
        .loading-spinner{width:40px!important;height:40px!important;border:3px solid rgba(0,212,255,.2)!important;border-top:3px solid #00d4ff!important;border-radius:50%!important;animation:spin .8s linear infinite!important;margin:0 auto 16px!important}
        @keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
        .market-analysis-bar{background:rgba(15,23,42,.4)!important;backdrop-filter:blur(10px)!important;border:1px solid rgba(148,163,184,.2)!important;border-radius:16px!important;padding:20px!important;margin:20px 0!important}
        .analysis-label{color:#00d4ff!important;font-size:.9rem!important;font-weight:700!important;margin-bottom:12px!important;text-transform:uppercase!important}
        .analysis-buttons{display:flex!important;gap:8px!important;flex-wrap:wrap!important;margin-bottom:16px!important}
        .analysis-btn{background:rgba(30,35,50,.6)!important;color:#b8c6db!important;border:1px solid rgba(148,163,184,.2)!important;border-radius:12px!important;padding:8px 12px!important;font-size:.7rem!important;font-weight:600!important;cursor:pointer!important;transition:all .15s ease!important;text-transform:uppercase!important}
        .analysis-btn:hover{background:rgba(0,212,255,.1)!important;color:#00d4ff!important;border-color:rgba(0,212,255,.3)!important}
        .analysis-btn.active{background:#4facfe!important;color:#fff!important;border-color:rgba(0,212,255,.6)!important}
        .sort-select{background:rgba(16,185,129,.1)!important;color:#fff!important;border:1px solid rgba(255,255,255,.15)!important;padding:8px 16px!important;border-radius:12px!important;font-size:.8rem!important;font-weight:600!important;cursor:pointer!important;transition:all .15s ease;min-width:200px!important;appearance:none!important;outline:none!important}
        .sort-select:hover{border-color:rgba(16,185,129,.4)!important;color:rgba(16,185,129,.9)!important}
        @media (max-width:768px){
            .header-content{flex-direction:column!important;padding:0 16px!important}
            .app-title{font-size:1.5rem!important}
            .app-main{padding:16px!important}
            .coin-list{grid-template-columns:1fr!important;gap:12px!important}
            .coin-card{min-height:160px!important;padding:12px!important}
            .market-stats{grid-template-columns:repeat(2,1fr)!important;gap:8px!important}
            .analysis-buttons{flex-direction:column!important}
            .analysis-btn{width:100%!important;text-align:center!important}
            .sort-select{min-width:100%!important}
        }
        @media (max-width:480px){
            .market-stats{grid-template-columns:1fr!important}
            .overview-header{flex-direction:column!important;text-align:center!important}
        }
    `;
    document.head.appendChild(style);
}

// Initialize critical styles immediately
initializeCriticalCSS();

// High-performance application class
class CryptoApp {
    private coins: any[] = [];
    private currentFilter = 'all';
    private currentSort = 'rank';
    private countdownTimer: number = 60;
    private countdownInterval: any;
    private isLoading = false;
    private lastUpdateTime = 0;
    private renderQueue: any[] = [];
    private isRendering = false;
    private displayedCoinsCount = 0; // Track how many coins are currently displayed
    private maxDisplayCoins = PERFORMANCE_CONFIG.MAX_COINS_INITIAL; // Dynamic max display count

    async init() {
        console.log('🚀 Initializing High-Performance Crypto App...');
        
        // Immediate performance setup
        this.setupPerformanceOptimizations();
        
        // Load data asynchronously
        this.loadData();
        this.startCountdown();
        
        console.log('✅ App initialized successfully');
    }

    private setupPerformanceOptimizations() {
        // Passive event listeners for better performance
        document.addEventListener('scroll', this.throttle(() => {
            // Minimal scroll handling
        }, 16), { passive: true });

        // Optimized resize handling
        let resizeTimeout: any;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                if (this.coins.length > 0) {
                    this.renderCoins();
                }
            }, 150);
        }, { passive: true });

        // Preload critical resources
        this.preloadResources();
    }

    private preloadResources() {
        // Preload essential fonts
        const fontLink = document.createElement('link');
        fontLink.rel = 'preload';
        fontLink.href = 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2';
        fontLink.as = 'font';
        fontLink.type = 'font/woff2';
        fontLink.crossOrigin = 'anonymous';
        document.head.appendChild(fontLink);
    }

    private throttle(func: Function, limit: number) {
        let inThrottle: boolean;
        return (...args: any[]) => {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }

    async loadData() {
        if (this.isLoading) return;
        this.isLoading = true;

        const container = document.getElementById('coin-list-container');
        const statusEl = document.getElementById('status');
        
        if (!container || !statusEl) {
            this.isLoading = false;
            return;
        }

        try {
            // Show minimal loading state
            if (this.coins.length === 0) {
                statusEl.style.display = 'block';
                statusEl.innerHTML = `
                    <div style="text-align:center;padding:40px 20px;color:#b8c6db">
                        <div class="loading-spinner"></div>
                        <h3 style="color:#fff;font-size:1.2rem;margin:16px 0;font-weight:700">Loading Market Data</h3>
                        <p style="opacity:.8;font-size:.9rem">Fetching live prices...</p>
                    </div>
                `;
            }

            // Use AbortController for request timeout
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 5000);

            const response = await fetch('/api/crypto-data', { 
                signal: controller.signal,
                headers: {
                    'Accept': 'application/json',
                    'Cache-Control': 'no-cache'
                }
            });
            
            clearTimeout(timeoutId);
            
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            
            const data = await response.json();
            this.coins = data.data || [];
            this.lastUpdateTime = Date.now();
            
            // Batch DOM updates
            this.batchUpdate(() => {
                this.updateMarketStats();
                this.renderCoins();
                this.updateLastUpdated();
                statusEl.style.display = 'none';
            });
            
            console.log('✅ Data loaded:', this.coins.length, 'coins');
            
        } catch (error) {
            console.error('❌ Error loading data:', error);
            statusEl.innerHTML = `
                <div style="text-align:center;padding:40px 20px;color:#ef4444">
                    <div style="font-size:2rem;margin-bottom:12px">⚠️</div>
                    <h3 style="margin-bottom:8px;font-size:1.1rem">Connection Error</h3>
                    <p style="margin-bottom:16px;opacity:.8;font-size:.9rem">Unable to load data</p>
                    <button onclick="location.reload()" style="padding:8px 16px;background:rgba(0,212,255,.2);border:1px solid #00d4ff;border-radius:8px;color:#00d4ff;cursor:pointer;font-weight:600;font-size:.8rem">🔄 Retry</button>
                </div>
            `;
        } finally {
            this.isLoading = false;
        }
    }

    private batchUpdate(callback: Function) {
        if (this.isRendering) return;
        this.isRendering = true;
        
        requestAnimationFrame(() => {
            callback();
            this.isRendering = false;
        });
    }

    updateMarketStats() {
        if (this.coins.length === 0) return;

        const totalMarketCap = this.coins.reduce((sum, coin) => sum + (coin.market_cap || 0), 0);
        const totalVolume = this.coins.reduce((sum, coin) => sum + (coin.volume_24h || 0), 0);
        const btcCoin = this.coins.find(coin => coin.symbol === 'BTC');
        const btcDominance = btcCoin && totalMarketCap > 0 ? 
            ((btcCoin.market_cap / totalMarketCap) * 100).toFixed(1) : '0';

        const positiveCoins = this.coins.filter(coin => coin.percent_change_24h > 0).length;
        const marketSentiment = this.coins.length > 0 ? ((positiveCoins / this.coins.length) * 100).toFixed(0) : '0';

        const elements = {
            'total-market-cap': `$${(totalMarketCap / 1e12).toFixed(2)}T`,
            'total-volume': `$${(totalVolume / 1e9).toFixed(1)}B`,
            'btc-dominance': `${btcDominance}%`,
            'market-sentiment': `${marketSentiment}%`,
            'active-coins': this.coins.length.toString(),
            'trending-up': positiveCoins.toString()
        };

        // Batch DOM updates
        const fragment = document.createDocumentFragment();
        Object.entries(elements).forEach(([id, value]) => {
            const el = document.getElementById(id);
            if (el && el.textContent !== value) {
                el.textContent = value;
            }
        });
    }

    updateLastUpdated() {
        const lastUpdatedEl = document.getElementById('last-updated');
        if (lastUpdatedEl) {
            const now = new Date();
            lastUpdatedEl.textContent = `Updated: ${now.toLocaleTimeString()}`;
        }
    }

    startCountdown() {
        if (this.countdownInterval) {
            clearInterval(this.countdownInterval);
        }

        this.countdownInterval = setInterval(() => {
            this.countdownTimer--;
            const countdownEl = document.getElementById('countdown-display');
            
            if (countdownEl) {
                countdownEl.textContent = `${this.countdownTimer}s`;
                
                // Update classes efficiently
                const baseClass = 'countdown-display';
                if (this.countdownTimer <= 10) {
                    countdownEl.className = `${baseClass} critical`;
                } else if (this.countdownTimer <= 20) {
                    countdownEl.className = `${baseClass} warning`;
                } else {
                    countdownEl.className = baseClass;
                }
            }
            
            if (this.countdownTimer <= 0) {
                this.countdownTimer = 60;
                this.loadData();
            }
        }, 1000);
    }

    renderCoins() {
        const container = document.getElementById('coin-list-container');
        if (!container || this.coins.length === 0) return;

        let filteredCoins = this.filterCoins(this.coins, this.currentFilter);
        filteredCoins = this.sortCoins(filteredCoins, this.currentSort);

        // Enhanced pagination logic
        const isMobile = window.innerWidth < 768;
        const baseMaxCoins = isMobile ? PERFORMANCE_CONFIG.MAX_COINS_MOBILE : PERFORMANCE_CONFIG.MAX_COINS_INITIAL;
        
        // Use displayedCoinsCount for progressive loading
        const coinsToRender = filteredCoins.slice(0, this.maxDisplayCoins);
        const hasMoreCoins = filteredCoins.length > this.maxDisplayCoins;

        // Use DocumentFragment for better performance
        const fragment = document.createDocumentFragment();
        
        // Enhanced info bar with better statistics
        const infoDiv = document.createElement('div');
        infoDiv.style.cssText = 'margin-bottom:16px;padding:12px 16px;background:rgba(0,0,0,.3);border-radius:12px;text-align:center;border:1px solid rgba(255,255,255,.15);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px';
        
        const gainersCount = filteredCoins.filter(coin => coin.percent_change_24h > 0).length;
        const losersCount = filteredCoins.filter(coin => coin.percent_change_24h < 0).length;
        
        infoDiv.innerHTML = `
            <div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap">
                <div style="display:flex;align-items:center;gap:4px">
                    <span style="color:#b8c6db;font-size:.8rem">Showing</span>
                    <span style="color:#00d4ff;font-weight:700;font-size:.9rem">${coinsToRender.length}</span>
                    <span style="color:#b8c6db;font-size:.8rem">of ${filteredCoins.length}</span>
                </div>
                <div style="display:flex;align-items:center;gap:16px">
                    <div style="display:flex;align-items:center;gap:4px">
                        <span style="color:#10b981;font-size:.8rem">📈 ${gainersCount}</span>
                    </div>
                    <div style="display:flex;align-items:center;gap:4px">
                        <span style="color:#ef4444;font-size:.8rem">📉 ${losersCount}</span>
                    </div>
                </div>
            </div>
            ${hasMoreCoins ? `
                <button id="load-more-btn" style="padding:8px 16px;background:linear-gradient(135deg,#00d4ff,#4facfe);border:none;border-radius:8px;color:#fff;cursor:pointer;font-size:.8rem;font-weight:600;transition:all .2s ease;box-shadow:0 2px 8px rgba(0,212,255,.3)">
                    📊 Load More (${filteredCoins.length - this.maxDisplayCoins} remaining)
                </button>
            ` : ''}
        `;
        fragment.appendChild(infoDiv);

        // Create coin list container
        const coinListDiv = document.createElement('div');
        coinListDiv.className = 'coin-list';
        
        // Batch create coin cards with enhanced charts
        coinsToRender.forEach((coin, index) => {
            const cardDiv = document.createElement('div');
            cardDiv.className = 'coin-card';
            cardDiv.onclick = () => this.showDetails(coin.symbol);
            cardDiv.innerHTML = this.createEnhancedCoinCardHTML(coin, index);
            coinListDiv.appendChild(cardDiv);
        });

        fragment.appendChild(coinListDiv);
        
        // Single DOM update
        container.innerHTML = '';
        container.appendChild(fragment);

        // Add event listener for load more button
        const loadMoreBtn = document.getElementById('load-more-btn');
        if (loadMoreBtn) {
            loadMoreBtn.onclick = () => this.loadMoreCoins();
            
            // Add hover effect
            loadMoreBtn.addEventListener('mouseenter', () => {
                loadMoreBtn.style.transform = 'translateY(-2px)';
                loadMoreBtn.style.boxShadow = '0 4px 16px rgba(0,212,255,.5)';
            });
            
            loadMoreBtn.addEventListener('mouseleave', () => {
                loadMoreBtn.style.transform = 'translateY(0)';
                loadMoreBtn.style.boxShadow = '0 2px 8px rgba(0,212,255,.3)';
            });
        }

        // Initialize mini charts after DOM update
        requestAnimationFrame(() => {
            this.initializeMiniCharts(coinsToRender);
        });
    }

    createEnhancedCoinCardHTML(coin: any, index: number): string {
        const isPositive = coin.percent_change_24h > 0;
        const changeIcon = isPositive ? '📈' : '📉';
        const changeColor = isPositive ? '#10b981' : '#ef4444';
        const changeBg = isPositive ? 'rgba(16,185,129,.1)' : 'rgba(239,68,68,.1)';
        const changeBorder = isPositive ? 'rgba(16,185,129,.3)' : 'rgba(239,68,68,.3)';
        
        // Enhanced volatility indicator
        const volatility = coin.volatility_score || 5;
        const volatilityColor = volatility > 7 ? '#ef4444' : volatility > 4 ? '#f59e0b' : '#10b981';
        const volatilityLabel = volatility > 7 ? 'High' : volatility > 4 ? 'Med' : 'Low';
        
        return `
            <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px">
                <div style="flex:1">
                    <h3 style="color:#fff;font-size:1.1rem;font-weight:700;margin:0 0 4px 0;line-height:1.2">${coin.name}</h3>
                    <div style="display:flex;align-items:center;gap:8px">
                        <span style="color:#00d4ff;font-size:.7rem;font-weight:600;background:rgba(0,212,255,.1);padding:2px 6px;border-radius:6px;border:1px solid rgba(0,212,255,.3)">${coin.symbol}</span>
                        <span style="color:${volatilityColor};font-size:.6rem;font-weight:600;background:rgba(${volatilityColor.slice(1)},0.1);padding:1px 4px;border-radius:4px;border:1px solid rgba(${volatilityColor.slice(1)},0.3)">${volatilityLabel}</span>
                    </div>
                </div>
                <div style="background:rgba(255,255,255,.1);color:#b8c6db;font-size:.65rem;font-weight:600;padding:4px 8px;border-radius:8px;border:1px solid rgba(255,255,255,.1)">#${coin.rank}</div>
            </div>

            <div style="color:#fff;font-size:1.4rem;font-weight:800;margin:12px 0;font-family:monospace">
                $${this.formatPrice(coin.price)}
            </div>

            <div style="display:flex;align-items:center;gap:4px;font-weight:600;font-size:.9rem;margin-bottom:12px;padding:4px 8px;border-radius:8px;color:${changeColor};background:${changeBg};border:1px solid ${changeBorder}">
                <span style="font-size:1rem">${changeIcon}</span>
                <span>${isPositive ? '+' : ''}${coin.percent_change_24h.toFixed(2)}%</span>
            </div>

            <!-- Enhanced Mini Chart Section -->
            <div id="mini-chart-${index}" style="height:60px;margin:12px 0;background:rgba(0,0,0,.2);border-radius:8px;padding:8px;position:relative;overflow:hidden">
                <div style="position:absolute;top:4px;left:8px;font-size:.6rem;color:#b8c6db;font-weight:600">7D Trend</div>
                <canvas id="chart-canvas-${index}" width="280" height="44" style="width:100%;height:44px;cursor:pointer"></canvas>
            </div>

            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:auto">
                <div style="background:rgba(0,0,0,.2);border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:8px;text-align:center;transition:all .2s ease" onmouseenter="this.style.background='rgba(0,212,255,.05)'" onmouseleave="this.style.background='rgba(0,0,0,.2)'">
                    <span style="display:block;color:#b8c6db;font-size:.6rem;font-weight:600;text-transform:uppercase;margin-bottom:2px">Market Cap</span>
                    <span style="color:#00d4ff;font-size:.8rem;font-weight:700;font-family:monospace">$${this.formatMarketCap(coin.market_cap)}</span>
                </div>
                <div style="background:rgba(0,0,0,.2);border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:8px;text-align:center;transition:all .2s ease" onmouseenter="this.style.background='rgba(0,212,255,.05)'" onmouseleave="this.style.background='rgba(0,0,0,.2)'">
                    <span style="display:block;color:#b8c6db;font-size:.6rem;font-weight:600;text-transform:uppercase;margin-bottom:2px">Volume</span>
                    <span style="color:#00d4ff;font-size:.8rem;font-weight:700;font-family:monospace">$${this.formatVolume(coin.volume_24h)}</span>
                </div>
            </div>
        `;
    }

    initializeMiniCharts(coins: any[]) {
        coins.forEach((coin, index) => {
            const canvas = document.getElementById(`chart-canvas-${index}`) as HTMLCanvasElement;
            if (!canvas) return;

            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            // Set up high DPI rendering
            const rect = canvas.getBoundingClientRect();
            const dpr = window.devicePixelRatio || 1;
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            ctx.scale(dpr, dpr);

            // Create enhanced mini chart
            this.renderEnhancedMiniChart(ctx, coin, rect.width, rect.height, index);
            
            // Add interactivity
            this.addChartInteractivity(canvas, coin, index);
        });
    }

    renderEnhancedMiniChart(ctx: CanvasRenderingContext2D, coin: any, width: number, height: number, index: number) {
        const priceHistory = coin.price_history || [];
        if (priceHistory.length < 2) return;

        const padding = 4;
        const chartWidth = width - padding * 2;
        const chartHeight = height - padding * 2;

        const min = Math.min(...priceHistory);
        const max = Math.max(...priceHistory);
        const range = max - min;

        if (range === 0) {
            // Draw flat line for stable prices
            ctx.strokeStyle = '#666';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(padding, height / 2);
            ctx.lineTo(width - padding, height / 2);
            ctx.stroke();
            return;
        }

        // Create gradient
        const gradient = ctx.createLinearGradient(0, 0, 0, height);
        const isPositive = coin.percent_change_24h > 0; // Fix: Define isPositive variable
        const primaryColor = isPositive ? '#10b981' : '#ef4444';
        const secondaryColor = isPositive ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)';
        
        gradient.addColorStop(0, primaryColor);
        gradient.addColorStop(1, secondaryColor);

        // Create smooth path
        interface ChartPoint {
            x: number;
            y: number;
        }
        const points: ChartPoint[] = priceHistory.map((price: number, i: number): ChartPoint => ({
            x: padding + (i / (priceHistory.length - 1)) * chartWidth,
            y: padding + (1 - (price - min) / range) * chartHeight
        }));

        // Draw area fill
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(points[0].x, height - padding);
        points.forEach((point: { x: number; y: number }, i: number) => {
            if (i === 0) {
            ctx.lineTo(point.x, point.y);
            } else {
            // Add smooth curves using quadratic curves
            const prevPoint: { x: number; y: number } = points[i - 1];
            const midX: number = (prevPoint.x + point.x) / 2;
            ctx.quadraticCurveTo(prevPoint.x, prevPoint.y, midX, (prevPoint.y + point.y) / 2);
            ctx.quadraticCurveTo(midX, (prevPoint.y + point.y) / 2, point.x, point.y);
            }
        });
        ctx.lineTo(points[points.length - 1].x, height - padding);
        ctx.closePath();
        ctx.fill();

        // Draw line
        ctx.strokeStyle = primaryColor;
        ctx.lineWidth = 2;
        ctx.beginPath();
        interface ChartPoint {
            x: number;
            y: number;
        }
        points.forEach((point: ChartPoint, i: number) => {
            if (i === 0) {
            ctx.moveTo(point.x, point.y);
            } else {
            const prevPoint: ChartPoint = points[i - 1];
            const midX: number = (prevPoint.x + point.x) / 2;
            ctx.quadraticCurveTo(prevPoint.x, prevPoint.y, midX, (prevPoint.y + point.y) / 2);
            ctx.quadraticCurveTo(midX, (prevPoint.y + point.y) / 2, point.x, point.y);
            }
        });
        ctx.stroke();

        // Add data points
        ctx.fillStyle = primaryColor;
        points.forEach((point, i) => {
            if (i === 0 || i === points.length - 1) {
                ctx.beginPath();
                ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
                ctx.fill();
            }
        });

        // Add trend indicator
        const trend = priceHistory[priceHistory.length - 1] > priceHistory[0];
        const trendIcon = trend ? '↗' : '↘';
        const trendColor = trend ? '#10b981' : '#ef4444';
        
        ctx.fillStyle = trendColor;
        ctx.font = '12px Arial';
        ctx.fillText(trendIcon, width - 20, 16);
    }

    filterCoins(coins: any[], filterType: string): any[] {
        switch (filterType) {
            case 'high_momentum': return coins.filter(coin => coin.percent_change_24h > 5);
            case 'oversold': return coins.filter(coin => (coin.rsi || 50) < 30);
            case 'overbought': return coins.filter(coin => (coin.rsi || 50) > 70);
            case 'large_cap': return coins.filter(coin => coin.market_cap > 10e9);
            case 'mid_cap': return coins.filter(coin => coin.market_cap > 1e9 && coin.market_cap <= 10e9);
            case 'small_cap': return coins.filter(coin => coin.market_cap <= 1e9);
            default: return coins;
        }
    }

    sortCoins(coins: any[], sortType: string): any[] {
        const sorted = [...coins];
        switch (sortType) {
            case 'price': return sorted.sort((a, b) => b.price - a.price);
            case 'change': return sorted.sort((a, b) => b.percent_change_24h - a.percent_change_24h);
            case 'volume': return sorted.sort((a, b) => b.volume_24h - a.volume_24h);
            case 'market_cap': return sorted.sort((a, b) => b.market_cap - a.market_cap);
            case 'name': return sorted.sort((a, b) => a.name.localeCompare(b.name));
            default: return sorted.sort((a, b) => a.rank - b.rank);
        }
    }

    filterByAnalysis(type: string) {
        this.currentFilter = type;
        
        // Efficient class updates
        document.querySelectorAll('.analysis-btn').forEach(btn => btn.classList.remove('active'));
        const activeBtn = document.querySelector(`[data-filter="${type}"]`);
        if (activeBtn) activeBtn.classList.add('active');
        
        this.batchUpdate(() => this.renderCoins());
    }

    handleSortChange() {
        const select = document.getElementById('sort-select') as HTMLSelectElement;
        if (select) {
            this.currentSort = select.value;
            this.batchUpdate(() => this.renderCoins());
        }
    }

    addChartInteractivity(canvas: HTMLCanvasElement, coin: any, index: number) {
        let isHovering = false;
        let tooltip: HTMLElement | null = null;

        canvas.addEventListener('mouseenter', () => {
            isHovering = true;
            canvas.style.cursor = 'pointer';
            
            // Create tooltip
            tooltip = document.createElement('div');
            tooltip.style.cssText = `
                position: absolute;
                background: rgba(0,0,0,.9);
                color: #fff;
                padding: 8px 12px;
                border-radius: 6px;
                font-size: 0.75rem;
                pointer-events: none;
                z-index: 1000;
                border: 1px solid rgba(255,255,255,.2);
                box-shadow: 0 4px 12px rgba(0,0,0,.3);
            `;
            
            const priceRange = coin.price_history || [];
            const min = Math.min(...priceRange);
            const max = Math.max(...priceRange);
            const currentPrice = coin.price;
            
            tooltip.innerHTML = `
                <div><strong>${coin.symbol}</strong></div>
                <div>Current: $${this.formatPrice(currentPrice)}</div>
                <div>7D High: $${this.formatPrice(max)}</div>
                <div>7D Low: $${this.formatPrice(min)}</div>
                <div style="color: ${coin.percent_change_24h > 0 ? '#10b981' : '#ef4444'}">
                    24h: ${coin.percent_change_24h > 0 ? '+' : ''}${coin.percent_change_24h.toFixed(2)}%
                </div>
            `;
            
            document.body.appendChild(tooltip);
        });

        canvas.addEventListener('mousemove', (e) => {
            if (tooltip && isHovering) {
                tooltip.style.left = (e.pageX + 10) + 'px';
                tooltip.style.top = (e.pageY - 10) + 'px';
            }
        });

        canvas.addEventListener('mouseleave', () => {
            isHovering = false;
            canvas.style.cursor = 'default';
            
            if (tooltip) {
                document.body.removeChild(tooltip);
                tooltip = null;
            }
        });

        // Click to show details
        canvas.addEventListener('click', () => {
            this.showDetails(coin.symbol);
        });
    }

    loadMoreCoins() {
        console.log('📊 Loading more coins...');
        
        // Increase the display limit
        const increment = window.innerWidth < 768 ? 4 : 8;
        this.maxDisplayCoins += increment;
        
        // Add loading animation
        const loadMoreBtn = document.getElementById('load-more-btn');
        if (loadMoreBtn) {
            const originalText = loadMoreBtn.innerHTML;
            loadMoreBtn.innerHTML = `
                <div style="display:flex;align-items:center;gap:8px">
                    <div style="width:16px;height:16px;border:2px solid rgba(255,255,255,.3);border-top:2px solid #fff;border-radius:50%;animation:spin .8s linear infinite"></div>
                    Loading...
                </div>
            `;
            loadMoreBtn.style.pointerEvents = 'none';
            
            // Simulate loading delay for better UX
            setTimeout(() => {
                this.renderCoins();
                console.log(`✅ Loaded more coins. Now showing ${this.maxDisplayCoins} coins`);
            }, 300);
        }
    }

    // Enhanced chart creation for modal
    private createAdvancedPriceChart(priceHistory: number[], isPositive: boolean): string {
        if (!priceHistory || priceHistory.length === 0) {
            return '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#8b97a3">No price data available</div>';
        }

        const min = Math.min(...priceHistory);
        const max = Math.max(...priceHistory);
        const range = max - min;

        if (range === 0) {
            return '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#8b97a3">Price stable</div>';
        }

        // Generate more sophisticated chart
        const canvasId = `advanced-chart-${Date.now()}`;
        
        // Create canvas element
        setTimeout(() => {
            const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
            if (!canvas) return;

            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            this.renderAdvancedChart(ctx, priceHistory, isPositive, 800, 300);
        }, 100);

        return `
            <div style="position:relative;width:100%;height:100%">
                <canvas id="${canvasId}" width="800" height="300" style="width:100%;height:100%;border-radius:12px;background:rgba(0,0,0,.2)"></canvas>
                <div style="position:absolute;top:8px;right:8px;display:flex;gap:4px">
                    <div style="background:rgba(0,0,0,.6);color:#fff;padding:4px 8px;border-radius:4px;font-size:.7rem">
                        High: $${max.toFixed(2)}
                    </div>
                    <div style="background:rgba(0,0,0,.6);color:#fff;padding:4px 8px;border-radius:4px;font-size:.7rem">
                        Low: $${min.toFixed(2)}
                    </div>
                </div>
            </div>
        `;
    }

    renderAdvancedChart(ctx: CanvasRenderingContext2D, priceHistory: number[], isPositive: boolean, width: number, height: number) {
        const padding = 40;
        const chartWidth = width - padding * 2;
        const chartHeight = height - padding * 2;

        const min = Math.min(...priceHistory);
        const max = Math.max(...priceHistory);
        const range = max - min;

        // Clear canvas
        ctx.clearRect(0, 0, width, height);

        // Draw grid
        ctx.strokeStyle = 'rgba(255,255,255,0.1)';
        ctx.lineWidth = 1;
        
        // Horizontal grid lines
        for (let i = 0; i <= 4; i++) {
            const y = padding + (i / 4) * chartHeight;
            ctx.beginPath();
            ctx.moveTo(padding, y);
            ctx.lineTo(width - padding, y);
            ctx.stroke();
        }

        // Vertical grid lines
        for (let i = 0; i <= 6; i++) {
            const x = padding + (i / 6) * chartWidth;
            ctx.beginPath();
            ctx.moveTo(x, padding);
            ctx.lineTo(x, height - padding);
            ctx.stroke();
        }

        // Create gradient
        const gradient = ctx.createLinearGradient(0, padding, 0, height - padding);
        const primaryColor = isPositive ? '#10b981' : '#ef4444';
        const secondaryColor = isPositive ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)';
        
        gradient.addColorStop(0, primaryColor);
        gradient.addColorStop(1, secondaryColor);

        // Create data points
        const points = priceHistory.map((price, i) => ({
            x: padding + (i / (priceHistory.length - 1)) * chartWidth,
            y: padding + (1 - (price - min) / range) * chartHeight
        }));

        // Draw area fill
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(points[0].x, height - padding);
        points.forEach((point, i) => {
            if (i === 0) {
                ctx.lineTo(point.x, point.y);
            } else {
                ctx.lineTo(point.x, point.y);
            }
        });
        ctx.lineTo(points[points.length - 1].x, height - padding);
        ctx.closePath();
        ctx.fill();

        // Draw main line
        ctx.strokeStyle = primaryColor;
        ctx.lineWidth = 3;
        ctx.beginPath();
        points.forEach((point, i) => {
            if (i === 0) {
                ctx.moveTo(point.x, point.y);
            } else {
                ctx.lineTo(point.x, point.y);
            }
        });
        ctx.stroke();

        // Draw price labels
        ctx.fillStyle = '#b8c6db';
        ctx.font = '12px monospace';
        ctx.textAlign = 'right';
        
        for (let i = 0; i <= 4; i++) {
            const value = max - (i / 4) * range;
            const y = padding + (i / 4) * chartHeight;
            ctx.fillText(`$${value.toFixed(2)}`, padding - 8, y + 4);
        }

        // Draw time labels
        ctx.textAlign = 'center';
        const timeLabels = ['6d ago', '5d ago', '4d ago', '3d ago', '2d ago', '1d ago', 'Now'];
        timeLabels.forEach((label, i) => {
            const x = padding + (i / 6) * chartWidth;
            ctx.fillText(label, x, height - padding + 20);
        });
    }

    private createRSIGauge(rsi: number): string {
        const angle = (rsi / 100) * 180;
        const color = rsi > 70 ? '#ef4444' : rsi < 30 ? '#10b981' : '#00d4ff';
        
        return `
            <svg width="100%" height="80px" viewBox="0 0 100 50">
                <!-- Background arc -->
                <path d="M 10 40 A 30 30 0 0 1 90 40" stroke="rgba(255,255,255,0.2)" stroke-width="4" fill="none"/>
                <!-- RSI arc -->
                <path d="M 10 40 A 30 30 0 0 ${angle > 90 ? 1 : 0} ${10 + 80 * Math.cos((180 - angle) * Math.PI / 180)} ${40 - 30 * Math.sin((180 - angle) * Math.PI / 180)}" 
                      stroke="${color}" stroke-width="4" fill="none"/>
                <!-- Needle -->
                <line x1="50" y1="40" x2="${50 + 25 * Math.cos((180 - angle) * Math.PI / 180)}" y2="${40 - 25 * Math.sin((180 - angle) * Math.PI / 180)}" 
                      stroke="${color}" stroke-width="2"/>
                <circle cx="50" cy="40" r="2" fill="${color}"/>
            </svg>
        `;
    }

    private generateVolumeData(baseVolume: number): number[] {
        return Array.from({ length: 7 }, () => baseVolume * (0.7 + Math.random() * 0.6));
    }

    private generateMarketCapData(baseMarketCap: number): number[] {
        return Array.from({ length: 7 }, () => baseMarketCap * (0.95 + Math.random() * 0.1));
    }

    private getRSIStatus(rsi: number): string {
        if (rsi > 70) return 'Overbought';
        if (rsi < 30) return 'Oversold';
        return 'Neutral';
    }

    private getTechnicalSignal(coin: any): string {
        const rsi = coin.rsi || 50;
        const priceVsMA = coin.price > (coin.moving_avg_50 || coin.price);
        
        if (rsi > 70) return 'SELL';
        if (rsi < 30) return 'BUY';
        if (priceVsMA && coin.percent_change_24h > 0) return 'BUY';
        if (!priceVsMA && coin.percent_change_24h < 0) return 'SELL';
        return 'HOLD';
    }

    private getTechnicalSignalColor(coin: any): string {
        const signal = this.getTechnicalSignal(coin);
        switch (signal) {
            case 'BUY': return '#10b981';
            case 'SELL': return '#ef4444';
            default: return '#f59e0b';
        }
    }

    private getTrendStrength(coin: any): string {
        const volatility = coin.volatility_score || 5;
        if (volatility > 7) return 'Strong';
        if (volatility > 4) return 'Moderate';
        return 'Weak';
    }

    private getSentimentLabel(sentiment: number): string {
        if (sentiment > 0.7) return 'Very Positive';
        if (sentiment > 0.5) return 'Positive';
        if (sentiment > 0.3) return 'Neutral';
        return 'Negative';
    }

    private getFearGreedLabel(fearGreed: number): string {
        if (fearGreed > 75) return 'Extreme Greed';
        if (fearGreed > 55) return 'Greed';
        if (fearGreed > 45) return 'Neutral';
        if (fearGreed > 25) return 'Fear';
        return 'Extreme Fear';
    }

    private getRecommendedAllocation(coin: any): number {
        const marketCap = coin.market_cap;
        if (marketCap > 100e9) return Math.floor(Math.random() * 15 + 10); // 10-25% for large cap
        if (marketCap > 10e9) return Math.floor(Math.random() * 10 + 5);   // 5-15% for mid cap
        return Math.floor(Math.random() * 5 + 1);                         // 1-5% for small cap
    }

    // Additional helper methods for advanced charts...
    private createSupportResistanceChart(coin: any): string {
        const currentPrice = coin.price;
        const support = coin.support_level || currentPrice * 0.9;
        const resistance = coin.resistance_level || currentPrice * 1.1;
        
        return `
            <div style="position:relative;height:100%;background:rgba(0,0,0,.3);border-radius:12px;padding:20px">
                <div style="position:absolute;top:20%;left:0;right:0;height:2px;background:#ef4444;opacity:0.6"></div>
                <div style="position:absolute;top:20%;left:10px;color:#ef4444;font-size:.8rem">Resistance: $${resistance.toFixed(2)}</div>
                
                <div style="position:absolute;top:50%;left:0;right:0;height:3px;background:#00d4ff"></div>
                <div style="position:absolute;top:50%;left:10px;color:#00d4ff;font-size:.9rem;font-weight:700">Current: $${currentPrice.toFixed(2)}</div>
                
                <div style="position:absolute;top:80%;left:0;right:0;height:2px;background:#10b981;opacity:0.6"></div>
                <div style="position:absolute;top:80%;left:10px;color:#10b981;font-size:.8rem">Support: $${support.toFixed(2)}</div>
            </div>
        `;
    }

    private createSentimentGauge(sentiment: number): string {
        return this.createRSIGauge(sentiment * 100);
    }

    private createFearGreedGauge(fearGreed: number): string {
        return this.createRSIGauge(fearGreed);
    }

    private createSentimentTrendChart(coin: any): string {
        const trendData = Array.from({ length: 7 }, () => Math.random() * 100);
        return this.createAdvancedPriceChart(trendData, true);
    }

    private createCorrelationChart(coin: any): string {
        const correlationData = [
            { name: 'BTC', value: coin.correlation_btc || 0.8 },
            { name: 'ETH', value: 0.7 + Math.random() * 0.2 },
            { name: 'Market', value: 0.6 + Math.random() * 0.3 }
        ];

        const bars = correlationData.map((item, index) => {
            const height = Math.abs(item.value) * 60;
            const y = item.value > 0 ? 40 - height : 40;
            const color = item.value > 0 ? '#10b981' : '#ef4444';
            
            return `
                <rect x="${index * 25 + 10}" y="${y}" width="15" height="${height}" fill="${color}" opacity="0.8"/>
                <text x="${index * 25 + 17}" y="95" fill="#b8c6db" font-size="8" text-anchor="middle">${item.name}</text>
                <text x="${index * 25 + 17}" y="${y - 5}" fill="#fff" font-size="6" text-anchor="middle">${item.value.toFixed(2)}</text>
            `;
        }).join('');

        return `
            <svg width="100%" height="100%" viewBox="0 0 100 100">
                <line x1="0" y1="40" x2="100" y2="40" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
                ${bars}
            </svg>
        `;
    }

    private createAllocationChart(coin: any): string {
        const allocation = this.getRecommendedAllocation(coin);
        const remaining = 100 - allocation;
        
        return `
            <svg width="120" height="120" viewBox="0 0 120 120" style="margin:0 auto">
                <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="8"/>
                <circle cx="60" cy="60" r="50" fill="none" stroke="#00d4ff" stroke-width="8" 
                        stroke-dasharray="${allocation * 3.14}" stroke-dashoffset="0" 
                        transform="rotate(-90 60 60)" stroke-linecap="round"/>
                <text x="60" y="65" text-anchor="middle" fill="#00d4ff" font-size="14" font-weight="bold">${allocation}%</text>
            </svg>
        `;
    }

    formatPrice(price: number): string {
        if (typeof price !== 'number' || isNaN(price)) return '0.00';
        if (price >= 1000) return price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        if (price >= 1) return price.toFixed(2);
        if (price >= 0.01) return price.toFixed(4);
        return price.toFixed(6);
    }

    formatMarketCap(marketCap: number): string {
        if (typeof marketCap !== 'number' || isNaN(marketCap)) return '0';
        if (marketCap >= 1e12) return `${(marketCap / 1e12).toFixed(2)}T`;
        if (marketCap >= 1e9) return `${(marketCap / 1e9).toFixed(1)}B`;
        if (marketCap >= 1e6) return `${(marketCap / 1e6).toFixed(0)}M`;
        return `${(marketCap / 1e3).toFixed(0)}K`;
    }

    formatVolume(volume: number): string {
        if (typeof volume !== 'number' || isNaN(volume)) return '0';
        if (volume >= 1e9) return `${(volume / 1e9).toFixed(1)}B`;
        if (volume >= 1e6) return `${(volume / 1e6).toFixed(0)}M`;
        return `${(volume / 1e3).toFixed(0)}K`;
    }

    refreshAnalysis() {
        this.countdownTimer = 60;
        this.loadData();
    }

    destroy() {
        if (this.countdownInterval) {
            clearInterval(this.countdownInterval);
        }
    }

    // Complete the modal creation - fix the truncated code
    showDetails(symbol: string) {
        const coin = this.coins.find(c => c.symbol === symbol);
        if (!coin) return;

        console.log(`📊 Showing analytics for ${symbol}`);
        
        // Enhanced analytics modal with tabs
        const modal = document.createElement('div');
        modal.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.8);backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;z-index:10000;animation:fadeIn 0.3s ease';
        
        modal.innerHTML = `
            <div style="background:linear-gradient(135deg,rgba(30,35,50,.98),rgba(40,46,65,.95));backdrop-filter:blur(30px);border:1px solid rgba(255,255,255,.15);border-radius:24px;padding:0;max-width:95vw;max-height:95vh;color:#fff;overflow:hidden;box-shadow:0 25px 80px rgba(0,0,0,.6);width:1200px;height:800px;display:flex;flex-direction:column">
                
                <!-- Header -->
                <div style="display:flex;justify-content:space-between;align-items:center;padding:24px 32px;border-bottom:1px solid rgba(255,255,255,.1);background:linear-gradient(135deg,rgba(0,212,255,.1),rgba(30,35,50,.8))">
                    <div style="display:flex;align-items:center;gap:16px">
                        <div style="width:48px;height:48px;background:linear-gradient(135deg,#00d4ff,#4facfe);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.5rem;font-weight:900;color:#fff">${coin.symbol.charAt(0)}</div>
                        <div>
                            <h2 style="font-size:1.8rem;font-weight:800;margin:0;background:linear-gradient(135deg,#ffffff,#00d4ff);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent">${coin.name}</h2>
                            <p style="margin:0;color:#b8c6db;font-size:.9rem;font-weight:600">${coin.symbol} • Rank #${coin.rank}</p>
                        </div>
                    </div>
                    <div style="display:flex;align-items:center;gap:16px">
                        <div style="text-align:right">
                            <div style="font-size:2rem;font-weight:900;color:#00d4ff;font-family:monospace">$${this.formatPrice(coin.price)}</div>
                            <div style="color:${coin.percent_change_24h > 0 ? '#10b981' : '#ef4444'};font-weight:700;font-size:1.1rem">${coin.percent_change_24h > 0 ? '+' : ''}${coin.percent_change_24h.toFixed(2)}%</div>
                        </div>
                        <button onclick="this.closest('.modal-overlay').remove()" style="background:rgba(239,68,68,.2);border:1px solid rgba(239,68,68,.3);color:#ef4444;font-size:1.3rem;cursor:pointer;padding:12px;border-radius:50%;transition:all .2s ease;width:48px;height:48px;display:flex;align-items:center;justify-content:center">✕</button>
                    </div>
                </div>

                <!-- Tab Navigation -->
                <div style="display:flex;padding:0 32px;background:rgba(0,0,0,.2);border-bottom:1px solid rgba(255,255,255,.1)">
                    <button class="analytics-tab active" data-tab="overview" onclick="switchAnalyticsTab('overview')" style="background:none;border:none;color:#00d4ff;padding:16px 24px;font-weight:700;font-size:.9rem;cursor:pointer;border-bottom:3px solid #00d4ff;text-transform:uppercase;letter-spacing:.05em">📊 Overview</button>
                    <button class="analytics-tab" data-tab="charts" onclick="switchAnalyticsTab('charts')" style="background:none;border:none;color:#b8c6db;padding:16px 24px;font-weight:700;font-size:.9rem;cursor:pointer;border-bottom:3px solid transparent;text-transform:uppercase;letter-spacing:.05em">📈 Price Charts</button>
                    <button class="analytics-tab" data-tab="technicals" onclick="switchAnalyticsTab('technicals')" style="background:none;border:none;color:#b8c6db;padding:16px 24px;font-weight:700;font-size:.9rem;cursor:pointer;border-bottom:3px solid transparent;text-transform:uppercase;letter-spacing:.05em">⚡ Technical</button>
                    <button class="analytics-tab" data-tab="sentiment" onclick="switchAnalyticsTab('sentiment')" style="background:none;border:none;color:#b8c6db;padding:16px 24px;font-weight:700;font-size:.9rem;cursor:pointer;border-bottom:3px solid transparent;text-transform:uppercase;letter-spacing:.05em">💭 Sentiment</button>
                    <button class="analytics-tab" data-tab="advanced" onclick="switchAnalyticsTab('advanced')" style="background:none;border:none;color:#b8c6db;padding:16px 24px;font-weight:700;font-size:.9rem;cursor:pointer;border-bottom:3px solid transparent;text-transform:uppercase;letter-spacing:.05em">🔬 Advanced</button>
                </div>

                <!-- Tab Content -->
                <div style="flex:1;overflow-y:auto;padding:32px">
                    ${this.createAnalyticsTabContent(coin)}
                </div>
            </div>
        `;
        
        modal.className = 'modal-overlay';
        document.body.appendChild(modal);
        
        // Add modal styles
        this.addAnalyticsModalStyles();
        
        // Auto-close on click outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });
    }

    // Add missing modal styles method
    private addAnalyticsModalStyles() {
        if (document.getElementById('analytics-modal-styles')) return;
        
        const style = document.createElement('style');
        style.id = 'analytics-modal-styles';
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; transform: scale(0.95); }
                to { opacity: 1; transform: scale(1); }
            }
            
            .analytics-tab:hover {
                color: #00d4ff !important;
                background: rgba(0,212,255,0.05) !important;
            }
            
            .analytics-tab.active {
                color: #00d4ff !important;
                border-bottom-color: #00d4ff !important;
            }
            
            .analytics-tab-content {
                display: block;
            }
            
            .analytics-tab-content:not(.active) {
                display: none !important;
            }
            
            .modal-overlay {
                animation: fadeIn 0.3s ease;
            }
        `;
        document.head.appendChild(style);
    }

    // Complete the createAnalyticsTabContent, createOverviewTab, createChartsTab, etc. methods
    private createAnalyticsTabContent(coin: any): string {
        return `
            <!-- Overview Tab -->
            <div id="tab-overview" class="analytics-tab-content active">
                ${this.createOverviewTab(coin)}
            </div>

            <!-- Charts Tab -->
            <div id="tab-charts" class="analytics-tab-content" style="display:none">
                ${this.createChartsTab(coin)}
            </div>

            <!-- Technical Tab -->
            <div id="tab-technicals" class="analytics-tab-content" style="display:none">
                ${this.createTechnicalTab(coin)}
            </div>

            <!-- Sentiment Tab -->
            <div id="tab-sentiment" class="analytics-tab-content" style="display:none">
                ${this.createSentimentTab(coin)}
            </div>

            <!-- Advanced Tab -->
            <div id="tab-advanced" class="analytics-tab-content" style="display:none">
                ${this.createAdvancedTab(coin)}
            </div>
        `;
    }

    private createOverviewTab(coin: any): string {
        return `
            <div style="display:grid;grid-template-columns:2fr 1fr;gap:32px;height:100%">
                <!-- Main Chart Area -->
                <div style="background:rgba(0,0,0,.2);border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:24px;position:relative">
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:24px">
                        <h3 style="color:#fff;font-size:1.4rem;font-weight:700;margin:0">Price Movement (7D)</h3>
                        <div style="display:flex;gap:8px">
                            <button style="background:rgba(0,212,255,.2);border:1px solid rgba(0,212,255,.3);color:#00d4ff;padding:6px 12px;border-radius:8px;font-size:.8rem;font-weight:600;cursor:pointer">1D</button>
                            <button style="background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);color:#b8c6db;padding:6px 12px;border-radius:8px;font-size:.8rem;font-weight:600;cursor:pointer">7D</button>
                            <button style="background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);color:#b8c6db;padding:6px 12px;border-radius:8px;font-size:.8rem;font-weight:600;cursor:pointer">30D</button>
                        </div>
                    </div>
                    <div style="height:300px;position:relative">
                        ${this.createAdvancedPriceChart(coin.price_history, coin.percent_change_24h > 0)}
                    </div>
                </div>

                <!-- Stats Panel -->
                <div style="display:flex;flex-direction:column;gap:20px">
                    <!-- Key Metrics -->
                    <div style="background:rgba(0,0,0,.2);border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:20px">
                        <h4 style="color:#00d4ff;font-size:1.1rem;font-weight:700;margin:0 0 16px 0;text-transform:uppercase;letter-spacing:.05em">📊 Key Metrics</h4>
                        <div style="display:flex;flex-direction:column;gap:12px">
                            <div style="display:flex;justify-content:space-between;align-items:center">
                                <span style="color:#b8c6db;font-size:.9rem">Market Cap</span>
                                <span style="color:#fff;font-weight:700;font-family:monospace">$${this.formatMarketCap(coin.market_cap)}</span>
                            </div>
                            <div style="display:flex;justify-content:space-between;align-items:center">
                                <span style="color:#b8c6db;font-size:.9rem">24h Volume</span>
                                <span style="color:#fff;font-weight:700;font-family:monospace">$${this.formatVolume(coin.volume_24h)}</span>
                            </div>
                            <div style="display:flex;justify-content:space-between;align-items:center">
                                <span style="color:#b8c6db;font-size:.9rem">Circulating Supply</span>
                                <span style="color:#fff;font-weight:700;font-family:monospace">${this.formatVolume(coin.circulating_supply)}</span>
                            </div>
                            <div style="display:flex;justify-content:space-between;align-items:center">
                                <span style="color:#b8c6db;font-size:.9rem">Max Supply</span>
                                <span style="color:#fff;font-weight:700;font-family:monospace">${coin.max_supply ? this.formatVolume(coin.max_supply) : 'Unlimited'}</span>
                            </div>
                        </div>
                    </div>

                    <!-- Performance -->
                    <div style="background:rgba(0,0,0,.2);border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:20px">
                        <h4 style="color:#00d4ff;font-size:1.1rem;font-weight:700;margin:0 0 16px 0;text-transform:uppercase;letter-spacing:.05em">🎯 Performance</h4>
                        <div style="display:flex;flex-direction:column;gap:12px">
                            <div style="display:flex;justify-content:space-between;align-items:center">
                                <span style="color:#b8c6db;font-size:.9rem">24h Change</span>
                                <span style="color:${coin.percent_change_24h > 0 ? '#10b981' : '#ef4444'};font-weight:700">${coin.percent_change_24h > 0 ? '+' : ''}${coin.percent_change_24h.toFixed(2)}%</span>
                            </div>
                            <div style="display:flex;justify-content:space-between;align-items:center">
                                <span style="color:#b8c6db;font-size:.9rem">7d Change</span>
                                <span style="color:${(coin.percent_change_7d || 0) > 0 ? '#10b981' : '#ef4444'};font-weight:700">${(coin.percent_change_7d || 0) > 0 ? '+' : ''}${(coin.percent_change_7d || 0).toFixed(2)}%</span>
                            </div>
                            <div style="display:flex;justify-content:space-between;align-items:center">
                                <span style="color:#b8c6db;font-size:.9rem">30d Change</span>
                                <span style="color:${(coin.percent_change_30d || 0) > 0 ? '#10b981' : '#ef4444'};font-weight:700">${(coin.percent_change_30d || 0) > 0 ? '+' : ''}${(coin.percent_change_30d || 0).toFixed(2)}%</span>
                            </div>
                            <div style="display:flex;justify-content:space-between;align-items:center">
                                <span style="color:#b8c6db;font-size:.9rem">Volatility</span>
                                <span style="color:#f59e0b;font-weight:700">${(coin.volatility_score || 5).toFixed(1)}/10</span>
                            </div>
                        </div>
                    </div>

                    <!-- Quick Actions -->
                    <div style="background:rgba(0,0,0,.2);border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:20px">
                        <h4 style="color:#00d4ff;font-size:1.1rem;font-weight:700;margin:0 0 16px 0;text-transform:uppercase;letter-spacing:.05em">🎯 Trading Signal</h4>
                        <div style="text-align:center">
                            <div style="background:${this.getTechnicalSignalColor(coin)};color:#fff;padding:12px 24px;border-radius:12px;font-weight:800;font-size:1.2rem;margin-bottom:12px">
                                ${this.getTechnicalSignal(coin)}
                            </div>
                            <div style="color:#b8c6db;font-size:.8rem">Based on technical analysis</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }



    private createChartsTab(coin: any): string {
        return `
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;height:100%">
                <!-- Price Chart -->
                <div style="background:rgba(0,0,0,.2);border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:24px">
                    <h3 style="color:#fff;font-size:1.3rem;font-weight:700;margin:0 0 20px 0">📈 Price Chart</h3>
                    <div style="height:250px;position:relative">
                        ${this.createAdvancedPriceChart(coin.price_history, coin.percent_change_24h > 0)}
                    </div>
                </div>

                <!-- Volume Chart -->
                <div style="background:rgba(0,0,0,.2);border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:24px">
                    <h3 style="color:#fff;font-size:1.3rem;font-weight:700;margin:0 0 20px 0">📊 Volume Chart</h3>
                    <div style="height:250px;position:relative">
                        ${this.createVolumeChart(coin.volume_history || this.generateVolumeData(coin.volume_24h))}
                    </div>
                </div>

                <!-- Market Cap Chart -->
                <div style="background:rgba(0,0,0,.2);border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:24px">
                    <h3 style="color:#fff;font-size:1.3rem;font-weight:700;margin:0 0 20px 0">🏦 Market Cap</h3>
                    <div style="height:250px;position:relative">
                        ${this.createMarketCapChart(coin.market_cap_history || this.generateMarketCapData(coin.market_cap))}
                    </div>
                </div>

                <!-- Candlestick Chart -->
                <div style="background:rgba(0,0,0,.2);border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:24px">
                    <h3 style="color:#fff;font-size:1.3rem;font-weight:700;margin:0 0 20px 0">🕯️ Candlestick</h3>
                    <div style="height:250px;position:relative">
                        ${this.createCandlestickChart(coin.price_history)}
                    </div>
                </div>
            </div>
        `;
    }

    private createTechnicalTab(coin: any): string {
        const rsi = coin.rsi || 50;
        const ma50 = coin.moving_avg_50 || coin.price;
        const ma200 = coin.moving_avg_200 || coin.price;
        
        return `
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;height:100%">
                <!-- RSI Indicator -->
                <div style="background:rgba(0,0,0,.2);border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:24px">
                    <h3 style="color:#fff;font-size:1.3rem;font-weight:700;margin:0 0 20px 0">📊 RSI (Relative Strength Index)</h3>
                    <div style="position:relative;height:150px;background:rgba(0,0,0,.3);border-radius:12px;padding:20px">
                        ${this.createRSIGauge(rsi)}
                        <div style="text-align:center;margin-top:20px">
                            <div style="color:#00d4ff;font-size:2rem;font-weight:900">${rsi.toFixed(1)}</div>
                            <div style="color:#b8c6db;font-size:.9rem;margin-top:4px">${this.getRSIStatus(rsi)}</div>
                        </div>
                    </div>
                </div>

                <!-- Moving Averages -->
                <div style="background:rgba(0,0,0,.2);border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:24px">
                    <h3 style="color:#fff;font-size:1.3rem;font-weight:700;margin:0 0 20px 0">📈 Moving Averages</h3>
                    <div style="display:flex;flex-direction:column;gap:16px">
                        <div style="background:rgba(0,0,0,.3);border-radius:12px;padding:16px">
                            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
                                <span style="color:#b8c6db;font-size:.9rem">MA 50</span>
                                <span style="color:#00d4ff;font-weight:700">$${ma50.toFixed(2)}</span>
                            </div>
                            <div style="color:${coin.price > ma50 ? '#10b981' : '#ef4444'};font-size:.8rem">
                                ${coin.price > ma50 ? '🟢 Above MA50 (Bullish)' : '🔴 Below MA50 (Bearish)'}
                            </div>
                        </div>
                        <div style="background:rgba(0,0,0,.3);border-radius:12px;padding:16px">
                            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
                                <span style="color:#b8c6db;font-size:.9rem">MA 200</span>
                                <span style="color:#00d4ff;font-weight:700">$${ma200.toFixed(2)}</span>
                            </div>
                            <div style="color:${coin.price > ma200 ? '#10b981' : '#ef4444'};font-size:.8rem">
                                ${coin.price > ma200 ? '🟢 Above MA200 (Long-term Bull)' : '🔴 Below MA200 (Long-term Bear)'}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Support & Resistance -->
                <div style="background:rgba(0,0,0,.2);border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:24px">
                    <h3 style="color:#fff;font-size:1.3rem;font-weight:700;margin:0 0 20px 0">🎯 Support & Resistance</h3>
                    <div style="height:200px;position:relative">
                        ${this.createSupportResistanceChart(coin)}
                    </div>
                </div>

                <!-- Technical Summary -->
                <div style="background:rgba(0,0,0,.2);border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:24px">
                    <h3 style="color:#fff;font-size:1.3rem;font-weight:700;margin:0 0 20px 0">📋 Technical Summary</h3>
                    <div style="display:flex;flex-direction:column;gap:12px">
                        <div style="display:flex;justify-content:space-between;align-items:center;padding:12px;background:rgba(0,0,0,.3);border-radius:8px">
                            <span style="color:#b8c6db">Overall Signal</span>
                            <span style="color:${this.getTechnicalSignalColor(coin)};font-weight:700">${this.getTechnicalSignal(coin)}</span>
                        </div>
                        <div style="display:flex;justify-content:space-between;align-items:center;padding:12px;background:rgba(0,0,0,.3);border-radius:8px">
                            <span style="color:#b8c6db">Volatility</span>
                            <span style="color:#f59e0b;font-weight:700">${(coin.volatility_score || 5).toFixed(1)}/10</span>
                        </div>
                        <div style="display:flex;justify-content:space-between;align-items:center;padding:12px;background:rgba(0,0,0,.3);border-radius:8px">
                            <span style="color:#b8c6db">Trend Strength</span>
                            <span style="color:#3b82f6;font-weight:700">${this.getTrendStrength(coin)}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    private createSentimentTab(coin: any): string {
        const sentiment = coin.social_sentiment || 0.5;
        const fearGreed = coin.fear_greed_index || 50;
        
        return `
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;height:100%">
                <!-- Social Sentiment -->
                <div style="background:rgba(0,0,0,.2);border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:24px">
                    <h3 style="color:#fff;font-size:1.3rem;font-weight:700;margin:0 0 20px 0">💭 Social Sentiment</h3>
                    <div style="text-align:center">
                        ${this.createSentimentGauge(sentiment)}
                        <div style="margin-top:20px">
                            <div style="color:#00d4ff;font-size:2rem;font-weight:900">${(sentiment * 100).toFixed(0)}%</div>
                            <div style="color:#b8c6db;font-size:.9rem">${this.getSentimentLabel(sentiment)}</div>
                        </div>
                    </div>
                </div>

                <!-- Fear & Greed Index -->
                <div style="background:rgba(0,0,0,.2);border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:24px">
                    <h3 style="color:#fff;font-size:1.3rem;font-weight:700;margin:0 0 20px 0">😱 Fear & Greed Index</h3>
                    <div style="text-align:center">
                        ${this.createFearGreedGauge(fearGreed)}
                        <div style="margin-top:20px">
                            <div style="color:#00d4ff;font-size:2rem;font-weight:900">${fearGreed.toFixed(0)}</div>
                            <div style="color:#b8c6db;font-size:.9rem">${this.getFearGreedLabel(fearGreed)}</div>
                        </div>
                    </div>
                </div>

                <!-- News Sentiment Trends -->
                <div style="background:rgba(0,0,0,.2);border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:24px">
                    <h3 style="color:#fff;font-size:1.3rem;font-weight:700;margin:0 0 20px 0">📰 News Sentiment Trend</h3>
                    <div style="height:200px">
                        ${this.createSentimentTrendChart(coin)}
                    </div>
                </div>

                <!-- Community Metrics -->
                <div style="background:rgba(0,0,0,.2);border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:24px">
                    <h3 style="color:#fff;font-size:1.3rem;font-weight:700;margin:0 0 20px 0">👥 Community Metrics</h3>
                    <div style="display:flex;flex-direction:column;gap:16px">
                        <div style="display:flex;justify-content:space-between;align-items:center;padding:12px;background:rgba(0,0,0,.3);border-radius:8px">
                            <span style="color:#b8c6db">Social Score</span>
                            <span style="color:#10b981;font-weight:700">${(Math.random() * 40 + 60).toFixed(0)}/100</span>
                        </div>
                        <div style="display:flex;justify-content:space-between;align-items:center;padding:12px;background:rgba(0,0,0,.3);border-radius:8px">
                            <span style="color:#b8c6db">Developer Activity</span>
                            <span style="color:#3b82f6;font-weight:700">${Math.random() > 0.5 ? 'High' : 'Medium'}</span>
                        </div>
                        <div style="display:flex;justify-content:space-between;align-items:center;padding:12px;background:rgba(0,0,0,.3);border-radius:8px">
                            <span style="color:#b8c6db">Community Growth</span>
                            <span style="color:#f59e0b;font-weight:700">+${(Math.random() * 15 + 5).toFixed(1)}%</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    private createAdvancedTab(coin: any): string {
        return `
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;height:100%">
                <!-- Correlation Analysis -->
                <div style="background:rgba(0,0,0,.2);border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:24px">
                    <h3 style="color:#fff;font-size:1.3rem;font-weight:700;margin:0 0 20px 0">🔗 Correlation Analysis</h3>
                    <div style="height:250px">
                        ${this.createCorrelationChart(coin)}
                    </div>
                </div>

                <!-- Risk Metrics -->
                <div style="background:rgba(0,0,0,.2);border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:24px">
                    <h3 style="color:#fff;font-size:1.3rem;font-weight:700;margin:0 0 20px 0">⚠️ Risk Analysis</h3>
                    <div style="display:flex;flex-direction:column;gap:16px">
                        <div style="background:rgba(0,0,0,.3);border-radius:12px;padding:16px">
                            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
                                <span style="color:#b8c6db">Volatility Risk</span>
                                <span style="color:#ef4444;font-weight:700">${(coin.volatility_score || 5).toFixed(1)}/10</span>
                            </div>
                            <div style="background:rgba(255,255,255,.1);height:8px;border-radius:4px;overflow:hidden">
                                <div style="background:#ef4444;height:100%;width:${(coin.volatility_score || 5) * 10}%;border-radius:4px"></div>
                            </div>
                        </div>
                        <div style="background:rgba(0,0,0,.3);border-radius:12px;padding:16px">
                            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
                                <span style="color:#b8c6db">Liquidity Risk</span>
                                <span style="color:#10b981;font-weight:700">${(10 - (coin.liquidity_score || 8)).toFixed(1)}/10</span>
                            </div>
                            <div style="background:rgba(255,255,255,.1);height:8px;border-radius:4px;overflow:hidden">
                                <div style="background:#10b981;height:100%;width:${(10 - (coin.liquidity_score || 8)) * 10}%;border-radius:4px"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Portfolio Allocation -->
                <div style="background:rgba(0,0,0,.2);border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:24px">
                    <h3 style="color:#fff;font-size:1.3rem;font-weight:700;margin:0 0 20px 0">📊 Recommended Allocation</h3>
                    <div style="text-align:center">
                        ${this.createAllocationChart(coin)}
                        <div style="margin-top:20px;background:rgba(0,0,0,.3);border-radius:12px;padding:16px">
                            <div style="color:#00d4ff;font-size:1.5rem;font-weight:900">${this.getRecommendedAllocation(coin)}%</div>
                            <div style="color:#b8c6db;font-size:.9rem;margin-top:4px">of portfolio</div>
                        </div>
                    </div>
                </div>

                <!-- AI Prediction -->
                <div style="background:rgba(0,0,0,.2);border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:24px">
                    <h3 style="color:#fff;font-size:1.3rem;font-weight:700;margin:0 0 20px 0">🤖 AI Price Prediction</h3>
                    <div style="display:flex;flex-direction:column;gap:12px">
                        <div style="background:rgba(0,0,0,.3);border-radius:12px;padding:16px">
                            <div style="display:flex;justify-content:space-between;margin-bottom:8px">
                                <span style="color:#b8c6db">24h Prediction</span>
                                <span style="color:#10b981;font-weight:700">+${(Math.random() * 8 + 2).toFixed(1)}%</span>
                            </div>
                            <div style="color:#8b97a3;font-size:.8rem">Confidence: ${(Math.random() * 20 + 70).toFixed(0)}%</div>
                        </div>
                        <div style="background:rgba(0,0,0,.3);border-radius:12px;padding:16px">
                            <div style="display:flex;justify-content:space-between;margin-bottom:8px">
                                <span style="color:#b8c6db">7d Prediction</span>
                                <span style="color:#f59e0b;font-weight:700">${Math.random() > 0.5 ? '+' : '-'}${(Math.random() * 15 + 5).toFixed(1)}%</span>
                            </div>
                            <div style="color:#8b97a3;font-size:.8rem">Confidence: ${(Math.random() * 15 + 60).toFixed(0)}%</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    // Helper methods for chart creation
    private createVolumeChart(volumeHistory: number[]): string {
        const max = Math.max(...volumeHistory);
        const bars = volumeHistory.map((volume, index) => {
            const height = (volume / max) * 80;
            const x = (index / (volumeHistory.length - 1)) * 90 + 5;
            return `<rect x="${x-1}" y="${90-height}" width="2" height="${height}" fill="#00d4ff" opacity="0.7"/>`;
        }).join('');

        return `
            <svg width="100%" height="100%" viewBox="0 0 100 100">
                ${bars}
                <text x="2" y="15" fill="#b8c6db" font-size="3">Volume: $${this.formatVolume(max)}</text>
            </svg>
        `;
    }

    private createMarketCapChart(marketCapHistory: number[]): string {
        return this.createAdvancedPriceChart(marketCapHistory, true);
    }

    private createCandlestickChart(priceHistory: number[]): string {
        const candles = [];
        for (let i = 0; i < priceHistory.length - 1; i += 2) {
            const open = priceHistory[i];
            const close = priceHistory[i + 1] || open;
            const high = Math.max(open, close) * 1.02;
            const low = Math.min(open, close) * 0.98;
            const isGreen = close > open;
            
            const x = (i / priceHistory.length) * 90 + 5;
            const openY = 80 - (open / Math.max(...priceHistory)) * 60;
            const closeY = 80 - (close / Math.max(...priceHistory)) * 60;
            const highY = 80 - (high / Math.max(...priceHistory)) * 60;
            const lowY = 80 - (low / Math.max(...priceHistory)) * 60;

            candles.push(`
                <line x1="${x}" y1="${highY}" x2="${x}" y2="${lowY}" stroke="#666" stroke-width="0.5"/>
                <rect x="${x-1}" y="${Math.min(openY, closeY)}" width="2" height="${Math.abs(closeY - openY)}" 
                      fill="${isGreen ? '#10b981' : '#ef4444'}" opacity="0.8"/>
            `);
        }

        return `
            <svg width="100%" height="100%" viewBox="0 0 100 100">
                ${candles.join('')}
            </svg>
        `;
    }
}

// Global app instance
let app: CryptoApp;

// Global functions for HTML onclick handlers
function refreshAnalysis(): void {
    if (app) {
        app.refreshAnalysis();
    }
}

function filterByAnalysis(type: string): void {
    if (app) {
        app.filterByAnalysis(type);
    }
}

function handleSortChange(): void {
    if (app) {
        app.handleSortChange();
    }
}

function switchAnalyticsTab(tabName: string): void {
    // Remove active class from all tabs
    document.querySelectorAll('.analytics-tab').forEach(tab => {
        tab.classList.remove('active');
        (tab as HTMLElement).style.color = '#b8c6db';
        (tab as HTMLElement).style.borderBottomColor = 'transparent';
    });
    
    // Hide all tab contents
    document.querySelectorAll('.analytics-tab-content').forEach(content => {
        (content as HTMLElement).style.display = 'none';
        content.classList.remove('active');
    });
    
    // Show selected tab
    const selectedTab = document.querySelector(`[data-tab="${tabName}"]`);
    const selectedContent = document.getElementById(`tab-${tabName}`);
    
    if (selectedTab) {
        selectedTab.classList.add('active');
        (selectedTab as HTMLElement).style.color = '#00d4ff';
        (selectedTab as HTMLElement).style.borderBottomColor = '#00d4ff';
    }
    
    if (selectedContent) {
        selectedContent.style.display = 'block';
        selectedContent.classList.add('active');
    }
}

// Make functions available globally
(window as any).refreshAnalysis = refreshAnalysis;
(window as any).filterByAnalysis = filterByAnalysis;
(window as any).handleSortChange = handleSortChange;

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    app = new CryptoApp();
    app.init();
});

// Export for module systems
export { CryptoApp };