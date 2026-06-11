---
title: "Adding view docs"
date: 2026-06-10
tags: ['python', 'Redoc']
summary: "Adding a feature to view the docs, auto generated docs from the spec file, in the app, and gnerating the docs on the go."
---

## What I did?
- *Redocly* the popular docs project uses `Redoc` rendered to generate and render docs from any OpenAPI spec file.
- I used its feature to generate the docs and render it using `Redoc` in the app.
- Streamlit have a `html` componenet that renders custom html components.
- Using that and Redoc's html method, we can easily embed a html script with Redoc that will generate and render the docs of uploaded spec file.
- First using the parsed file and then `json.dumps` in the html file to create the docs using Redocs.

