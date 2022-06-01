# SQL Editor

## Overview

This is a fully responsive web application capable of running SQL queries and displaying the results of said query. It enables users run SQL queries in an online editor, and displays the output data obtained as a result of running the queries within the application. Users can also save, delete, view their most recently run queries, and export the output data from running queries as CSV files.

**Live URL:** [https://sql-query-editor.netlify.app](https://sql-query-editor.netlify.app)

## Technologies Used

The libraries and tools I used in the project include the following:

- [React](https://reactjs.org/), to handle the user interface.

- [TypeScript](https://www.typescriptlang.org/), to enable type safety.

- [SASS](https://sass-lang.com/), to style the application.

- [react-hot-toast](https://www.npmjs.com/package/react-hot-toast), to display notifications.

- [codemirror](https://www.npmjs.com/package/react-codemirror2), to manage the query input.

- [react-csv](https://www.npmjs.com/package/react-csv), to export output data as CSV files.

## Page Speed and Optimization

I used Google Lighthouse and PageSpeed Insights to analyze the page load time and performance of the application. I also used GTMetrix to help cross-check the analysis.

### Page Load Time

I took the page load time as the Time to Interactive(TTI) of the application. On a mobile view, the page load time is **1.4 seconds**. On desktop view, the time is **0.4 seconds**.

### Optimizing the Page Load Time

To decrease the page load time of the application, I did the following:

- Used reusable components to prevent repetition in the codebase.

- Avoided the use of CSS and UI libraries like Bootstrap, Material UI, etc and used custom SASS to prevent unnecessary overhead.

- Used minimal dependencies in the application, e.g I added svg assets manually instead of using an icon library, since only a few icons were used in the application.

- Used [React's Code-Splitting](https://reactjs.org/docs/code-splitting.html) to lazily import components, thereby splitting the Webpack bundles generated at build time into smaller sizes and preventing render-blocking.

- Converted the application into a [Progressive Web App(PWA)](https://web.dev/progressive-web-apps/), to reduce subsequent page load times and allow the app to be used offline as it can be installed.

## Screenshots
