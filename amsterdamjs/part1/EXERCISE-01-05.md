# Exercise 5: POST new /meetups

Let's create a meetup.

## Task

Add another method with the following format: `POST /meetups`, with the body similar to the following object:

```json
{
  "name": "Meetup #25 - GraphQL with Amplify",
  "group": "JS Belgrade",
  "date": "2019-10-19",
  "startTime": "18:00",
  "endTime": "20:00",
  "location": "ICT Hub, Kralja Milana 10, Belgrade, Serbia",
  "description": "Long form description"
}
```

This request should return status 201 and an empty response if successful.

### Hints

- Claudia API Builder supports `.post` method.
- In case of an `application/json`, the body of the request will be parsed JSON object; in case of `application/xml` or `text/plain` POST or PUT, body of the request will be string. In case of binary content, a Buffer.

%accordion%Need more help?%accordion%

Sorry, no more copy pasting 😉

Updating process works the same, but try to write other methods by yourself.
If you have issues, call the instructor.

%/accordion%