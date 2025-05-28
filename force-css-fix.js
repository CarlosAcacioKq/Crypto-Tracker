const fs = require('fs');
const path = require('path');

console.log('🔧 Running Force CSS Fix tool...');

// Ensure directories exist
const dirs = ['public', 'public/styles'];
dirs.forEach(dir => {
    try {
        fs.mkdirSync(dir, { recursive: true });
        console.log(`✅ Directory ensured: ${dir}`);
    } catch (e) {
        console.log(`✅ Directory already exists: ${dir}`);
    }
});

// Source CSS file path
const srcCSSPath = path.join('src', 'styles', 'main.css');
if (!fs.existsSync(srcCSSPath)) {
    console.error(`❌ Source CSS file not found at ${srcCSSPath}`);
    process.exit(1);
}

// Target CSS file path
const targetCSSPath = path.join('public', 'styles', 'main.css');

try {
    // Read the CSS content
    const cssContent = fs.readFileSync(srcCSSPath, 'utf8');
    
    // Add !important to all CSS rules to force them to apply
    const importantCss = cssContent
        .replace(/\s*!important/g, '') // Remove any existing !important
        .replace(/;(?!\s*})/g, ' !important;') // Add !important to all rules that end with ;
        .replace(/([^;{}]):(?!\s*[^\s{};]*(;|}|\s*\/\*))/g, '$1: '); // Fix property definitions without a trailing semicolon
    
    // Write the modified CSS to the public directory
    fs.writeFileSync(targetCSSPath, importantCss);
    
    console.log(`✅ Enhanced CSS written to ${targetCSSPath}`);
    
    // Create a test HTML file to verify CSS works
    const testHtmlPath = path.join('public', 'css-test.html');
    const testHtml = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Test Page</title>
    <link rel="stylesheet" href="/styles/main.css">
    <style>
        /* Fallback styles in case external CSS fails */
        body { 
            font-family: Arial, sans-serif; 
            background-color: #1e293b; 
            color: white;
            padding: 20px;
            margin: 0;
        }
        .test-card {
            background-color: #334155;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <div id="css-debug" style="position:fixed;top:10px;right:10px;background:#10b981;color:white;padding:8px 12px;border-radius:4px;font-weight:bold;">
        Checking CSS...
    </div>
    
    <h1>CSS Test Page</h1>
    <p>This page tests if the CSS is properly loaded.</p>
    
    <div class="test-card">
        <h2>Test Card 1</h2>
        <p>If styling works, this card should have proper styling from main.css</p>
    </div>
    
    <div class="coin-card">
        <h3>Bitcoin (BTC)</h3>
        <div class="coin-card-price">$45,000</div>
        <div class="coin-card-change positive">+2.5%</div>
    </div>
    
    <script>
        // Check if CSS is loaded correctly
        window.addEventListener('load', function() {
            setTimeout(function() {
                const debugElem = document.getElementById('css-debug');
                const styleSheets = document.styleSheets;
                let mainCSSLoaded = false;
                
                for (let i = 0; i < styleSheets.length; i++) {
                    try {
                        const href = styleSheets[i].href;
                        if (href && href.includes('main.css')) {
                            mainCSSLoaded = true;
                            break;
                        }
                    } catch(e) {}
                }
                
                if (mainCSSLoaded) {
                    debugElem.textContent = 'CSS: ✅ Loaded';
                    debugElem.style.backgroundColor = '#10b981';
                } else {
                    debugElem.textContent = 'CSS: ❌ Failed';
                    debugElem.style.backgroundColor = '#ef4444';
                }
                
                // Also check computed styles
                const card = document.querySelector('.coin-card');
                if (card) {
                    const styles = window.getComputedStyle(card);
                    const bgColor = styles.backgroundColor;
                    
                    // Add style check result
                    const styleCheck = document.createElement('div');
                    styleCheck.style.padding = '8px';
                    styleCheck.style.margin = '20px 0';
                    styleCheck.style.border = '1px solid #64748b';
                    styleCheck.innerHTML = '<h3>Style Check Results:</h3>' +
                        '<p>Background color: ' + bgColor + '</p>' +
                        '<p>Should be in RGB format if styles loaded correctly</p>';
                    document.body.appendChild(styleCheck);
                }
            }, 1000);
        });
    </script>
</body>
</html>`;

    fs.writeFileSync(testHtmlPath, testHtml);
    console.log(`✅ Created CSS test page at ${testHtmlPath}`);
    
} catch (err) {
    console.error('❌ Error processing CSS:', err.message);
    process.exit(1);
}

console.log('\n🚀 CSS Fix Complete! Next steps:');
console.log('1. Run: npm run build');
console.log('2. Run: npm start');
console.log('3. Visit: http://localhost:3000');
console.log('4. If still having issues, check: http://localhost:3000/css-test.html');
console.log('\nDebug Steps:\n- Check browser console for errors\n- Verify public/styles/main.css exists and has content');
