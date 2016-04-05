---
tittle: Servers and journalism
layout: post
date: 2015-11-26 10:00:00
category: projects
lang: en

---

# Servers and journalism

This is a big story but I’ll try to make it short.

## The bad journalist

I always think about the responsibility of our actions and journalism is something really important.

So, there is a journalist with bad reputation with a web site being attacked with DOS. A friend of mine ask me to stand up the application server and the entire web site. It was a PHP website so wasn’t difficult. But I had like 3 more attacks these week.

They ask me to make forensic research to know who was the responsable. I don’t like these things. Look the journalist it wasn’t some I trust and I don’t know anything about forensic. So I recommend one of my friends and that it. It was exiting because at the end I was capable of resist attacks and standup servers under attack and I didn’t had that skill.

## The dirty fashion servers

There was another client with bad system administrators. They don’t had the passwords and anything about the servers. I don’t understand how a digital agency manage accounts from their clients with a proper way of know keys, IP’s and hosting.

Well the server was a victim of SQL injection on a PHP web application. The system admin didn’t respond so I came with help and after 2 hours I was the owner of the server. I only had the Media Temple admin account (but the root password didn’t work) I don’t remember how I access to the servers.

I move these mess to AWS EC2 with 3 instances and another 3 instances of AWS RDS and also (they had a DNS private server WHAAAAT?!) moved to the Route 53 product. Now they had a group based users on AWS IAM and the invoice its for all the services.

I think here in Mexico the experienced system admins need to stay as technical resources and not moved out as projects managers.