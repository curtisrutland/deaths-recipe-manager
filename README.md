# recipe-manager

This is a learning project intended to provide a beginner web developer an opportunity to style and extend an existing (but unstyled) web application.

This project is a simple Recipe Manager, that will allow a user to list, view, add, edit, and delete recipes from a personal collection.

- Short term: `localStorage` for data storage. Recipe collection will exist on a single browser.
- Mid term: add an "Export/Import" function to export your recipe collection as JSON and import it into another browser
- Long term: add MongoDB support to allow the collection to be available from any browser

## How to interact with this project?

You can either open the `index.html` file in a browser, or you can use an extension such as "Live Preview" to view your changes as you make them.

We will also cover deploying this site online, so that your changes are visible on the actual internet, and other people can see your site.

## What's important?

There are some files in the project that have to be there, for things like deployment, or instructions (this README file, for example).

The files and folders that are **important**:

- index.html - this file is HTML file at the root of your site
- /pages - this folder contains all sub-pages, such as List and Add
- /styles - this folder contains your stylesheet, that will control the look and feel of the entire site
- /scripts - this folder contains the code that drives the interactivity of the site. 
  - _note_: you should leave the files in this folder alone for now. This will be a topic for future lessons.

The files and folders that are _less important_:

- .gitignore - this tells Git what files and folders _not_ to include in a repository. This is not currently necessary but may become necessary in the future.
- .prettierrc.yml - this is a configuration file for a code formatter.
- CLAUDE.md - this is a configuration file for the AI agent I personally used to speed up setting up this project. I would recommend _not_ using Claude or ChatGPT yourself yet.
- vercel.json - this is a configuration file for deployment
- README.md - (this file) a file that describes the project, and includes any information that you would like to capture for yourself or anyone else looking at the project.