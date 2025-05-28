const { execSync } = require('child_process');

console.log('🌐 Setting up custom domain...');

try {
  // Build the project
  console.log('📦 Building project...');
  execSync('npm run build', { stdio: 'inherit' });

  // Deploy to Vercel
  console.log('🚀 Deploying to Vercel...');
  execSync('vercel --prod', { stdio: 'inherit' });

  // Add domain
  console.log('🔗 Adding custom domain...');
  execSync('vercel domains add caproject-cryptotracker.com', { stdio: 'inherit' });

  console.log('✅ Domain setup complete!');
  console.log('📝 Please configure DNS records:');
  console.log('   A record: @ -> 76.76.19.61');
  console.log('   CNAME record: www -> cname.vercel-dns.com');
  
} catch (error) {
  console.error('❌ Error:', error.message);
  console.log('\n🔧 Try these troubleshooting steps:');
  console.log('1. Check DNS records at your registrar');
  console.log('2. Wait 24 hours for DNS propagation');
  console.log('3. Use: vercel domains inspect caproject-cryptotracker.com');
}
