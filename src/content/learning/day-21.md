---
title: "Adding model selection in the app"
date: 2026-06-17
tags: ['python', 'google-genai']
summary: "Adding the option to choose different models of the same provider and adding option to add new providers too."
---

## What I did?
- Added an abstract class of a provider object that new providers have to follow
- added option to fetch all the models of the same provider and choose from them. 
- added a blueprint to insert new providers
