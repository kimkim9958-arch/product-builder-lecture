# Lotto Number Generator

## Overview

This is a simple web application that generates random lottery numbers. It features a modern, responsive design with dark mode support and AI-themed interactive elements.

## Features

*   **Lotto Number Generation:** Generates 6 unique random numbers between 1 and 45.
*   **AI-Themed Interactions:**
    *   **Thinking State:** Simulates a processing delay when generating numbers to create an "AI" feel.
    *   **Staggered Animation:** Numbers appear one by one with a smooth fade-in and scale-up effect.
    *   **Glow Feedback:** The generation button glows during the "thinking" process.
*   **Visual Display:** Numbers are displayed in stylish circles with dynamic shadows.
*   **History Tracking:** Keeps a record of previously generated numbers, with the latest ones at the top.
*   **Dark Mode:** Supports toggling between light and dark themes with persistent storage.
*   **AI Branding:** Header title is "로또 번호 생성기 by AI".

## Implementation Details

*   **HTML:** Semantic structure using `<header>`, `<main>`, and `<section>`.
*   **CSS:** Modern CSS features including animations (`@keyframes`), flexbox for layout, and CSS variables for themes.
*   **JavaScript:** Asynchronous logic (`async/await`) for simulating AI processing and `setTimeout` for staggered animations.

## Current Status

*   **Build Status:** Finalized and ready for preview.
*   **Visual Enhancements:** Applied AI-themed animations, "thinking" states, and a modern dark mode toggle.
*   **Environment:** Configured for IDX preview via Python 3 server.
*   **Deployment Status:** Latest changes are **committed locally** but **not yet pushed** to GitHub.
*   **Action Required:** Run `git push origin main` to trigger Cloudflare Pages deployment.

## Deployment Plan

1.  **Code Review:** Verify all AI features (animations, staggered entry, history tracking) are functional.
2.  **Commit:** Changes have been committed to the `main` branch.
3.  **Push:** Push to `origin main` to trigger the automated Cloudflare Pages build.
4.  **Verification:** Confirm the live URL reflects the new features.
