// Simplified API service - using mock data from server
export async function fetchCryptocurrencies() {
    try {
        const response = await fetch('/api/crypto-data');
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        const data = await response.json();
        return data.data || [];
    } catch (error) {
        console.error('API Error:', error);
        return [];
    }
}
