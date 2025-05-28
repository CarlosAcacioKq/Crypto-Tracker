const { execSync } = require('child_process');

console.log('🚀 Deploying to Netlify...');

try {
    // Build the project
    console.log('📦 Building project...');
    execSync('npm run build', { stdio: 'inherit' });

    // Deploy to Netlify
    console.log('🌐 Deploying to Netlify...');
    execSync('netlify deploy --prod --dir=public', { stdio: 'inherit' });

    console.log('✅ Deployment complete!');
    
} catch (error) {
    console.error('❌ Deployment failed:', error.message);
    console.log('\n🔧 Try these steps:');
    console.log('1. Install Netlify CLI: npm install -g netlify-cli');
    console.log('2. Login: netlify login');
    console.log('3. Run: npm run deploy-netlify');
}
