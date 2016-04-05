---
tittle: Social food photos
layout: post
date: 2015-04-18 10:00:00
category: projects
lang: en

---

# Social food photos

I have a new project under Bistro Digital. This time is maintain and fix some web services for an iOS app based on Mexico city. The backend it's on [Ruby on Rails](http://rubyonrails.org) using many (many) gems.

My first problem was know how the authentication system was made; for my surprise it was made entire by hand. So I can`t fix that because some services use methods from that module. Also the project has many gems (I don’t know why they don’t have [devise gem](https://github.com/plataformatec/devise)). They used [Capistrano](http://capistranorb.com) and with Unicorn as a web server, but had many problems in the deployment to staging and production environment because the application consumes a lot of CPU and memory. They had like 8 workers in a m3.large instance only for the web application; and others 8 workers for background jobs. The invoice from AWS was a problem.

My first move was try to improve the code, but I can’t because many methods in the services module were strong linked with the authentication and the model has a bad design (many references and so on).

I had to develop a statistic system, I liked too much because from a simple rake command they can run any SQL statement and storage to view the Records and Sets from the application. Maybe later I can publish that model and simple module as a open source.

After 2 months they ask me if I know a way to improve the balance and make the application deployment easier. So I think: maybe we can use [Puma](http://puma.io) and [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/) and (because the other developer) move all the services they used to different products on AWS. They have a Postgres instance inside the server, I moved out to the AWS RDS. In the application for the background jobs they had [Resque](https://github.com/resque/resque) this gem use a Reddis service, but also they had on the main server and I moved out to AWS Elastic Cache. At the end only had left the main production environment moved out to the Elastic Beanstalk and removed Capistrano. I setup the staging environment and that it. Everything was good.

That was my work on the application for social food photos.