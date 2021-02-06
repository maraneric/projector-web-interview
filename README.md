# Projector Web Interview
Hello! Welcome to Projector's Web Interview!

Thank you so much for investing your time in this project! It's our hope that this format will help make figuring out if we're a match for each other more practical, more realistic and a lot less stressful than asking you to solve puzzles or write algorithms on a whiteboard on demand.

We have a two big goals in asking you to complete this project:

1. Give you a little window into the scope of some of the web technologies you would practice at Projector.
2. Provide a way to calibrate a discussion of what we expect from product engineers at Projector.

When you're done the project, you'll commit your work to your fork of the project so we can review. If all goes well, we'll schedule time together to discuss your code. This project is meant to be a vehicle for us to chat and figure out if we're a match for each other. Said another way: the chatting is the interview, not the code itself!

Ok! With that said, let's get going!

## Setup
There is a pretty vanilla react app, created with create-react-app.
It is set up to support TypeScript but if you're not familiar with TypeScript, feel free to just use JavaScript. We figured we'd give you the choice of what you're familiar and comfortable with.

You'll need to install the following software on your computer:

1. Visual Studio Code (https://code.visualstudio.com/download) or JS editor of your choice
2. Git (via Apple Xcode from the Mac App Store or standalone from https://sourceforge.net/projects/git-osx-installer/)
3. Node >= 8.10
4. npm >= 5.6

You'll then need to fork and clone this repository to a directory on your computer. You'll be committing your work to share it with us when you're done, so forking before you clone is an important step.

## Development
Once you have cloned your repo, to run the react app simply navigate to this directory and type:
```
projector-web-interview$ npm start
```

This should start up your local react app running on port 3000.
You should be able to now view your app in the browser at `http://localhost:3000/`.

## Ground Rules
Ok, hopefully at this point, your environment for the Projector Web Interview is all set up and you're ready to get started! Woohoo!

A few ground rules for the interview project:

1. Commit your work as you go into your fork on Github with `git`; at least one commit for each of the major steps. Treat commits to the repository like you would commits to main on a team project. If you choose to make your repository fork private, don't forget to share the repository with us.
2. At Projector, we make sure that our code passes lint and transpiles without warnings. The project as you are inheriting should transpile with no errors or warnings. Ideally that will still be the case after you extend it.
3. We like comments at Projector! With the two big goals of the interview at the top of this README in mind, we suggest that comments will help us (and maybe you) understand your thinking and provide discussion points for our conversations.
4. It's cool to use the Internet to complete this project. Let's face it, we all lean on Stack Overflow and blog posts on the daily. We care about comprehension, problem solving, getting things done, and the ability to talk with each other and explain the work we're doing. Those are things we're hoping to learn from this project, not if you have an eidetic memory.
5. We strongly recommend checking in with us on Slack a few times while you work to complete this project. Especially if you get stuck, but just, like, generally. This is our opportunity to see what it's like to work together in a largely remote world. Let's take advantage of it! We get that you might be doing this during off hours, it's cool, Slack us any time.

## Project Instructions

For this project, you are going to create the web client of a (fictional) Github Issues Viewer.

Github has a public api (https://docs.github.com/en/rest/reference/issues) that lets you view and page through issues in a given repo or org.

The product requirements for this issue viewer are:

1. The user can enter an org and repo name to fetch and display a list of the issues (https://docs.github.com/en/rest/reference/issues#list-repository-issues)
2. The user can paginate through all the pages of issues in the repo
3. Issues are shown with their title and author name and avatar (and anything else you think might make sense)
4. The user can click into the issue to see the full description and other metadata (this does not have to be exhaustive, there is a lot of metadata included on an issue in github)

Your job is to create the web client of this app. We're looking forward to seeing how you decide to structure your app, break pieces down into React components, fetch and store api data, and make a great user experience for your users.

When you feel good about completing these requirements, please push your changes to your repo and share it with us so we can review it. We will schedule time to go through it together at that point.

We want to be respectful of your time so don't feel like you have to spend 20+ hours on this to do a good job.

Please don't hesitate to reach out for help if you get stuck. That's what we do as a team working together, right? In fact, seriously, reach out to us. We can learn a lot about what it will be like to work together from chatting with each other on Slack!

