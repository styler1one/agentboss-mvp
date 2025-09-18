# Git Installation Script voor AgentBoss MVP
Write-Host "🔧 Installing Git for AgentBoss MVP..." -ForegroundColor Green

# Check if Chocolatey is installed
if (!(Get-Command choco -ErrorAction SilentlyContinue)) {
    Write-Host "Installing Chocolatey package manager..." -ForegroundColor Yellow
    Set-ExecutionPolicy Bypass -Scope Process -Force
    [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072
    iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
}

# Install Git via Chocolatey
Write-Host "Installing Git..." -ForegroundColor Yellow
choco install git -y

# Refresh environment variables
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

Write-Host "✅ Git installation completed!" -ForegroundColor Green
Write-Host "Please restart your PowerShell and run: git --version" -ForegroundColor Cyan

# Pause to show results
Read-Host "Press Enter to continue..."
