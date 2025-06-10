---
title: "What's in my Raycast?"
summary: "A deep dive into my favorite tool on Mac and why you should give it a try"
date: "May 31 2025"
draft: false
tags:
- Dev XP
---

# I bought a Mac

I used to judge people who bought a Mac without any real justification.
So many students buy a Mac just to write a few words. It's way too expensive for that kind of use.
Some will tell me it's because of the ecosystem.
And I do like what Apple has done, but nowadays most companies can offer the same thing for half the price. Look at the Samsung's or Huawei's ecosystems.  
The only truly viable reason is the ARM processor. The M-series chips are absolute beasts, no doubt. But they're not meant for casual users.  
As a developer, I was a Linux user. I used Zorin OS (based on Ubuntu) as my distro for the last four years.
In my opinion, it's the best distro if you're coming from Windows.
You get tons of customization options to make your machine look and feel like what you're used to.
You can even download the Zorin app on your phone and share files and links just like you would between an iPhone and a Mac.  
As a gamer, I'm a Windows user. Just out of laziness.
I don't want to worry about game compatibility or components.
Thanks to Valve's work on the Steam Deck, maybe I should give Linux gaming a shot. I'll see about that later. Never mind.
But guys, I did it. Six months ago, I bought a Mac. A sweet M2 MacBook Air. And I'm happy with it.

## Why did I choose Apple ?
As I said earlier, M-series processors are unreal. Better than most other chips, and without the heat.
That’s a real game changer.
If you’ve read [my first article](/blog/01-who-am-i), you know I’m a Kotlin developer, so of course I use the JVM and of course, I used to waste a lot of time compiling.
Well, that’s ancient history now.
Compilation takes just a few seconds. And at the end of the day, that makes a huge difference.

Let’s not forget about battery life.
I don’t know any other laptop that can last a whole workday and still have 50% battery left by the end.

I could also talk about app installation.
Installing some apps on Linux was a bit annoying. You know, when a package isn’t available in the APT repository,
so you have to download the source, unpack it, and manually move it into your bin.
The user experience isn’t always the best on Linux.

Another point about apps: you know I’m a Hype-Driven Developer and I love trying everything new. And let’s be honest—most new apps launch on Mac first.
Take the Arc browser for example, or the app I’m talking about today.
It’s become such an essential part of my workflow, I seriously can’t live without it

Ladies and gentlemen, please welcome...
[**Raycast**](https://www.raycast.com/)!

![Triple H clapping GIF](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWlrMTgxdTJiOHFpd2p2YWx4MGh5aTdkdXBxNGcxa2xwanptaXZsOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1aVUmsFlGWsBG/200.webp)
*<center>What an intro. I think I deserve a round of applause!</center>*

# What is Raycast ?

Do you see what Spotlight is? I hope so, otherwise you’re not a Mac user (totally understandable), or you’re the type of person who uses the dock.  
![stupid homer simpson monkey brain meme](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGM3OG9kODRicmhqZWQ3d2N6eWg3MTl1ejg0dXRxcHF0N3M2cTVrZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZIG63RdogLgqI/giphy.webp)  
*<center>What's happening in the head of people using the Mac dock</center>*  

Don’t worry, you’re in a safe space, there’s no real judgment here, just some friendly teasing ❤️.  

The best way to describe Raycast is: **"Spotlight on steroids."**  
It’s the ultimate productivity tool you need on your computer.  

You can not only launch apps, but also:  

![raycast search flight screenshot](/photos/raycast_search_flight.png)  
*<center>Track a flight</center>*  

![raycast currency converter screenshot](/photos/raycast_currency.png)  
*<center>Convert currency</center>*  

![raycast calculator screenshot](/photos/raycast_calculator.png)  
*<center>Or use it as a calculator</center>*  

You might say, "Ok Kevin, that’s cool, but none of these features are game changers."  
And I agree with you.  

Raycast gives you so much power in a single app that I can’t explain it all in one article.
But here are the features I use the most:


# Best features

## Shortcuts
Raycast gives you the possibility to run an app with a keyboard shortcut (maybe it's possible to do it natively on Mac, I don't know).  
To avoid interfering with built-in shortcuts, it's recommended to use `ctrl + option + cmd + shift`.  
That way, you shouldn't trigger any system shortcuts.  
But let’s be honest, it’s a bit annoying to press all those keys (+ another one) just to launch an action.  

The Raycast team came up with a solution: **the Hyper Key**.  
By pressing a single key, you can trigger `ctrl + option + cmd + shift` all at once.  

I set the Hyper Key on **Caps Lock**.  
The only downside? Now I can’t lock caps 🥺 (which means I’ll never write SQL again).  
![I'm joking](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2ptMDkxMW1qNzg4bzQxY2NxMm1sZWY5ZHdmdmo0cTM0YXIza2Z0byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bUPaGfkXmEE1F17MiA/giphy.webp)  

Of course not. You can (and IMO, you should) set the behavior to quick press.  
Now I can use Caps Lock as a Hyper Key and still keep its original function.  

Now that the Hyper Key is ready, we can start creating our shortcuts.  
I use them mainly for two things: launching apps quickly and resizing windows.

I’ve set shortcuts for my most used apps, for example:  
- **Hyper + T** → Warp (hands down the best terminal)  
- **Hyper + W** → Arc (great browser, but not maintained anymore, might switch in the next few months)  
- **Hyper + I** → IntelliJ (I’m a JetBrains guy)
- **Hyper + F** → Fullscreen


## Snippets
There’s nothing more annoying than having to repeat the same thing over and over.  
When using a computer, whatever you're doing, you’ve definitely run into this.  
An email you send often, a command you always forget right when you need it...  

What I used to do was keep those in Notion pages, then copy-paste them whenever needed.  
Used to, because now I don’t anymore.  

Just like in an IDE, Raycast lets you configure text snippets.  
I mostly use them to keep code I write frequently, like test templates, for example.

To use Raycast snippets, you’ve got two options:  
- Type "Snippets" in the Raycast bar and search for the one you need  
- Or assign a keyword to a snippet  

Choose your keywords carefully, because once they’re set, every time you type that word, Raycast will auto-replace it with the snippet.  

My advice: prefix your keywords with a symbol (I use ";").  
For example, for my Kotlin test snippet, I use `;ktest`.

![Raycast snippet demo](/photos/raycast_snippet.gif)

Why not use IntelliJ’s snippet feature instead? Because Raycast is just better:  
- It works everywhere, not just in IntelliJ  
- My snippets sync across all my devices  
- I can easily share them with anyone using Raycast  

My team follows a naming convention for pull requests, another perfect use case for snippets.  
So when I type `;prcda`, this menu pops up:

![Snippet argument screenshot](/photos/raycast_snippet_arguments.png)

Raycast snippets even let you add arguments when parts of the text are dynamic.  
Looks like they thought of everything.

## Notes

Raycast comes with the possibility to write quick notes.  
The first use I have for this is taking notes during meetings.  
I use it as a draft space, so if I need to write a summary afterward, I already have everything that was said.  

**Tip:** During meetings, as suggested by the Resend CEO in [this video](https://www.youtube.com/watch?v=UANh1ET4P90),  
stick your notes just below your camera before the meeting, so your reading looks natural.  

Another use (and my main one) is writing down the goals for a session or for the day.  
Raycast notes stay on top of everything, which helps me stay focused.

![Raycast Note screenshot](/photos/raycast_note.png)  
*<center>Primary goal: don't forget to hate on JS</center>*  

I recently discovered a feature that works perfectly with this: **Focus Mode**.

## Focus mode

Here’s what I need to be productive:  
- Keep my goals visible  
- Set a deadline to finish the task  
- Block distractions  

Raycast’s Focus Mode does it all.  
At the beginning of a session, you can set the task name and the time you want to spend on it.  
You can also set which apps and websites to block or allow.

Once activated, welcome to your productivity dream:  
Only your work tools, the timer, and your goal on screen. No distractions.

![Raycast focus mode screenshot](/photos/raycast_focus_mode.png)

I’ve tried lots of methods to be productive, but nothing has worked as well as this mode.

# To sum it up

Raycast has become an essential part of my daily workflow, but what excites me the most is that I’ve barely scratched the surface.  
There are still so many features I haven’t explored, new ones being added all the time, and an endless list of community extensions.

Just to name a few, I started using the Homebrew extension, now I install all my apps through Raycast.  
There are also integrations for tools like Docker, Spotify, and tons more I haven’t even touched yet.  

If Raycast is *“just a launcher”*, then I’m *“just a developer”*.  
And we both know that’s not true.

**SEE YA ! ✌🏾**

