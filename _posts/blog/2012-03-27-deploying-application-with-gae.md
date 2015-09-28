---
layout: post
title: "Deploying application with GAE"
modified:
categories: blog
excerpt:
tags : [tutorial, appengine, deploy]
comments: true
image:
  feature:
date: 2012-03-27T15:39:55-04:00
---


This page describes how to create an application and deploy it to Google App Engine

## Create the project 
Use maven archetype to create the project. Run the following
        
	mvn archetype:generate -DarchetypeGroupId=net.kindleit -DarchetypeArtifactId=gae-archetype-wicket -DarchetypeVersion=0.9.0 -DgroupId=com.myproject -DartifactId=myproject
		
The above line will generate a basic wicket project infrustructure.	You will probably will like to update its dependencies to latest versions if you want to be up to date.

## Running the application		
If this is the first time you generate the project using gae maven plugin, you have to unzip gae distribution using the following command:

	mvn gae:unzip

In order to start the application locally run:
		
	mvn gae:run
		
## Deploying application		

First of all, create the application on appengine page. You can do that on https://appengine.google.com/ .

Before deploying the application, update the WEB-INF/appengine-web.xml file containing the name of the appengine application.
To deploy the application run:

	mvn gae:deploy
		
You'll be asked to provide your email and password.	After several seconds, the application will be ready on the following address: http://myApp.appspot.com	, where myApp is the name of your app.

Congratulations, you have a new site!