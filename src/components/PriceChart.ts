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

export interface PriceChartProps {
    data: number[];
    width?: number;
    height?: number;
    color?: string;
}

export function createPriceChart(props: PriceChartProps): HTMLElement {
    const { data, width = 300, height = 150, color = '#00d4ff' } = props;
    
    const container = document.createElement('div');
    container.style.cssText = `width:${width}px;height:${height}px;position:relative`;
    
    if (data.length < 2) {
        container.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#666">No data</div>';
        return container;
    }
    
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;
    
    const points = data.map((price, index) => {
        const x = (index / (data.length - 1)) * width;
        const y = height - ((price - min) / range) * height;
        return `${x},${y}`;
    }).join(' ');
    
    container.innerHTML = `
        <svg width="${width}" height="${height}" style="position:absolute;top:0;left:0">
            <polyline points="${points}" 
                      fill="none" 
                      stroke="${color}" 
                      stroke-width="2" 
                      stroke-linecap="round"/>
        </svg>
    `;
    
    return container;
}

export default createPriceChart;
