---
name: Corporate Precision
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#42474f'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#727780'
  outline-variant: '#c2c7d1'
  surface-tint: '#2d6197'
  primary: '#00355f'
  on-primary: '#ffffff'
  primary-container: '#0f4c81'
  on-primary-container: '#8ebdf9'
  inverse-primary: '#a0c9ff'
  secondary: '#0051d5'
  on-secondary: '#ffffff'
  secondary-container: '#316bf3'
  on-secondary-container: '#fefcff'
  tertiary: '#003756'
  on-tertiary: '#ffffff'
  tertiary-container: '#004e78'
  on-tertiary-container: '#74c1ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d2e4ff'
  primary-fixed-dim: '#a0c9ff'
  on-primary-fixed: '#001c37'
  on-primary-fixed-variant: '#07497d'
  secondary-fixed: '#dbe1ff'
  secondary-fixed-dim: '#b4c5ff'
  on-secondary-fixed: '#00174b'
  on-secondary-fixed-variant: '#003ea8'
  tertiary-fixed: '#cce5ff'
  tertiary-fixed-dim: '#93ccff'
  on-tertiary-fixed: '#001d31'
  on-tertiary-fixed-variant: '#004b73'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display:
    fontFamily: Outfit
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-mobile:
    fontFamily: Outfit
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Outfit
    fontSize: 26px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Outfit
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Outfit
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.005em
  title-md:
    fontFamily: Outfit
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: '0'
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: '0'
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.005em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

The design system projects institutional credibility, analytical clarity, and modern corporate authority. Engineered for high-stakes business platforms, fintech solutions, and executive tooling, the visual environment emphasizes precision, stability, and calm efficiency.

The design movement is **Corporate / Modern** underpinned by meticulous functional minimalism:
- **Atmosphere:** Restrained, sharp, and structured. Visual hierarchy is governed by strict typographic scale and calibrated tonal contrast rather than ornamental decorations.
- **Tone & Demeanor:** Confident, objective, and institutional. It replaces fleeting consumer trends with long-term enterprise utility.
- **Surface Philosophy:** Clean, flat planes layered with cold-slate neutral containers, micro-borders for tactile containment, and high-legibility typographic contrasts.

## Colors

The palette establishes an immediate sense of enterprise stability through deep navy sapphire and cobalt highlights, built over a cool-slate structural base.

### Palette Architecture
- **Primary (`#0F4C81`):** Corporate sapphire navy. Anchors high-priority interactive components, primary actions, deep brand framing, and key navigation states.
- **Secondary (`#2563EB`):** High-energy cobalt blue. Used for active focus states, dynamic interactive triggers, critical links, and selected states.
- **Tertiary (`#0284C7` / `#38BDF8`):** Sky/cyan accent. Reserved for informational badges, progress metrics, graphical telemetry, and secondary callouts.
- **Neutrals & Surfaces:**
  - `Canvas / App Background`: `#F8FAFC` (pure snow slate)
  - `Surface Tier 1 / Cards & Panels`: `#FFFFFF` (pure white)
  - `Surface Tier 2 / Inset Fields & Table Headers`: `#F1F5F9` (cool tinted neutral)
  - `Structural Borders & Dividers`: `#E2E8F0` (soft boundary line)
  - `Text Primary`: `#0F172A` (deep slate/almost black for maximum contrast)
  - `Text Secondary / Supporting`: `#475569`
  - `Text Subtle / Placeholder`: `#64748B`
- **Feedback & States:**
  - Success: `#059669` (surface `#ECFDF5`, border `#A7F3D0`)
  - Warning: `#D97706` (surface `#FFFBEB`, border `#FDE68A`)
  - Danger / Destructive: `#DC2626` (surface `#FEF2F2`, border `#FECACA`)

## Typography

The pairing blends the structured, geometric precision of **Outfit** for structural headings with the utilitarian readability of **Inter** for dense transactional UI and analytical body content.

- **Display & Headlines (Outfit):** Set with negative tracking to impart an authoritative, editorial finish. Used across section titles, dashboard metric anchors, and page headers.
- **Body & Controls (Inter):** Highly legible, neutral, and balanced. Standardized heights prevent layout jitter between weights.
- **Micro-labels & Telemetry (Inter):** Set in semibold with subtle tracking (+0.04em) when used for tabular metadata, badges, status flags, and table column headers.

## Layout & Spacing

A rigorous 8pt spatial grid anchors the structural cadence of the design system. 

- **Layout Structure:**
  - Desktop (>1024px): 12-column responsive fluid grid with max-width container cap at `1440px`. Gutters set to `1.5rem` (`24px`), outer margins at `2rem` (`32px`).
  - Tablet (768px - 1023px): 8-column layout with `1rem` (`16px`) gutters and `1.5rem` (`24px`) margins.
  - Mobile (<768px): 4-column layout with `1rem` (`16px`) gutters and `1rem` (`16px`) canvas margins.
- **Vertical Rhythm:** 
  - Section-to-section clearance uses `space-xl` or double `space-xl` (`64px`) for clear executive partitioning.
  - Sibling elements within containers use `space-sm` (`8px`) or `space-md` (`16px`).
  - Component internals use `space-xs` (`4px`) and `space-sm` (`8px`) for compact density.

## Elevation & Depth

Visual hierarchy relies on structural planes and subtle, high-diffusion ambient lighting rather than heavy drop shadows:

- **Surface Layering:**
  - `Level 0 (Canvas)`: `#F8FAFC` base environment.
  - `Level 1 (Default Card / Grid Plane)`: `#FFFFFF` bounded by a 1px border of `#E2E8F0`.
  - `Level 2 (Active/Hovered Card, Dropdown Menu)`: `#FFFFFF`, border `#CBD5E1`, with a low-opacity cool-slate shadow: `0 4px 12px -2px rgba(15, 23, 42, 0.06), 0 2px 6px -1px rgba(15, 23, 42, 0.03)`.
  - `Level 3 (Modal Dialogs, Popovers)`: `#FFFFFF` raised with a dual-stage shadow: `0 20px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04)` surrounded by a 1px stroke of `#CBD5E1`.
- **Dividers & Seams:** Crisp 1px strokes of `#E2E8F0` cleanly segment dense tabular grids and side rails without visual weight accumulation.

## Shapes

The design system maintains a **Soft** shape geometry (`roundedness: 1`):
- **Base Components (Inputs, Buttons, Badges):** `4px` (`0.25rem`) border radius. This subtle curvature softens sharp technical corners while preserving an institutional, crisp profile.
- **Surface Containers (Cards, Modals, Flyouts):** `8px` (`0.5rem`) border radius (`rounded-lg`).
- **Pills & Status Dots:** Fully rounded (`9999px`) exclusively for state badges, tags, and categorical indicators to distinguish them instantly from actionable controls.

## Components

### Buttons
- **Primary:** Background `#0F4C81`, text `#FFFFFF`, border none. Hover: `#0D3F6B`. Active/Focus: 2px ring `#2563EB` with 2px offset. Radius: `4px`. Height: `38px` (compact) or `44px` (regular).
- **Secondary / Action:** Background `#2563EB`, text `#FFFFFF`. Hover: `#1D4ED8`.
- **Outline / Neutral:** Background `#FFFFFF`, text `#0F172A`, border `1px solid #E2E8F0`. Hover: background `#F1F5F9`, border `#CBD5E1`.
- **Destructive:** Background `#DC2626`, text `#FFFFFF`. Hover: `#B91C1C`.

### Input Fields & Selects
- Height `40px`, padding `0 12px`, background `#FFFFFF`, border `1px solid #E2E8F0`, corner radius `4px`.
- Typography: `body-md` (Inter, 14px). Placeholder: `#64748B`.
- Focus State: Border color `#2563EB` with `0 0 0 3px rgba(37, 99, 235, 0.15)`.

### Cards & Data Panels
- Background `#FFFFFF`, border `1px solid #E2E8F0`, corner radius `8px`, internal padding `space-lg` (`24px`).
- Header dividers: 1px `#E2E8F0` horizontal line separating title from analytical canvas.

### Checkboxes & Radio Buttons
- 16x16px boxes, `3px` radius for checkboxes, full circle for radios.
- Unchecked: Border `1.5px solid #CBD5E1`, background `#FFFFFF`.
- Checked: Background `#0F4C81`, border `#0F4C81`, glyph white.

### Status Badges & Chips
- Corner radius: `9999px` (pill). Padding: `2px 8px`. Typography: `label-sm` (Inter, uppercase, semibold).
- `Neutral`: Background `#F1F5F9`, text `#475569`, border `1px solid #E2E8F0`.
- `Success`: Background `#ECFDF5`, text `#065F46`, border `1px solid #A7F3D0`.
- `Info/Accent`: Background `#F0F9FF`, text `#0369A1`, border `1px solid #BAE6FD`.

### Data Tables
- Header: Background `#F1F5F9`, text `#475569`, typography `label-sm`, bottom border `1px solid #CBD5E1`.
- Rows: Background `#FFFFFF`, alternating zebra (optional) `#F8FAFC`. Bottom row divider `1px solid #E2E8F0`. Row hover: `#F8FAFC`.