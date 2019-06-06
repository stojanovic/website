# Exercise 6: UPDATE an existing /meetups/id

Oh, there's a new location? Let's update the meetup.

## Task

Add another method with the following format: `PUT /meetups/:id`, with the body similar to the following object:

```json
{
  "location": "Startit, Savska 5, Belgrade, Serbia"
}
```

This request should return status 200 and an updated meetup object in the response, similar to this one:

```json
{
  "id": "1235-4315-f31f-gsm134fa",
  "name": "Meetup #25 - GraphQL with Amplify",
  "group": "JS Belgrade",
  "date": "2019-10-19",
  "startTime": "18:00",
  "endTime": "20:00",
  "location": "Startit, Savska 5, Belgrade, Serbia",
  "description": "Long form description"
}
```

### Hints

- Update should ignore all fields that are not: `name`, `group`, `date`, `startTime`, `endTime`, `location` and `description`.
- Claudia API Builder supports `.put` method.
- In case of an `application/json`, the body of the request will be parsed JSON object; in case of `application/xml` or `text/plain` POST or PUT, body of the request will be string. In case of binary content, a Buffer.

%accordion%Need more help?%accordion%

Sorry, no more copy pasting 😉

Updating process works the same, but try to write other methods by yourself.
If you have issues, call the instructor.

%/accordion%