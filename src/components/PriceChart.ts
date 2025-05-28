// TODO: Implement PriceChart component
export class PriceChart {
    constructor(
        private priceData: number[],
        private timeLabels: string[],
        private options?: {
            width?: number;
            height?: number;
            color?: string;
        }
    ) {}

    render(containerId: string): string {
        const width = this.options?.width || 400;
        const height = this.options?.height || 200;
        const color = this.options?.color || '#00d4ff';

        if (this.priceData.length === 0) {
            return `
                <div id="${containerId}" class="price-chart-container">
                    <div class="chart-placeholder">No data available</div>
                </div>
            `;
        }

        const min = Math.min(...this.priceData);
        const max = Math.max(...this.priceData);
        const range = max - min;

        if (range === 0) {
            return `
                <div id="${containerId}" class="price-chart-container">
                    <div class="chart-placeholder">Price stable at $${this.priceData[0].toFixed(2)}</div>
                </div>
            `;
        }

        const points = this.priceData.map((price, index) => {
            const x = (index / (this.priceData.length - 1)) * width;
            const y = height - ((price - min) / range) * height;
            return `${x},${y}`;
        }).join(' ');

        const gradientId = `gradient-${containerId}`;

        return `
            <div id="${containerId}" class="price-chart-container" style="width: ${width}px; height: ${height}px;">
                <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
                    <defs>
                        <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style="stop-color:${color};stop-opacity:0.4" />
                            <stop offset="100%" style="stop-color:${color};stop-opacity:0" />
                        </linearGradient>
                    </defs>
                    <polyline
                        fill="url(#${gradientId})"
                        stroke="${color}"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        points="${points}"
                    />
                    <polyline
                        fill="none"
                        stroke="${color}"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        points="${points}"
                    />
                </svg>
                <div class="chart-info">
                    <span class="chart-min">$${min.toFixed(2)}</span>
                    <span class="chart-max">$${max.toFixed(2)}</span>
                </div>
            </div>
        `;
    }

    static renderMiniChart(prices: number[], color: string = '#00d4ff'): string {
        if (prices.length === 0) return '<div class="mini-chart-placeholder">--</div>';

        const min = Math.min(...prices);
        const max = Math.max(...prices);
        const range = max - min;

        if (range === 0) return '<div class="mini-chart-placeholder">--</div>';

        const points = prices.map((price, index) => {
            const x = (index / (prices.length - 1)) * 100;
            const y = 100 - ((price - min) / range) * 100;
            return `${x},${y}`;
        }).join(' ');

        return `
            <div class="mini-chart">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polyline
                        fill="none"
                        stroke="${color}"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        points="${points}"
                    />
                </svg>
            </div>
        `;
    }
}
