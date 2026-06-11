"use strict";
import gradient from 'gradient-string';
import makeWASocket from './Socket/index.js';
const banner = `
╔═════════════════════════════════════════════════════════════════╗
║         ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄          ║
║        ▐░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▌         ║
║        ▐░░░░░░░░░░ K A N E K I ░░░░░░░░░░░░░░░░░░░░░▌           ║
║        ▐░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▌         ║
║        ▐░░░░░████░░░░███░░░███░░░████░░░████░░░████░░░▌         ║
║        ▐░░░░███░░██░░███░░░███░░███░░██░███░░██░███░░░▌         ║
║        ▐░░░░██░░░░██░░███░░░███░░██░░░██░██░░░██░██░░░░▌        ║
║        ▐░░░░██░░░░██░░█████████░░███████░███████░███░░░▌        ║
║        ▐░░░░██░░░░██░░███░░░███░░██░░░██░██░░░██░██░░░░▌        ║
║        ▐░░░░███░░██░░░███░░░███░░██░░░██░██░░░██░███░░░▌        ║
║        ▐░░░░░████░░░░░███░░░███░░██░░░██░██░░░██░████░░▌        ║
║        ▐░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▌         ║
║        ▐░░░░░░  𝕋𝕙𝕖 𝔹𝕝𝕒𝕔𝕜 ℝ𝕖𝕒𝕡𝕖𝕣  ░░░░░░░░░░░░░░░░░░░▌        ║
║        ▐░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░▌         ║
║         ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀          ║
╚═════════════════════════════════════════════════════════════════╝
`;

const info = `
┌───────────────────────────────────────────────────────────────────────┐
│  ██╗  ██╗ █████╗ ███╗   ██╗███████╗██╗  ██╗██╗                        │
│  ██║ ██╔╝██╔══██╗████╗  ██║██╔════╝██║ ██╔╝██║                        │
│  █████╔╝ ███████║██╔██╗ ██║█████╗  █████╔╝ ██║                        │
│  ██╔═██╗ ██╔══██║██║╚██╗██║██╔══╝  ██╔═██╗ ██║                        │
│  ██║  ██╗██║  ██║██║ ╚████║███████╗██║  ██╗██║                        │
│  ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝╚═╝                        │
│                                                                       │
│  🩸 “I’m not the protagonist of a novel or anything…”                │
│  ⛓️   The Black Reaper · Centipede · One-Eyed King                   │
│                                                                       │
├───────────────────────────────────────────────────────────────────────┤
│  🧬 DNA Cloning · Identity Spoofing · Device Simulation              │
│  🔴 Kakugan Activated · Multi-Device · End-to-End Encryption         │
│  🐛 Centipede Protocol · Rize’s Blessing · Business API              │
│  🎭 Masked Identity · RC Cell Suppression · Anti-Ban                 │
│                                                                       │
│  💀 Eat or be eaten.                                                 │
│  📚 github.com/kenzki63/baileys                                      │
│  ☕ Join the Anteiku community for support                           │
└───────────────────────────────────────────────────────────────────────┘
`;

// Print banner with gradient
console.log(gradient(['#00D4FF', '#0099FF', '#00D4FF'])(banner));

// Print info with gradient
console.log(gradient(['#FFD700', '#FF6B6B', '#4ECDC4'])(info));

// Startup message
console.log(gradient(['#00FF88', '#FFFFFF'])('\n🎯 Initializing Baileys Socket Connection...\n'));

export * from '../WAProto/index.js';
export * from './Utils/index.js';
export * from './Store/index.js';
export * from './Types/index.js';
export * from './Defaults/index.js';
export * from './WABinary/index.js';
export * from './WAM/index.js';
export * from './WAUSync/index.js';
export * from './Socket/index.js';

export {
    makeRegistrationSocket,
    registrationParams,
    mobileRegisterCode,
    mobileRegisterExists,
    mobileRegisterEncrypt,
    mobileRegisterFetch,
    getBanDetails
} from './Socket/registration.js';

export default makeWASocket;