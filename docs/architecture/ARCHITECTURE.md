# Architecture

## Purpose

This document describes the overall architecture of the Altus Game project. It explains how the different parts of the game fit together, how the public API is designed, and how the game communicates with external applications such as the React frontend.

Whenever the structure of the project changes or a major architectural decision is made, this document should be updated.

---

# High-Level Architecture

The Altus Game project is designed as a standalone Phaser package that can be embedded into any web application.

Rather than communicating directly with MediaPipe or the backend, the game exposes a small public API. External applications are responsible for providing input and consuming the game results.

This keeps the game independent, reusable, and easy to test.

```text
                        Browser

                 React Frontend
      ┌────────────────────────────┐
      │                            │
      │ Authentication             │
      │ Dashboard                  │
      │ MediaPipe                  │
      │                            │
      │     triggerRep()           │
      └─────────────┬──────────────┘
                    │
                    ▼
             Altus Game Package
      ┌────────────────────────────┐
      │        Phaser Engine       │
      │                            │
      │ Summit Climb               │
      │ Player                     │
      │ Camera                     │
      │ Score                      │
      └─────────────┬──────────────┘
                    │
            Session Statistics
                    │
                    ▼
              Altus Backend API
                    │
                    ▼
                PostgreSQL
```

---

# Design Principles

The project follows a few core principles that will guide future development.

## Standalone

The game should run independently without requiring React, MediaPipe, or the backend.

---

## Decoupled

The game should never know where a repetition originated.

Whether a repetition comes from:

* MediaPipe
* Keyboard
* Mouse
* Automated testing

the game should respond in exactly the same way.

---

## Public API

External applications communicate with the game through a small public interface.

The initial API is expected to include:

* createGame()
* start()
* triggerRep()
* pause()
* resume()
* destroy()

The implementation behind these methods may change over time, but the public interface should remain stable whenever possible.

---

## Separation of Responsibilities

The React application is responsible for:

* User interface
* Authentication
* MediaPipe
* Backend communication

The game is responsible for:

* Gameplay
* Rendering
* Physics
* Score calculation
* Session statistics
