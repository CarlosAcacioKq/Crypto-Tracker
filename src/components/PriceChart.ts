// TODO: Implement PriceChart component
export class PriceChart {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private data: number[];
    private labels: string[];
    private chartType: 'line' | 'candlestick' | 'volume';

    constructor(canvas: HTMLCanvasElement, chartType: 'line' | 'candlestick' | 'volume' = 'line') {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d')!;
        this.data = [];
        this.labels = [];
        this.chartType = chartType;
        this.setupCanvas();
    }

    private setupCanvas() {
        const rect = this.canvas.getBoundingClientRect();
        this.canvas.width = rect.width * 2;
        this.canvas.height = rect.height * 2;
        this.ctx.scale(2, 2);
        this.canvas.style.width = `${rect.width}px`;
        this.canvas.style.height = `${rect.height}px`;
    }

    updateData(data: number[], labels?: string[]) {
        this.data = data;
        this.labels = labels || data.map((_, i) => `${i + 1}`);
        this.render();
    }

    private render() {
        this.ctx.clearRect(0, 0, this.canvas.width / 2, this.canvas.height / 2);
        
        if (this.data.length === 0) return;

        switch (this.chartType) {
            case 'line':
                this.renderLineChart();
                break;
            case 'candlestick':
                this.renderCandlestickChart();
                break;
            case 'volume':
                this.renderVolumeChart();
                break;
        }
    }

    private renderLineChart() {
        const padding = 40;
        const width = this.canvas.width / 2 - padding * 2;
        const height = this.canvas.height / 2 - padding * 2;
        
        const minValue = Math.min(...this.data);
        const maxValue = Math.max(...this.data);
        const range = maxValue - minValue || 1;

        // Draw grid
        this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        this.ctx.lineWidth = 1;
        for (let i = 0; i <= 5; i++) {
            const y = padding + (height / 5) * i;
            this.ctx.beginPath();
            this.ctx.moveTo(padding, y);
            this.ctx.lineTo(padding + width, y);
            this.ctx.stroke();
        }

        // Draw price line
        this.ctx.strokeStyle = '#00d4ff';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();

        this.data.forEach((value, index) => {
            const x = padding + (width / (this.data.length - 1)) * index;
            const y = padding + height - ((value - minValue) / range) * height;
            
            if (index === 0) {
                this.ctx.moveTo(x, y);
            } else {
                this.ctx.lineTo(x, y);
            }
        });

        this.ctx.stroke();

        // Add gradient fill
        this.ctx.lineTo(padding + width, padding + height);
        this.ctx.lineTo(padding, padding + height);
        this.ctx.closePath();
        
        const gradient = this.ctx.createLinearGradient(0, padding, 0, padding + height);
        gradient.addColorStop(0, 'rgba(0, 212, 255, 0.3)');
        gradient.addColorStop(1, 'rgba(0, 212, 255, 0.05)');
        this.ctx.fillStyle = gradient;
        this.ctx.fill();

        // Draw price labels
        this.ctx.fillStyle = '#b8c6db';
        this.ctx.font = '10px -apple-system, BlinkMacSystemFont, sans-serif';
        this.ctx.textAlign = 'right';
        
        for (let i = 0; i <= 5; i++) {
            const value = maxValue - (range / 5) * i;
            const y = padding + (height / 5) * i + 3;
            this.ctx.fillText(`$${value.toFixed(2)}`, padding - 5, y);
        }
    }

    private renderCandlestickChart() {
        const padding = 40;
        const width = this.canvas.width / 2 - padding * 2;
        const height = this.canvas.height / 2 - padding * 2;
        
        // Generate mock OHLC data from price data
        const candleData = this.generateCandlestickData();
        const minValue = Math.min(...candleData.map(c => c.low));
        const maxValue = Math.max(...candleData.map(c => c.high));
        const range = maxValue - minValue || 1;

        const candleWidth = Math.max(2, width / candleData.length * 0.6);

        candleData.forEach((candle, index) => {
            const x = padding + (width / candleData.length) * index + (width / candleData.length) / 2;
            const openY = padding + height - ((candle.open - minValue) / range) * height;
            const closeY = padding + height - ((candle.close - minValue) / range) * height;
            const highY = padding + height - ((candle.high - minValue) / range) * height;
            const lowY = padding + height - ((candle.low - minValue) / range) * height;

            const isGreen = candle.close >= candle.open;
            this.ctx.strokeStyle = isGreen ? '#10b981' : '#ef4444';
            this.ctx.fillStyle = isGreen ? '#10b981' : '#ef4444';

            // Draw wick
            this.ctx.lineWidth = 1;
            this.ctx.beginPath();
            this.ctx.moveTo(x, highY);
            this.ctx.lineTo(x, lowY);
            this.ctx.stroke();

            // Draw body
            const bodyHeight = Math.abs(closeY - openY);
            const bodyY = Math.min(openY, closeY);
            this.ctx.fillRect(x - candleWidth / 2, bodyY, candleWidth, bodyHeight || 1);
        });
    }

    private renderVolumeChart() {
        const padding = 40;
        const width = this.canvas.width / 2 - padding * 2;
        const height = this.canvas.height / 2 - padding * 2;
        
        const maxVolume = Math.max(...this.data);
        const barWidth = width / this.data.length * 0.8;

        this.data.forEach((volume, index) => {
            const x = padding + (width / this.data.length) * index + (width / this.data.length) / 2;
            const barHeight = (volume / maxVolume) * height;
            const y = padding + height - barHeight;

            this.ctx.fillStyle = index % 2 === 0 ? '#4facfe' : '#00f2fe';
            this.ctx.fillRect(x - barWidth / 2, y, barWidth, barHeight);
        });
    }

    private generateCandlestickData() {
        return this.data.map((price, index) => {
            const volatility = price * 0.02; // 2% volatility
            const open = index > 0 ? this.data[index - 1] : price;
            const close = price;
            const high = Math.max(open, close) + Math.random() * volatility;
            const low = Math.min(open, close) - Math.random() * volatility;
            
            return { open, high, low, close };
        });
    }

    setChartType(type: 'line' | 'candlestick' | 'volume') {
        this.chartType = type;
        this.render();
    }
}
