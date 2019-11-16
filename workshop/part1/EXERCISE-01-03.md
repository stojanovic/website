# Exercise 3: GET all /meetups

Remember, you'll need to build something like this:

```bash
GET /meetups
	RETURNS
    (200 OK) an array of meetup objects
    [{
        "id": "1235-4315-f31f-gsm134fa",
        "name": "Meetup #25 - GraphQL with Amplify",
        "group": "JS Belgrade",
        "date": "2019-10-19",
        "startTime": "18:00",
        "endTime": "20:00",
        "location": "ICT Hub, Kralja Milana 10, Belgrade, Serbia",
        "description": "Long form description"
    }]
```

To do so, you can use Claudia API Builder. Make sure you install it as a dependency in your "meetup" project.

## Task

Create a mock API with your first endpoint: ` GET /meetups`. This endpoint should return a following static JavaScript array as a response to the request:

```json
[{
  "id": "1235-4315-f31f-gsm134fa",
  "name": "Meetup #25 - GraphQL with Amplify",
  "group": "JS Belgrade",
  "date": "2019-10-19",
  "startTime": "18:00",
  "endTime": "20:00",
  "location": "ICT Hub, Kralja Milana 10, Belgrade, Serbia",
  "description": "Long form description"
}]
```

Once your endpoint is created, test it in your browser.

### Hints

See the tutorial for Claudia API Builder to learn how to create an API: https://claudiajs.com/tutorials/hello-world-api-gateway.html.

%accordion%Need more help?%accordion%

You should create the `api.js` file in your "meetup" project.

This file should look similar to this one:

%accordion%See the code%accordion%

```javascript
const Api = require('claudia-api-builder');
const api = new Api();

api.get('/meetups', () => {
  return [{
    "id": "1235-4315-f31f-gsm134fa",
    "name": "Meetup #25 - GraphQL with Amplify",
    "group": "JS Belgrade",
    "date": "2019-10-19",
    "startTime": "18:00",
    "endTime": "20:00",
    "location": "ICT Hub, Kralja Milana 10, Belgrade, Serbia",
    "description": "Long form description"
  }];
})

module.exports = api;
```

%/accordion%

Then run the following command from your terminal to deploy your API:

%accordion%See the command%accordion%

```shell
claudia create --api-module api --region eu-central-1
```

%/accordion%

Make sure you are running this command from your "meetup" project.

This command should output JSON with a URL. Append `/meetup` to that URL and run it in your browser. You should see the JSON response.

%/accordion%