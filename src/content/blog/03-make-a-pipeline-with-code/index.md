---
title: "Make a pipeline with code"
summary: "When Dev and Ops speak the same language"
date: "Mar 19 2025"
draft: false
tags:
- CI/CD
- Golang
---

Imagine a world where everybody speaks the same language. Life would be so much easier.
I have the chance to be a little bit fluent in English so I can travel almost everywhere and be able to make myself understandable.
That's what I was thinking before my travel to Japan.
I remember my very first hour in Tokyo. Maps was telling me to take a line but it was impossible to find it at the station.
So of course, my first instinct was to ask for help around me. But of the five people that I asked for help,
none was able to explain anything in plain english. So I decided to take the 40 minute walk with my 3 luggages under a rainy sky.
They were all very nice because they stopped and tried to help me but the language barrier was just too high.

The same thing can happen inside your IT services. (did you see this transition ?)
Developers speak with their programming languages such as Java, Kotlin, PHP... (real developers don't speak JS)
whereas Ops is more about YAML or Shell.
As a developer, editing a pipeline job in Azure (or any other version control platform) can be such a pain.
Come on, we're in 2025 and solutions like [Dagger.io](https://dagger.io/) exist.
Whaat ?? You don't know what Dagger is ? I can understand if you're not a Hyped Driven Developer like me.
Let me introduce you to in a world where the collaboration between developers and ops is at its peak.

# Dagger
![article thumbnail](/photos/dagger_golang_thumbnail.png)

Dagger is a tool that devs and/or ops can use to write pipelines.
It comes with multiple SDK such as Golang, Java or Typescript. You can even use GraphQl (can we call that code ? Imo, it's as legit as JavaScript)

Using Dagger for your pipeline comes with multiple advantages :

## Use code for pipelines
Yes it's the third time that I'm saying that, but damn.
In my list of things that I dislike there is JavaScript (by far) then markup based languages (yeah HTML, I'm looking at you) and indent based languages.

![Edge realising gif](https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzZ4Y3d5OHgzbWZhcWg3MXd6MGs3d2s4eGx3d21nbTU1cG14NXk5MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oFzmmHh9MsEZj5v0s/giphy.gif)
*<center>JS, HTML and Json combo, that's maybe why I don't like frontend</center>*

Getting off the traditional YAML pipeline of your Github Actions, or any other platform (all the ones that I tested use YAML files for the pipeline description), is so good.
It's now your choice if you want to apply some programming concepts to your pipelines.

![shock gif](https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2FzbWk2M3J0aHZpcXN0Y2NyZnAzdnRzeGNzdDU0bXk3a3R0M2FxOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VzkqdLrXovKQDSHNtp/giphy.gif)
*<center>Will I be the first to create a pipeline using hexagonal architecture ?</center>*

A hexagonal architecture can be too much in our case, but why not use interfaces to improve the separation of concerns,
I am even wondering about putting some tests for the pipeline.
Or you can use functional programming to make your pipeline more readable. (Officially no SDK exists for this now, but you can find community ones)

## Run pipeline locally
Maybe every team I worked with missed something, but every time we have to update pipeline jobs, the only way to know if everything is good is by pushing it to our repository.
The feedback cycle can be long depending on where your failing job is.
This real pain doesn't exist anymore with Dagger.
If you have their CLI and Docker on your computer, you can run it locally and fix your CI/CD problems at light speed.

## Kill the vendor lockin
I think it's something we don't speak about that much but the more you use a code hosting platform pipeline, the more it costs to get off this platform.
For example, if you are on Azure, you maybe wrote a hundred lines YAML file to define your pipeline's jobs. Now if you want to switch to another platform,
another pipeline definition is required.
Time is money, so the more time you use to migrate your pipelines, the more money you lose.
So you have to make calculations about how much you will save going on the new platform and how much the migration costs, to know if the operation is profitable.
This question doesn't come up with Dagger.

# Let's code
To explain how to write a pipeline with code I will create one on my [dead link parser](/projects/deadlinkparser) project. It's written in Go so let's use the Dagger's Go SDK.

## Dependecy
First, ensure you have Go 1.22 or later installed, then add the Dagger SDK to your existing Go module: 

```
    go get dagger.io/dagger@latest
```

## Setup
 
```
ctx := context.Background()

client, err := dagger.Connect(ctx)
if err != nil {
    fmt.Fprintf(os.Stderr, "Error connecting to Dagger: %v\n", err)
    os.Exit(1)
}
defer client.Close()

```
Here we're establishing our connection to the Dagger engine.
We create a context, then connect to dagger.
If something goes wrong, we print an error message and exit.  
With `defer client.Close()` we ensure that we disconnect properly when our code finishes.

## Setting up our container
```
src := client.Host().Directory(".")

golang := client.Container().
    From("golang:1.24").
    WithDirectory("/src", src).
    WithWorkdir("/src")

```
Now we're getting to the fun part! We're creating a container based on the official Go 1.24 image. Then we're saying:

1. "Take all that source code"

2. "Copy it into a folder called '/src' inside this container"

3. "Set that folder as the working directory"

## Installing project's dependencies
```
golang = golang.WithExec([]string{"go", "mod", "download"})
```
Before we can run tests, we need to download all our project's dependencies. This line executes the `go mod download` command inside our container.

## Running the tests
```
out, err := golang.WithExec([]string{"go", "test", "./..."}).
    Stdout(ctx)

if err != nil {
    fmt.Fprintf(os.Stderr, "Error running tests: %v\n", err)
    os.Exit(1)
}

```
The moment of truth! We're running all our tests with `go test ./...` (the ./... means "test everything in this project").
We capture the output so we can see what happened, and if anything goes wrong, we print the error and exit.

## Display the result
```
fmt.Println("Test output:")
fmt.Println(out)

```
Finally, we print out the test results. Did our tests pass? Did they fail? The answers are all here.

## A little bit of YAML still needed
I need to come clean, I wasn't being entirely honest earlier.
While Dagger does allow us to write our pipeline logic in Go, we still need a small amount of YAML to integrate with GitHub Actions or other CI platforms.

Here's how our Dagger pipeline would actually be triggered in a GitHub Actions workflow:

```
name: Test

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Dagger Test
        uses: dagger/dagger-for-github@8.0.0
        with:
          verb: run
          args: go run ci/dagger/main.go
          version: "latest"

```

This YAML file is the "glue" that tells GitHub Actions when to run our pipeline (on pushes to main or pull requests) and how to execute our Dagger code.
The actual pipeline logic remains in our Go code, but we need this small YAML wrapper to integrate with the CI platform.

The good news is that this YAML is minimal and mostly boilerplate, it's just telling GitHub Actions to check out our code and then run our Dagger pipeline.
All the complex logic of setting up containers, running tests, and handling dependencies stays in our Go code

This is the beauty of Dagger, developers and ops teams can finally speak the same language. And unlike my experience in Shibuya, there's no language barrier to overcome

## Asking for feedback
That's all for this article on Dagger, hope you liked it.
This was my first tech article (and not the last), on my way to get better every day,
feel free to send me a message on [Linkedin](https://www.linkedin.com/in/kevincarbeti/) if you have any feedback on my writing style or about something I said.

See you next time for my next article. ✌🏾
