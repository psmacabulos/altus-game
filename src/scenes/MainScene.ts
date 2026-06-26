import Phaser from "phaser";

export class MainScene extends Phaser.Scene {
  private player!: Phaser.GameObjects.Rectangle;

  constructor() {
    super("MainScene");
  }

  create() {
    this.add.text(100, 50, "Altus Game 2");
    this.player = this.add.rectangle(0, 200, 60, 60, 0xffffff);
    this.triggerRep();
  }
  update() {
    this.player.x += 1;
    this.triggerRep();
  }
  public triggerRep() {
    this.player.y += 0.5;
  }
}
