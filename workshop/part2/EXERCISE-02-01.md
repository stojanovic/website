# Exercise 1: Create a simple React app

First you'll need to create a simple React app. You'll not need Redux or any other similar library at the moment. Create React App boilerplate should be enough.

## Task

Create a simple React app using [Create React App](https://github.com/facebook/create-react-app) and add the following few pages to it:

- List of all meetups page (home page)
- Meetup details page
- Add a new meetup page
- Edit the meetup page

All pages can have just a title, as you'll add more elements in the next exercise.

### Hints

- You can use [Create React App](https://github.com/facebook/create-react-app) to generate the app.
- Use the `npx` command if you don't want to install Create React App locally.
- You can use [React Router](https://reacttraining.com/react-router/web/guides/quick-start) to add navigation for these four pages.

%accordion%Need more help?%accordion%

Run the following command to create a new React application using Create React App:

```shell
npx create-react-app meetup-frontend
```

Then navigate to your new `meetup-frontend` folder and install React Router by running the following command:

```shell
npm install react-router-dom -S
```

Finally, modify the `src/App.js` file to look similar to the following code snippet:

%accordion%Show code%accordion%

```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Meetups() {
  return <h2>List meetups</h2>;
}

function SingleMeetup() {
  return <h2>Show single meetup</h2>;
}

function AddMeetup() {
  return <h2>Add a meetup</h2>;
}

function UpdateMeetup() {
  return <h2>Update a meetup</h2>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">All meetups</Link></li>
            <li><Link to="/123">Single meetup</Link></li>
            <li><Link to="/add">Add a meetup</Link></li>
            <li><Link to="/update/123">Update a meetup</Link></li>
          </ul>
        </nav>

        <Route path="/" exact component={Meetups} />
        <Route path="/meetups/:id" component={SingleMeetup} />
        <Route path="/add" component={AddMeetup} />
        <Route path="/update/:id" component={UpdateMeetup} />
      </div>
    </Router>
  );
}

export default AppRouter;
```

%/accordion%

This is not the best code ever, but it'll do the trick.

%/accordion%