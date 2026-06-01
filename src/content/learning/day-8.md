---
title: "Making a postman exporter"
date: 2026-05-29
tags: ['python', 'pytest', 'postman']
summary: "Pytest exporter done, working on the postman exporter to create postman collections of the test."
---

### Problems faced
- for the correct 200 status generation, need correct data to test, otherwise 404 for random data
- many apis do not actually follow their schema or spec, need to handle those too
