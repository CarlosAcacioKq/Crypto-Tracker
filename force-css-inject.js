const fs = require('fs');
const path = require('path');

console.log('🎨 CSS Injection Script Starting...\n');

// Read the main CSS file
const cssPath = path.join('src', 'styles', 'main.css');
const cssContent = fs.readFileSync(cssPath, 'utf8');

// Create an enhanced client.ts file with inline CSS
const clientPath = path.join('src', 'client.ts');
let clientContent = fs.readFileSync(clientPath, 'utf8');

// Inject CSS directly into the client.ts file
const cssInjectionCode = `
// Force CSS injection at runtime
function injectCSS() {
    const cssContent = \`${cssContent.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`;
    
    const existingStyle = document.getElementById('main-css-injection');
    if (existingStyle) {
        existingStyle.remove();
    }
    
    const style = document.createElement('style');
    style.id = 'main-css-injection';
    style.textContent = cssContent;
    document.head.appendChild(style);
    
    console.log('✅ CSS injected directly into DOM');
}

// Inject CSS immediately when script loads
injectCSS();

// Also inject on DOM ready
document.addEventListener('DOMContentLoaded', injectCSS);
`;

// Insert CSS injection at the beginning of the file
const updatedClientContent = cssInjectionCode + '\n\n' + clientContent;

// Write the updated client file
fs.writeFileSync(clientPath, updatedClientContent);

console.log('✅ CSS injection code added to client.ts');
console.log('📏 CSS size:', (cssContent.length / 1024).toFixed(1), 'KB');
console.log('🎯 Run npm run build && npm start to test');
