# Engineering Decisions

## Purpose

This document records the important technical decisions made throughout the project. Instead of only documenting what was built, it explains why a particular approach was chosen and what alternatives were considered.

Having a written history of these decisions will make it easier to understand the project in the future and to explain the reasoning behind the architecture during presentations or interviews.

# Decision 001 - Build the Game as a Standalone Project

**Date:** 2026-06-26

## Decision

The Altus game will be developed as a standalone Phaser project in its own repository instead of being built directly inside the React frontend.

## Why?

I want the game to be independent from the rest of the application. The frontend should only be responsible for hosting the game and sending events to it, while the game focuses entirely on gameplay.

Developing the game separately will also make it easier to learn Phaser, test features in isolation, and avoid introducing changes to the frontend while the game is still under active development.

## Alternatives Considered

- Build the game directly inside the React project.
- Create the game as part of a monorepo from the beginning.

## Outcome

The game will be developed in its own repository first. Once the public API is stable, it will be integrated into the React application.

# Decision 002 - Design Around a Public API

**Date:** 2026-06-26

## Decision

The game will expose a small public API that can be called by external applications.

## Why?

The game should not depend on MediaPipe, React, or any other specific technology. Instead, it should respond to simple method calls such as `triggerRep()`, allowing different input sources to control the gameplay.

This keeps the game reusable and makes it easier to test without needing the rest of the Altus platform.

## Initial API

- createGame()
- start()
- triggerRep()
- pause()
- resume()
- destroy()

## Outcome

All communication between the frontend and the game will happen through this public API.

# Decision 003 - MVP Before Polish

**Date:** 2026-06-26

## Decision

The first goal is to build a simple but complete playable game before adding visual polish.

## Why?

It's easy to spend time on animations, artwork, and effects before the core gameplay is working. I want to focus on proving the game loop and architecture first.

The initial version should demonstrate that:

- the game loads correctly,
- the player can progress,
- `triggerRep()` works,
- the game can report session data.

Once those pieces are in place, visual improvements can be added with confidence.

## Outcome

Gameplay and architecture take priority over graphics and effects during the MVP phase.

---

# Decision 004 - main.ts will remain minimal and delegate startup responsibilities

**Date:** 2026-06-26

## Decision

I want to build the game with scalability in mind so the separation of concerns like the camera, scenes will be on a separate file to ensure it is easy to understand , debug and build

## Why?

- After studying in Holberton, I realized building code is not just a 1 file  chunk of code. After 6 months it will be hard to read and even harder to debug so I want to follow the best practice.

## Outcome



---
**Last Updated:** 2026-06-26

**Updated By:** Patrick Macabulos