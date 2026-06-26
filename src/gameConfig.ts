import Phaser from "phaser";
import { MainScene } from "./scenes/MainScene";

export const gameConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: "#1e3a5f",
  scene: MainScene,
};
