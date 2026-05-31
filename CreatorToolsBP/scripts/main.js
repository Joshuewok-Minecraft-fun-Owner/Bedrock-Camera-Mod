import { world, system } from "@minecraft/server";
import { CameraManager } from "./camera.js";
import { PrivacyManager } from "./privacy.js";
import { OptimizationManager } from "./optimization.js";
import { UIManager } from "./ui.js";

class CreatorTools {
  constructor() {
    this.cameraManager = new CameraManager();
    this.privacyManager = new PrivacyManager();
    this.optimizationManager = new OptimizationManager();
    this.uiManager = new UIManager(this.cameraManager, this.privacyManager, this.optimizationManager);
    this.playerSettings = new Map();
    this.init();
  }

  init() {
    // Listen for player joins
    world.afterEvents.playerSpawned.subscribe((event) => {
      this.onPlayerJoin(event.player);
    });

    // Listen for player leaves
    world.beforeEvents.playerLeave.subscribe((event) => {
      this.onPlayerLeave(event.player);
    });

    // Listen for chat commands
    world.beforeEvents.chatSend.subscribe((event) => {
      this.onChat(event);
    });

    console.warn("[Creator Tools] Script initialized successfully!");
  }

  onPlayerJoin(player) {
    const playerId = player.id;
    
    // Initialize player settings
    this.playerSettings.set(playerId, {
      cameraPreset: "cinematic",
      cameraSettings: {
        distance: 4,
        height: 1.5,
        sideOffset: 0,
        tilt: 0,
        fov: 80,
        smoothness: 0.8,
        orbitDistance: 5,
        orbitRotationSpeed: 2,
        staticDistance: 6
      },
      privacySettings: {
        hideServerIPs: false,
        hideChat: false,
        hidePlayerNames: false,
        hideHUD: false,
        hideCoordinates: false
      },
      optimizationSettings: {
        lowerParticleDensity: false,
        lowerAnimationTickRate: false,
        disablePostProcessing: false,
        simplifyEntityRendering: false,
        lowImpactMode: false
      }
    });

    // Show main menu
    system.run(() => {
      this.uiManager.showMainMenu(player, this.playerSettings.get(playerId));
      try {
        player.sendMessage('§eTip: Use /tools or !tools to open the Creator Tools menu');
      } catch (e) {
        // ignore if sendMessage is unavailable in this environment
      }
    });
  }

  onPlayerLeave(player) {
    this.playerSettings.delete(player.id);
  }

  onChat(event) {
    let message = String(event.message || '').trim();
    const player = event.sender;
    const settings = this.playerSettings.get(player.id);

    if (!settings || message.length === 0) return;

    // Accept both `!` and `/` prefixes for commands (e.g. `!tools` or `/tools`)
    const firstChar = message.charAt(0);
    if (firstChar !== '!' && firstChar !== '/') return; // not one of our commands

    const content = message.substring(1).toLowerCase();

    if (content === "tools") {
      event.cancel = true;
      this.uiManager.showMainMenu(player, settings);
    } else if (content === "camera") {
      event.cancel = true;
      this.uiManager.showCameraMenu(player, settings);
    } else if (content === "privacy") {
      event.cancel = true;
      this.uiManager.showPrivacyMenu(player, settings);
    } else if (content === "optimize") {
      event.cancel = true;
      this.uiManager.showOptimizationMenu(player, settings);
    } else if (content.startsWith("preset ")) {
      event.cancel = true;
      const presetName = content.substring(7).trim();
      this.cameraManager.applyPreset(player, presetName, settings);
    }
  }

  getPlayerSettings(playerId) {
    return this.playerSettings.get(playerId);
  }

  updatePlayerSettings(playerId, newSettings) {
    if (this.playerSettings.has(playerId)) {
      this.playerSettings.set(playerId, { ...this.playerSettings.get(playerId), ...newSettings });
    }
  }
}

// Initialize the mod
const creatorTools = new CreatorTools();

// Export for external access
export { creatorTools };
