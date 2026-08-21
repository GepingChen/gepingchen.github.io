---
title: "Agentic TabCF"
summary: "An auditable causal-analysis agent for TabCF that compiles bounded natural-language requests into typed specifications, delegates numerical work to deterministic tools, blocks unsupported claims, and links displayed results to verifiable evidence."
startDate: "2026-08"
endDate: null
status: "active"
kind: "engineering"
role: "Project architect and lead developer"
contributions:
  - "Built the explicit agent state machine, typed causal contracts, support gates, evidence ledger, and independent artifact verifier."
  - "Separated the static prepared replay from user-owned Colab execution so the public site uses no owner API key, quota, or runtime."
  - "Implemented fail-closed Gemini and managed TabPFN boundaries with no hidden numerical arithmetic or sklearn fallback."
methods:
  - "Causal inference"
  - "Agent state machines"
  - "Evidence provenance"
  - "Static web architecture"
links:
  - label: "Demo"
    url: "https://gepingchen.github.io/projects/dcfa/"
  - label: "Colab"
    url: "https://colab.research.google.com/github/GepingChen/DCFA/blob/main/notebooks/DCFA_Custom_Analysis_Colab.ipynb"
tags:
  - "Causal agents"
  - "Tabular foundation models"
  - "Python"
featured: true
order: 2
draft: false
visibility: "public"
sources:
  - "local-source:DCFA"
  - "dcfa-release:87b2b750d1c9a83497f5b16a7b0597758214d20a"
  - "dcfa-prepared-release:sha256:4b686a1ee94b52ef573e84c3d0f71233bba11802604a4787bbbcd2c7d35c50af"
---
