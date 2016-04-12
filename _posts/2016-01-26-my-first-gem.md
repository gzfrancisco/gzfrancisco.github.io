---

tittle: My first gem
layout: post
date: 2016-01-26 10:00:00
category: code
lang: en

---

# My first gem

I always wanted to make a contribution to the OpenSource, but many times I found a way to not doing. It’s a good practice not be egocentric and think your work is better than others. The real thing is you suck looking for on Google or StackOverflow.

But some times, little times you have a problem solved and you can make a simple contribution into the OpenSource world.

I had these problem and look into StackOverflow many ways to solve them but none of them was simple as bundle install. So I created one.

## Seed env

In my last 2 years after taking a lot of Ruby on Rails projects and have the same problem I decided to make a Gem for RoR to solve my first problem in the development of new features and development environments from new code bases.

Is a simple gem that calls a seed.rb file for environment. Here I found many projects with the same problem. They use FactoryGirl for testing but not for development and don't have a simple mode to add new objects to the database for development proposed. So every time I had to create a simple line to load an external file for the environment at the time ``rake db:seed`` is called from the command line.

So, right now I made this gem called [seed_env](https://rubygems.org/gems/seed_env) that have a simple command ``rails generate seed_env:install`` and create the 3 started files for each environment and add a statement in the seeds.rb

Problem solved! nobody has to decide if they use FactoryGirl or create their objects in a development database. We can use a seed.rb for each environment.

It sound really simple, but there isn’t a gem for that, so I took the opportunity to create my first gem and publish into RubyGems. I feel great.
