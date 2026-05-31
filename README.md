# 🎮 Creator Tools - Minecraft Mods

Professional camera, privacy, and optimization tools for **Bedrock** and **Java** editions.

## 🚀 Quick Install

### Bedrock Edition
1. Download `CreatorTools.mcaddon`
2. Double-click to install
3. Enable in world settings
4. Chat: `!tools` or `/tools`

### Java Edition (Fabric)
1. Install [Fabric Loader](https://fabricmc.net) for Minecraft 1.20.1
2. Download and install [Fabric API](https://modrinth.com/mod/fabric-api)
3. Download `CreatorTools-1.0.0.jar` and place in `mods/` folder
4. Launch Minecraft and press **P** to open menu

## 📦 What's Included

- 🎥 **Camera System**: 5 presets + 9 adjustable sliders
- 🛡️ **Privacy Tools**: Hide IPs, chat, names, HUD, coordinates
- 🚀 **Optimization**: Lower particles, animations, post-processing (up to 80% FPS gain)
- 🔄 **Auto-Update** (Java only): Automatic version checking with in-game notifications

## 📋 Directory Structure

```
Bedrock-Camera-Mod/
├── CreatorTools.mcaddon          ← Bedrock (Ready!)
├── CreatorToolsBP/               ← Bedrock Behavior Pack
├── CreatorToolsRP/               ← Bedrock Resource Pack
├── CreatorToolsJava/             ← Java Fabric Mod
│   ├── src/main/java/com/creatortools/
│   ├── build.gradle
│   └── README.md                 ← Java setup & auto-update guide
├── .github/workflows/
│   └── build-and-release.yml     ← Auto-publish on git tag
└── README.md                     ← You are here!
```

---

## 🎥 Bedrock: Camera System

### 5 Professional Presets
- **Cinematic** - Smooth third-person (distance: 4, height: 1.5, FOV: 70°)
- **Side** - Fixed side-view (distance: 5, height: 1.2, offset: 3)
- **Orbit** - Dynamic orbiting camera (distance: 6, height: 2, speed: 2)
- **Top-Down** - Bird's-eye view (height: 8, tilt: 90°)
- **Static** - Fixed professional camera (distance: 6, height: 1.6)

### 9 Adjustable Sliders
Distance • Height • Side Offset • Tilt • FOV • Smoothness • Orbit Distance • Orbit Speed • Static Distance

### Features
✅ Preview mode before applying  
✅ Smooth cinematic motion (no sway/wobble)  
✅ Per-player settings  
✅ Quick preset buttons  
✅ Camera reset option

---

## 🛡️ Bedrock: Privacy Tools

Toggle these in the UI:
- **Hide Server IPs** - Protect server information
- **Hide Chat** - Clean recording footage
- **Hide Player Names** - Privacy protection
- **Hide HUD** - Professional screenshots
- **Hide Coordinates** - Security toggle

---

## 🚀 Bedrock: Optimization

Individual toggles for:
- Lower particle density (~20% FPS)
- Lower animation tick rate (~15% FPS)
- Disable post-processing (~25% FPS)
- Simplify entity rendering (~20% FPS)

**Low-Impact Mode**: Master toggle enabling all (~80% FPS gain estimate)

---

## 📝 Bedrock: Commands

```
!tools or /tools              # Open main menu
!camera or /camera            # Camera tools
!privacy or /privacy          # Privacy settings
!optimize or /optimize        # Optimization menu
!preset <name> or /preset <name>   # Apply preset directly (cinematic, side, orbit, topdown, static)
```

---

## 🎯 Java Edition (Fabric)

See [CreatorToolsJava/README.md](CreatorToolsJava/README.md) for:
- Building from source
- Installation steps
- Auto-update system explained
- Developer workflow

---

## 📊 Project Stats

| Metric | Count |
|--------|-------|
| Total Features | 40+ |
| Camera Presets | 5 |
| Camera Sliders | 9 |
| Privacy Toggles | 5 |
| Optimization Features | 4 + Master |
| Editions | 2 (Bedrock + Java) |
| Code Lines | ~2,800 |
| Auto-Update | ✅ Java Only |

---

## 🎮 Distribution

**Bedrock**: Ready to share immediately (`CreatorTools.mcaddon`)

**Java**: Ready for Modrinth/CurseForge (GitHub Actions auto-publishes on git tag)

---

**Ready to stream or create professional Minecraft content!**