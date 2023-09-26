## Startupz landing page (React + Jekyll)

This test website is created with React + Jekyll + TailwindCSS.  
Before running the project, make sure you have `jekyll`, `webpack`, and `npm` installed on your environment.

### Installation

To install npm, run:

```
sudo apt install npm -g
```

To install jekyll, run:

```
gem install jekyll -g
```

To install webpack, run:

```
sudo apt install webpack  -g
```

Then, you can install the pre-requisites. To install the npm dependencies, run:

```
npm i
```

and

```
bundle install
```

### Run the project

1. Open a new terminal. Type in `exe/dev` to start the jekyll server and the vite server.
2. Alternatively, open a new terminal and start jekyll server by running `bundle exec jekyll serve`, then another new terminal and run `bin/vite dev`

### Build the project

1. Run `bundle exec jekyll build` to build the project

This project is currently deployed to https://dashing-macaron-2898dd.netlify.app/ with the help of Netlify.
