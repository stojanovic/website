# Exercise 4: GET a single /meetups/id

It's time to add another method that returns a single meetup.

## Task

Add another method with the following format: `GET /meetups/:id`, where `:id` is an ID of a meetup you want to get.

This request should return status 200 and the following response:

```json
{
  "id": "1235-4315-f31f-gsm134fa",
  "name": "Meetup #25 - GraphQL with Amplify",
  "group": "JS Belgrade",
  "date": "2019-10-19",
  "startTime": "18:00",
  "endTime": "20:00",
  "location": "ICT Hub, Kralja Milana 10, Belgrade, Serbia",
  "description": "Long form description"
}
```

### Hints

- Claudia API Builder has a similar sintax to Express.js, but it uses `{param}` instead of `:param` for path params.
- Use `claudia update` command to update the project.

%accordion%Need more help?%accordion%

You should update the `api.js` file in your "meetup" project. Updated file should look similar to this one:

%accordion%See the code%accordion%

```javascript
const Api = require('claudia-api-builder');
const api = new Api();

const listOfMeetups = [{
  "id": "1235-4315-f31f-gsm134fa",
  "name": "Meetup #25 - GraphQL with Amplify",
  "group": "JS Belgrade",
  "date": "2019-10-19",
  "startTime": "18:00",
  "endTime": "20:00",
  "location": "ICT Hub, Kralja Milana 10, Belgrade, Serbia",
  "description": "Long form description"
}];

api.get('/meetups', () => {
  return listOfMeetups;
})

api.get('/meetups/{id}', (request) => {
  return listOfMeetups.find(meetup => meetup.id === request.pathParams.id)
})

module.exports = api;
```

%/accordion%

Then run the following command from your terminal to update your API:

%accordion%See the command%accordion%

```shell
claudia update
```

%/accordion%

Make sure you are running this command from your "meetup" project. When the command finish, try loading the API url with `/meetups/1235-4315-f31f-gsm134fa` suffix.

%/accordion%