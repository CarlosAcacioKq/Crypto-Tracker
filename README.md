# 🚀 CryptoTracker Pro
LINK TO VIEW THE LIVE WEBSITE - https://crypto-tracker-tl0v.onrender.com - 
A modern, high-performance cryptocurrency tracking web application built with TypeScript, featuring real-time data updates, advanced analytics, and professional UI/UX.

![CryptoTracker Pro](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)

🌐 **Live Demo**: [https://crypto-tracker-pro.onrender.com](https://crypto-tracker-pro.onrender.com)

## ✨ Features

- 📊 **Real-time Data Updates** - Live cryptocurrency prices with 60-second refresh intervals (clock-synced)
- 📈 **Advanced Analytics** - Technical indicators (RSI, Moving Averages), price charts, and market sentiment
- 🎯 **Smart Filtering** - Filter by market cap, momentum, RSI levels, and more
- 📱 **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- ⚡ **High Performance** - Optimized rendering with efficient DOM updates and minimal re-renders
- 🎨 **Modern UI** - Glass morphism design with smooth animations and dark theme
- 🔍 **Detailed Coin Analysis** - Comprehensive modal views with multiple chart types (Price, Candlestick, Volume)
- 📊 **Market Overview** - Total market cap, volume, BTC dominance, and sentiment indicators
- ⏰ **Clock-Synced Updates** - Updates precisely at the start of each minute for consistency
- 🎯 **Interactive Charts** - SVG-based charts with real-time data visualization

## 🛠️ Tech Stack

<<<<<<< HEAD
- **Frontend**: TypeScript, Vanilla JavaScript, CSS3 with CSS Variables
- **Backend**: Node.js, Express.js with TypeScript
- **Build Tools**: Webpack 5, TypeScript Compiler
- **Charts**: Custom SVG implementations (Price, Candlestick, Volume charts)
- **Styling**: Modern CSS with Glass Morphism effects
- **Data**: Mock cryptocurrency data with realistic market behavior simulation
- **Deployment**: Render (Production), Vercel-ready
=======
- **Frontend**: TypeScript, Vanilla JavaScript, CSS3
- **Backend**: Node.js, Express.js
- **Build Tools**: Webpack, TypeScript Compiler
- **Charts**: HTML5 Canvas (custom implementation)
- **Styling**: Modern CSS with CSS Variables and Glass Morphism
- **API**: https://coinmarketcap.com/api/documentation/v1/#section/Authentication
>>>>>>> 3905398207d8e4b1a454f6339e8d94e1968b578e

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/CarlosAcacioKq/Crypto-Tracker.git
   cd Crypto-Tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build and start the application**
   ```bash
   npm run build
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📝 Development

### Available Scripts

- `npm start` - Build and start production server
- `npm run dev` - Start development mode with hot reload
- `npm run build` - Build for production
- `npm run build-client` - Build client-side code only (Webpack)
- `npm run build-server` - Build server-side code only (TypeScript)
- `npm run clean` - Clean build directories

### Project Structure

```
crypto-web-app/
├── src/
│   ├── client.ts              # Main client application (6000+ lines)
│   ├── app.ts                 # Express server with mock data API
│   ├── components/            # Reusable UI components
│   │   ├── CoinCard.ts       # Individual coin display cards
│   │   ├── CoinList.ts       # Grid layout for coins
│   │   ├── CryptoDetailView.ts# Modal with detailed coin analysis
│   │   ├── PriceChart.ts     # SVG price chart component
│   │   └── MarketOverviewChart.ts # Market statistics display
│   ├── services/             # API services
│   │   └── coinMarketCapApi.ts # Data fetching service
│   ├── types/               # TypeScript interfaces
│   │   └── index.ts         # Type definitions
│   ├── styles/              # CSS styles
│   │   └── main.css         # Complete styling (800+ lines)
│   └── index.html           # Main HTML template
├── public/                  # Built static assets (generated)
├── dist/                   # Compiled TypeScript (generated)
├── webpack.config.js       # Webpack configuration
├── tsconfig.json          # TypeScript configuration
├── tsconfig.server.json   # Server-specific TypeScript config
└── package.json           # Dependencies and scripts
```

## 🎯 Key Features Explained

### Real-time Data Updates
- Automatic price updates every 60 seconds
- Clock-synchronized updates (starts at :00 seconds of each minute)
- Visual countdown timer showing next update
- Smooth transitions and live price tracking

### Advanced Filtering & Sorting
- **High Momentum**: Coins with >5% 24h change
- **Oversold/Overbought**: Based on RSI indicators (RSI < 30 / RSI > 70)
- **Market Cap Categories**: Large Cap (>$10B), Mid Cap ($1B-$10B), Small Cap (<$1B)
- **Custom Sorting**: By rank, price, 24h change, volume, market cap, name

### Interactive Modal Details
- **Real-time Price Display**: Large, prominently displayed current price
- **Technical Analysis**: RSI indicators, moving averages, support/resistance levels
- **Multiple Chart Types**: 
  - Price Chart: Line chart with gradient fill and data points
  - Candlestick Chart: OHLC visualization with realistic candle patterns
  - Volume Chart: Bar chart showing trading volume patterns
- **Market Information**: Market cap, volume, circulating supply, rankings
- **Live Updates**: Modal data refreshes automatically with main timer

### Performance Optimizations
- **Efficient DOM Updates**: Only updates changed values instead of full re-renders
- **Batch Rendering**: Processes coin cards in batches for smooth loading
- **Responsive Design**: Adapts layout and coin count based on screen size
- **Memory Management**: Proper cleanup of intervals and event listeners

## 📊 Data Sources & API

Currently uses sophisticated mock data with realistic market behavior:

- **21+ Cryptocurrencies**: Bitcoin, Ethereum, XRP, Cardano, Solana, BNB, and more
- **Realistic Price Movements**: Based on actual market volatility patterns
- **Technical Indicators**: RSI, Moving Averages, Volatility Scores
- **Market Metrics**: Market cap, volume, supply data
- **Historical Data**: Price and volume history for charting

### API Endpoints

- `GET /api/crypto-data` - Main cryptocurrency data with live updates
- `GET /api/market-overview` - Market-wide statistics and indicators
- `GET /api/status` - Health check and server status
- `GET /api/technical-indicators/:symbol` - Technical analysis for specific coins

## 🎨 Design Features

- **Glass Morphism**: Modern translucent design elements with backdrop blur
- **Dark Theme**: Professional dark color scheme optimized for extended viewing
- **Responsive Grid**: Adaptive layouts that work on all screen sizes
- **Smooth Animations**: 60fps animations with CSS transitions
- **Professional Typography**: Inter font family for optimal readability
- **Color-Coded Data**: Intuitive color coding for price movements and indicators

## 🔧 Configuration

### Environment Variables (Optional)

```env
PORT=3000
NODE_ENV=production
```

### Customization

- **Colors**: Edit CSS variables in `src/styles/main.css`
- **Update Interval**: Modify `PERFORMANCE_CONFIG` in `src/client.ts`
- **Mock Data**: Update cryptocurrency list in `src/app.ts`
- **Chart Settings**: Customize chart appearance in component files

<<<<<<< HEAD
## 🚀 Deployment

### Render (Current Production)

The app is currently deployed on Render:
- **Live URL**: https://crypto-tracker-pro.onrender.com
- **Auto-deploy**: Connected to GitHub main branch
- **Build Command**: `npm run build`
- **Start Command**: `npm start`

### Vercel (Alternative)

```bash
npm install -g vercel
vercel --prod
```

### Manual Deployment

```bash
npm run build
# Upload dist/ and public/ folders to your hosting provider
```

## 📊 Technical Specifications

- **Client Bundle Size**: ~52KB (minified)
- **Update Frequency**: 60 seconds (clock-synced)
- **Supported Browsers**: Modern browsers with ES2020 support
- **Mobile Responsive**: Optimized for devices 320px and up
- **Performance**: Optimized for 60fps animations and smooth scrolling
=======
## 📄 License
>>>>>>> 3905398207d8e4b1a454f6339e8d94e1968b578e

## 🔮 Future Enhancements

- [ ] Real API integration (CoinGecko/CoinMarketCap)
- [ ] User authentication and personalized watchlists
- [ ] Price alerts and notifications
- [ ] Portfolio tracking functionality
- [ ] Advanced charting with more technical indicators
- [ ] WebSocket real-time updates
- [ ] Dark/Light theme toggle
- [ ] Export data functionality

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

<<<<<<< HEAD
## 🙏 Acknowledgments

- Design inspiration from modern cryptocurrency platforms
- TypeScript and Node.js communities
- SVG chart implementations and glass morphism design patterns

---

**Made with ❤️ by [CarlosAcacioKq](https://github.com/CarlosAcacioKq)**

📈 **Live Demo**: [https://crypto-tracker-pro.onrender.com](https://crypto-tracker-pro.onrender.com)
=======
**Made with ❤️ by [Carlos Acacio](https://github.com/CarlosAcaciokq)**
>>>>>>> 3905398207d8e4b1a454f6339e8d94e1968b578e
