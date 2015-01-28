---
tittle: SpeedTunes
layout: post
date: 2015-01-28 01:00:00
category: projects
lang: en
---

# Speed music iPhone app

In the mid of 2012 I finish my course about iOS development at my job and some day and agency call asking for help with their iOS application. So I went to their office and take a look of the application.

Was terrible, period.
Awful interface, bad design, discusting architecture. Bad is kind.

So, they asked to me if I can change the interface and upgrade to iOS 7. I say yes, and the job beggins.

### Features

The application was capable of analize one song and get the beats per minute (bpm) with a library wrote in C++. **The problem:** The library does not run with 64bit architecture because the project didn't have the source code, only the compiled version.

The user interface (UI) hurts my eyes. They give to me an PSD file and I did my magic. **The problem:** All the application interface was in one XIB. You are rigth, no StoryBoard... one f*king XIB file, like 8 screens in one single xib file. So I decoupled in many as posible, and also move all the code in anothers view controllers. Awful.

The application was capable of take the speed of the device and play a song accord to the speed and their bpm. These are ok, but the testing was terrible. So I move some code, and put a development enviroment to know the speed and take control of it.

We take the song and create a playlist. But didn't work with iCloud/iTunes Match, if you have your music in the cloud the application crash. So, I fix it.

After that I have problems with the UI perfectionism in an agency. I deploy the application into the iTunes App Store but sorry about me because they put down a year after that.

But I learn a lot about legacy code and refactor architecture. Thats good!
