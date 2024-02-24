# Code Guidelines for React

Everyone contributing to this project is requested to write code inspired by the guidlines provided in this document.

## General

Code with errors or warnings should never be pushed to production

## Editor Setup & Code Formatting

- Indentation using tabs, where a tab is 2 spaces wide
  - Default can be changed for a project in VScode through `Settings > Workspace > Commonly Used`
- Install the [vscode-language-babel](https://marketplace.visualstudio.com/items?itemName=mgmcdermott.vscode-language-babel) extension
- Install the [vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extension
- Install the [prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extension
- Install the [vs-code-prettier-eslint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint) extension
- Install the [vscode-tailwindcss](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) extension
- Follow the official [tailwind editor setup guide](https://tailwindcss.com/docs/editor-setup#automatic-class-sorting-with-prettier) to setup automatic class sorting for tailwind
- Setup VSCode to format on save through `Settings > Workspace > Formatting` and check `Format on Save`. When prompted select `Prettier` to be you default formatter
- It is recommended to turn off autosave so format on save can work correctly
- Always use semicolons to end lines (if configured properly using aforementioned steps VScode should automatically do this among other things)

This setup automates most of the formatting conventions, and hence ensures uniformity in code written by different developers.

### Tags

Self close tags with no children.

DO:

```jsx
<Element className="beautiful" />
```

DO NOT:

```jsx
<Element className="beautiful"></Element>
```

## Comments and Documentation

Comments must be written in such a way that a documentation website may be generated automatically from them. Refer to [JSDoc 3 documentation](https://jsdoc.app/) for more info on this.

Importantly refer to the following JSDoc 3 documentation pages:

- Getting started page (_[link](https://jsdoc.app/about-getting-started.html)_)
- List of tags recognized by JSDocs 3 (_[link](https://jsdoc.app/index.html#block-tags)_)

## Naming Conventions

- `lower_snake_case` for directory/folder names
- `lowerCamelCase` for vanilla JS variables
- `UpperCamelCase` for class, file, and component names
  - Exception: `lowerCamelCase` may be used for the following files' names
    - Redux slices, APIs, and store files
    - Generic and commonly used files such as `utils.js` and `constants.js`
- File and component name must be same, e.g. a component named `MyComponent` must be exported in a file named `MyComponent.js`

## Folder Structure

Suppose an app has two screens only, a `Home` page, and a `User Profie` page, then following folder structure may be followed:

```txt
src/
|── home_page/
|   |── components/
|   |   |── HomeNewsBanner.js
|   |   └── HomeCarasoul.js
|   └── HomePage.js
|── user_profile_page/
|   |── components/
|   |   └── UserAvatar.js
|   └── UserProfilePage.js
|── components/
|   |── Button.js
|   └── NavBar.js
└── models/
    |── User.js
    └── Challenge.js
```

- Each page/screen has a folder whose name is snake cased name of the page, e.g. a page called "My Page" would be defined in a `MyPage.js` file which will be inside a `my_page/` directory
- There is an app wide `components/` folder which houses components which may be used in multiple pages
- Components used in a single page are inside a `*_page/components/` directory, e.g. a component used only in "My Page" would be inside a `my_page/components/` directory
- Add all models in `models/` directory

## Imports' Order

A structure must be maintained when writing import statements. Always do for imports `Built-in -> Third Party Libraries -> Internal (self made components etc.)`, and leave an empty line between each type of imports.

DO:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";

import App from "./App";
```

DO NOT:

```jsx
import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import App from "./App";
```

> **TIP**: You can follow the steps in [this blogpost](https://dev.to/otamnitram/sorting-your-imports-correctly-in-react-213m) to setup ESLint to automatically manage imports in the recommended way for you

## Class vs. Functional Components

Use functional components almost everywhere. In modern react everything that can be accomplished by using class based components can be accomplished better by using function based components, except for a few rare scenarios. You may find class based components widely used in older React codebases, but most modern React code bases use functional components.

## Code Duplication

If you notice the same or similar code at more than one place in a codebase, then almost always such code can be de-duplicated while maintaining the same functionality by refactoring it in one way or another. Always try to eliminate code duplication to the highest degree possible.

Some common ways of avoiding code duplication are:

- Encapsulating into functions/methods
- Using custom hooks
- Using HOCs (Higher Order Components)

The above list is not exhaustive by any means, hence feel free to use any appropriate design pattern of your choice to solve the problem of code duplication on your hands.

## Sources

- [pillarstudio/standards](https://github.com/pillarstudio/standards)
- [React Best Practices _by Jean-Marc Möckel_](https://www.freecodecamp.org/news/best-practices-for-react/#learn-how-to-build-clean-performant-and-maintainable-react-components)