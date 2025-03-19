---
title: "Deadlink Parser"
summary: "A website crawler written in Go"
date: "Mar 19 2025"
draft: false
tags:
- Go
- Goroutine
- CLI
repoUrl: https://github.com/CarbeDev/deadLinkParser
---

I recently developed a web link parser application to demonstrate my language-agnostic programming abilities. Despite not having prior experience with Go, I took on this challenge when applying for a position requiring Go expertise.

The application is a command-line interface tool written in Go that efficiently crawls websites by parsing links.
Users simply input a URL, and the parser:

- Extracts all links from the provided webpage

- Recursively parses each discovered link

- Utilizes goroutines for concurrent processing, significantly improving performance

- Implements intelligent crawling by checking each link only once

- Respects domain boundaries by only parsing links within the original domain

This project showcases my ability to quickly adapt to new programming languages and implement complex functionality like concurrent processing. 
