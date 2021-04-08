# **Web Dev Essentials Crash Course**

This repo is for the UBCO Web Dev Month Workshop that covers JS and Project Setup. 
This workshop covers all the things I wish I had learned when I first started web dev xD....
This workshop focuses on Frontend development.

## **In Preparation of the Workshop**

- Download and install VSCode (if on Windows, tick open with code checkbox)
  - Download the settings sync extension https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync
  - Download settings and extensions with the Gist: f066341271f17ac7b079ea9eba33be9b  (you will see a button that says "Download Public Gist"), wait for full completion until a popup on the right comes up that asks you to reload vscode and apply changes.
  - If eslint gets mad at you about "CR", just change CRLF to LF at the bottom of VSCode and the warnings will go away.
  
- Download and install Node LTS https://nodejs.org/en/download/
- Download and install Git https://git-scm.com/downloads
- Read through the info below and Google things you don't know
- Clone this repository to your machine with GitHub Desktop https://desktop.github.com/
- Open the folder of this cloned repository in VSCode
- Use Git Bash terminal in VSCode (make sure it is the Git Bash terminal you are using)
- Run `npm install` in terminal 
- Run `npm run serve` in terminal

## **First Part - Project Setup**

- Why Even Web Dev? (so many reasons)

  - Disadvantages of Web Dev
    - Not ideal for systems that require low-level programming (microcontrollers, insane rendering required)
    - Many Moving Parts, many languages and systems involved
  - Advantages of Web Dev
    - The Biggest Job Market in Computer Science
    - Device/OS agnostic &rightarrow; A web app can run on a smartphone, a fridge, a Desktop, a tablet all from one code base
    - Gives Coders a better understanding of Cyber Security when they understand Networks and the Internet

- Project Structure of a FrontEnd Project.

  - Naming Conventions &rightarrow; packages are kebab-case, Component folders are PascalCase, files are camelCase (may vary from team to team)
  - The root folder
    - The src folder
      - Page/Component based WebApps
    - The public/static folder
    - The dist/build folder
    - Config files

- Web Dev VSCode Setup

  - Essential Extensions (if you don't want to copy my VSCode settings)
    - Epic Colour Theme to match your personality
    - Prettier &rightarrow; Auto formatting and syntax (caveat, sometimes on projects the extension can conflict with prettier dependencies in project)
    - ESLint &rightarrow; Syntactical and code structure enforcement
    - Auto Rename Tag &rightarrow; For html
    - Bracket Pair Colorizer
    - Color Picker
    - Git Blame
    - HTML BoilerPlate
    - HTML Snippets
    - JavaScript Code Snippets
    - JS JSX Snippets
    - Live Share
    - Live Server
    - MarkDown All in One
    - Path Intellisense
    - Visual Studio Intellicode

- Set up a Pro JS Project (Virtually 99% of these topics are applicable to React Projects)

  - How old school frontend building worked
  - Why Github?
    - Many employers actually look at GitHub like it's a resume
    - How many contributions signify how much you've worked on real projects
  - What Git/GitHub is
    - What Version Control is
    - GitHub
    - GitHub Desktop
    - The Main Git functions to know
      - Cloning
      - Branching
      - Commits
      - Pull Requests
      - Forking
  - What NPM is
    - What Node is
    - Node Modules
    - Package.json
    - Installing Dependencies
  - What Babel is - ES6+ - Installing Babel - Babel Config
    -What Typescript is - makes JS more statically typed - converts to JS from TypeScript compiler itself
  - What WebPack/gulp is
    - What the DOM is
    - Concept of Bundling
  - What ESLint is
    - What linting is and why it's beneficial
    - Installing ESLint
    - ESLint Config
  - What Prettier is
    - What formatting is and why it's beneficial
    - Installing Prettier
    - Prettier Config

- Extra
  - What the bleep is AJAX?
    - AJAX is the act of sending http requests to a server without reloading your client webpage
    
 ## **Practice some JavaScript inside a real project!**
  - Open the folder of this cloned repository in VSCode
  - Use Git Bash terminal in VSCode (make sure it is the Git Bash terminal you are using)
  - CD into "newschool-setup" like so: `cd newschool-setup` in terminal
  - Run `npm install` in terminal 
  - Run `npm run serve` in terminal
