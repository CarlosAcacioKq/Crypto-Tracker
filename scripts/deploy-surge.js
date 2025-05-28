const { execSync } = require('child_process');

console.log('🚀 Deploying to Surge.sh...');

try {
    // Build first
    execSync('npm run build', { stdio: 'inherit' });
    
    // Deploy to Surge
    console.log('🌐 Deploying to Surge...');
    execSync('npx surge public/ caproject-cryptotracker.surge.sh', { stdio: 'inherit' });
    
    console.log('✅ Deployed to: https://caproject-cryptotracker.surge.sh');
    
} catch (error) {
    console.error('❌ Surge deployment failed:', error.message);
    console.log('\n🔧 To fix:');
    console.log('1. Install surge: npm install -g surge');
    console.log('2. Run: surge public/');
}
