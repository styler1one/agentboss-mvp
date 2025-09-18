# 🚀 AgentBoss MVP - Lokale Setup

## Stap-voor-stap Setup (5 minuten)

### 1. **Navigeer naar de directory**
```bash
cd "c:\Users\g.menting\OneDrive - GAC Business Solutions\Profielfotos Geert\AgentBoss-Platform-Docs\agentboss-mvp"
```

### 2. **Installeer Node.js dependencies**
```bash
npm install
```

Als je errors krijgt, probeer:
```bash
npm install --legacy-peer-deps
```

### 3. **Start de development server**
```bash
npm run dev
```

### 4. **Open je browser**
```
http://localhost:3000
```

## ⚠️ Troubleshooting

### Error: "Cannot find module"
```bash
# Verwijder node_modules en herinstalleer
rmdir /s node_modules
del package-lock.json
npm install
```

### Error: "Module not found: Can't resolve '@/'"
Dit betekent dat TypeScript de paths niet kan vinden. Run:
```bash
npm run dev
```
En wacht tot de server volledig is opgestart.

### Error: "Failed to compile"
```bash
# Check of alle bestanden er zijn
dir components\ui
dir app
dir lib
```

### Port 3000 al in gebruik
```bash
npm run dev -- -p 3001
```
Dan open: http://localhost:3001

## 📁 Bestandsstructuur Check

Zorg dat je deze bestanden hebt:
```
agentboss-mvp/
├── package.json ✅
├── next.config.js ✅
├── tailwind.config.js ✅
├── tsconfig.json ✅
├── .eslintrc.json ✅
├── app/
│   ├── globals.css ✅
│   ├── layout.tsx ✅
│   └── page.tsx ✅
├── components/
│   ├── ui/ (alle UI componenten) ✅
│   ├── Header.tsx ✅
│   ├── HeroSection.tsx ✅
│   ├── ROICalculator.tsx ✅
│   ├── ExpertNetwork.tsx ✅
│   ├── AgentMarketplace.tsx ✅
│   ├── StatsSection.tsx ✅
│   └── Footer.tsx ✅
└── lib/
    └── utils.ts ✅
```

## 🎯 Snelle Test

Als alles werkt, zie je:
1. **AgentBoss.nl logo** in de header
2. **Blauwe gradient hero** sectie
3. **"Van AI-chaos naar AI-succes"** headline
4. **Live counter** die elke paar seconden update
5. **ROI calculator** met werkende sliders
6. **Expert cards** met hover effecten

## 🚀 Alternative: Static Export

Als de development server problemen geeft, maak een static export:

### 1. Update next.config.js
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
```

### 2. Build en export
```bash
npm run build
```

### 3. Open de static files
```bash
# De bestanden staan nu in de 'out' folder
# Open out/index.html in je browser
```

## 📱 Mobile Test

Test op verschillende schermen:
- **Desktop:** Volledig layout
- **Tablet:** Responsive grid
- **Mobile:** Stacked layout

## 🎨 Customization

### Wijzig kleuren voor demo:
```css
/* app/globals.css - regel 4 */
--primary: 210 100% 12%;    /* Agent Navy */
--secondary: 195 100% 50%;  /* Agent Blue */
--accent: 142 76% 36%;      /* Agent Green */
```

### Update live metrics:
```typescript
/* components/StatsSection.tsx - regel 8 */
agentsDelivered: 1500,      // Verhoog voor impact
companiesServed: 200,       // Meer bedrijven
totalROI: 15000000,         // €15M ziet er beter uit
```

## 🎯 Demo Checklist

Voor investor demo:
- [ ] Pagina laadt binnen 2 seconden
- [ ] Live counters werken
- [ ] ROI calculator reageert op sliders
- [ ] Expert cards zijn klikbaar
- [ ] Responsive op tablet/mobile
- [ ] Geen console errors
- [ ] Professional uitstraling

## 💡 Pro Tips

### Voor laptop presentaties:
- Zoom browser naar 125% voor betere zichtbaarheid
- Gebruik full-screen mode (F11)
- Test alle interacties vooraf

### Voor tablet demos:
- iPad landscape mode werkt perfect
- Touch interactions voelen natuurlijk
- Easy om door te geven aan investeerders

## 🆘 Laatste Redmiddel

Als NIETS werkt, gebruik de HTML versie uit QUICK-START.md:
1. Kopieer de HTML code
2. Sla op als `demo.html`
3. Dubbelklik om te openen
4. 100% werkende demo zonder dependencies!

---

**Success = AgentBoss.nl draait lokaal op localhost:3000! 🚀**
