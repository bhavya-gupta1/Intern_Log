---
title: "Finalizing the app"
date: 2026-06-05
tags: ['python']
summary: "The first version of the app is final and complete"
---

## What I did?
- The app now inputs an API spec file (ingester)
- gives an option to choose the endpoint for which the tests to generate
- It then gives the endpoint details to the LLM and it returns the test cases in JSON format
- we now exports this JSON to postman collection and pytest test file
