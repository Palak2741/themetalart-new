# PowerShell Deployment Script for The Metal Art Website
# Run this script to build and prepare for deployment

Write-Host "🚀 The Metal Art - Deployment Script" -ForegroundColor Green
Write-Host "=====================================" -ForegroundColor Green

# Check if Node.js is available
try {
    $nodeVersion = & "C:\Program Files\nodejs\node.exe" --version
    Write-Host "✅ Node.js found: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js not found. Please install Node.js first." -ForegroundColor Red
    exit 1
}

# Install dependencies
Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
& "C:\Program Files\nodejs\npm.cmd" install

# Build the project
Write-Host "🔨 Building static website..." -ForegroundColor Yellow
& "C:\Program Files\nodejs\npm.cmd" run build

# Check if build was successful
if (Test-Path "build\index.html") {
    Write-Host "✅ Build successful!" -ForegroundColor Green
    Write-Host "📁 Build files created in 'build/' directory" -ForegroundColor Green
    
    # Create deployment zip
    Write-Host "📦 Creating deployment package..." -ForegroundColor Yellow
    $zipPath = "themetalart-deploy.zip"
    if (Test-Path $zipPath) {
        Remove-Item $zipPath
    }
    Compress-Archive -Path "build\*" -DestinationPath $zipPath
    
    Write-Host "✅ Deployment package created: $zipPath" -ForegroundColor Green
    Write-Host ""
    Write-Host "🎯 Next Steps:" -ForegroundColor Cyan
    Write-Host "1. Set up Formspree forms (see DEPLOYMENT.md)" -ForegroundColor White
    Write-Host "2. Upload $zipPath to Hostinger" -ForegroundColor White
    Write-Host "3. Extract files to public_html/" -ForegroundColor White
    Write-Host "4. Configure domain and SSL" -ForegroundColor White
} else {
    Write-Host "❌ Build failed! Check for errors above." -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "🎉 Deployment preparation complete!" -ForegroundColor Green 