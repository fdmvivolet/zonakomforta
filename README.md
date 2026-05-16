# 🤖 Autonomous AI Browser Agent MVP

[![Python Version](https://img.shields.io/badge/python-3.9%2B-blue.svg)](https://www.python.org/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-MVP-orange.svg)]()

An intelligent, autonomous browser agent capable of navigating the web, interacting with complex UIs, and completing multistep tasks with zero human intervention. Powered by large language models (LLMs) and Playwright, this agent operates on an **Observe → Decide → Act** loop to parse web elements, reason about its goals, and execute actions seamlessly.

---

## ✨ Key Features & Recent Updates

This repository represents a significantly evolved and hardened version of the original architecture. Recent major updates include:

- 🖥️ **New Web UI & Orchestration:** Transitioned from a pure CLI tool to a fully orchestrated system complete with a Web UI for monitoring agent progress, debugging states, and managing tasks visually.
- 🛡️ **SSRF Vulnerability Fixes:** Implemented strict outbound request filtering, local-network request blocking, and isolated browser sandboxing to prevent Server-Side Request Forgery attacks.
- 🧠 **Hardened LLM Safety & Retry Logic:** Added robust exception handling, structured JSON response enforcement, and intelligent backing-off retry mechanisms to recover gracefully from LLM hallucinations or parsing failures.
- 🎭 **Advanced Playwright Integration:** Enhanced DOM parsing system to extract interactive elements efficiently, reducing token bloat while maintaining full context of the page state.

## 🏗️ Architecture Overview

The agent operates on a continuous, autonomous cognitive loop:

1. **Observe:** The agent uses Playwright to capture the current state of the DOM. It extracts vital accessibility trees, interactive elements (buttons, inputs, links), and visual context, transforming them into a minimized representation.
2. **Decide:** The extracted state, along with the user's overarching goal, is passed to the LLM. The LLM reasons about the current state, checks it against past actions, and determines the next logical step.
3. **Act:** The LLM outputs a structured command (e.g., `click(element_id)`, `type(element_id, text)`). The orchestrator parses this command and executes it via Playwright.

This loop repeats until the LLM determines the terminal goal has been achieved or an unrecoverable state is reached.

## 🚀 Quick Start

### Prerequisites

- **Python:** 3.9 or higher
- **Node.js:** (Optional, if the Web UI requires a separate frontend build process)
- **API Keys:** You will need an API key for your chosen LLM provider (e.g., OpenAI, Anthropic).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/ai-browser-agent.git
   cd ai-browser-agent