# Project Roadmap

## Purpose

This roadmap outlines the overall direction of the project. It breaks the work into manageable milestones and serves as a guide for what needs to be built next.

The roadmap is intended to evolve as the project grows, so it should reflect the current priorities rather than acting as a fixed plan.


# 🏔️ Altus Game Roadmap

## Project Vision

Altus Game is a standalone Phaser 3 game package designed for the Altus fitness platform.

The game is intentionally decoupled from React, MediaPipe, and the backend API. It exposes a simple public API that allows any external application to control the game.

The first implementation will be **Summit Climb**, where each completed exercise repetition moves the player closer to the mountain summit.

The long-term vision is to support multiple fitness games while keeping the same public API.

---


# Core Engineering Principles

## 1. Decoupled Architecture

The game should never know where a repetition came from.

Possible input sources include:

* MediaPipe
* Keyboard
* Mouse
* Mobile sensors
* Future hardware

The game only responds to:

```
triggerRep()
```

---

## 2. Game as a Package

The Phaser game is treated as a reusable software package rather than being tightly coupled to a specific frontend.

Future applications should be able to import the package without modifying the game logic.

---

## 3. MVP First

Every feature must provide visible progress.

Avoid overengineering.

Build the simplest working solution before adding polish.

---

## 4. Learn by Building

This repository is also a learning project.

Every major feature should be understood before moving to the next milestone.

Official Phaser examples will be used as references rather than copied wholesale.

---

# Initial MVP

The first playable version will include:

* One player
* One mountain
* Camera following the player
* Score system
* Basic UI
* `triggerRep()` public API
* Win condition (reach the summit)

No MediaPipe integration.

No backend communication.

No authentication.

No multiplayer.

---

# Future Milestones

## Phase 1

Project Setup

* Initialize Phaser project
* Configure TypeScript
* Create project architecture

---

## Phase 2

Core Gameplay

* Player
* Mountain
* Camera
* Movement
* Score

---

## Phase 3

Game API

* createGame()
* triggerRep()
* start()
* pause()
* resume()
* destroy()

---

## Phase 4

Polish

* Animations
* Particles
* Sound
* Better UI
* Camera effects

---

## Phase 5

React Integration

* Embed game in React
* Connect MediaPipe
* Trigger gameplay from exercise detection

---

## Phase 6

Backend Integration

* Session statistics
* Score submission
* Leaderboards
* Achievements

---

# Long-Term Vision

The architecture should support multiple games without changing the frontend.

Examples include:

* Summit Climb
* Rocket Launch
* Temple Escape
* Dino Escape
* Balance Bridge

Each game should expose the same public API, allowing the frontend to swap games with minimal changes.
