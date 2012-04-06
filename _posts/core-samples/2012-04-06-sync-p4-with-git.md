---
layout: post
category : lessons
tags : [tutorial, appengine, deploy]
---
{% include JB/setup %}

### Sync Perforce with Git

If you want to automate p4 to git synchronization, you can use a script which performs all the hard work for you. The idea behind it is simple:

- In git repostory create a branch called p4 (for holding exact state of sources in perforce)
- Do all your work in a separate topic branch
- When you are ready to sync, update the perforce with latest changes and launch the script.
- The script will copy all content from perforce to git location (on p4 branch) and will commit them.

### Script samples

This is a sample bash script (for linux) used to sync a perforce project repository with git. 
		

		#!/bin/bash
		@echo off 
		local _p4
		_p4=/path/to/perforce/project		
		local _git
		_git=/path/to/git/project

		cd $_git
		echo "Switching to branch p4"
		git checkout p4

		# Remove all but .git and .
		ls -a |grep -v . | xargs rm -rf 

		echo "DELETE...[OK]"

		#Copy P4 -> GIT
		cp -rf $_p4/* $_git/

		echo "COPY...[OK]"

		git add .
		git status
		git commit -am "sync p4->git"

		echo "SYNC...[OK]"


Below is a bat script (for windows):

		@echo off 
		SETLOCAL 
		SET _p4=D:/path/to/perforce/project
		SETLOCAL 
		SET _git=D:/path/to/git/project

		cd %_git%
		rm -rf %_git%/* 

		echo "DELETE...[OK]"

		cp -rf %_p4%/* .

		echo "COPY...[OK]"

		git add .
		git status
		git commit -am "sync p4->git"

		echo "SYNC...[OK]"