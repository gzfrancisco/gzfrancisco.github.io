---
tittle: Vending experience
layout: post
date: 2015-06-20 10:00:00
category: projects
lang: en

---

# Vending experience

I work really hard on this. First one friend of mine recommend me to the CEO of this IoT project with vending machines.

They only need an iOS application for the next 3 weeks because they need it show in the NAMA conference in Las Vegas, Nevada.

2 weeks later I had the minimum functionality like 7 screens with 5 services connected (I used Objective-C because Swift had like 2 weeks out) and it was my first try with MVVM architecture on iOS.

After the event the CEO ask me to create other features but the services were incomplete for that feature, so (as many of my work) I had to do it to complete the task.

I build a small team of developers for this company and implement many deployment process and protocols to make the product stable.

One of the challenges I had was migrate the application; and the principal problem was the project started 3 years ago. Yeah... they had Ruby 1.8 and used Rails 3.2 I and one of my coworkers update the project on 1 week and after 2 more weeks of bug fixing we used Ruby 2.2 and Rails 4.2 yeah!

Then I had to implement a MQQT client to connect the backend with the IoT device for the vending machine. This was easy because I used the background jobs with Sidekiq and called all the methods on the model.

The last thing I accomplish was move all the controllers under a module. They had like 30 controllers all in the root module, and I moved into specific 4 modules because they were for specific user and activities like Admin, Users, Clients and Brands. That was a good movements, we spent like 2 weeks moving the controllers and the views into the correct module but the great thing was when the CEO ask us for a mobile web application. We only need it to create another module and make space as engine and that it. Even we could outsourcing the mobile web application to another developers or designers.

Also I spent many days and hours fixing the routes in the application. They were a mess and many private things were open to any user. Now its more secure.

I don’t know how I end doing back and front end.