# PART 1: Build a mock API

You are a team of front end developers working on a web application for meetups (think meetup.com).

An external team is in charge of the RESFful API, and the API is not ready yet. You have a tight deadline, so you need to start working on the app ASAP.

The only backend docs you have is a list of the API methods that will be developed, and you need to prepare the app that will just connect to the final API as soon as it's ready. This list contains methods for listing, creating, updating and deleting meetups, and it looks similar to the following one:
```
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

GET /meetups/1235-4315-f31f-gsm134fa
	RETURNS
        (200 OK) a single meetup object
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

POST /meetups
	BODY:
        {
            "name": "Meetup #25 - GraphQL with Amplify",
            "group": "JS Belgrade",
            "date": "2019-10-19",
            "startTime": "18:00",
            "endTime": "20:00",
            "location": "ICT Hub, Kralja Milana 10, Belgrade, Serbia",
            "description": "Long form description"
        }
	RETURNS
        (201 Created) an empty response body
        {}

UPDATE /meetups/1235-4315-f31f-gsm134fa
	BODY:
	{
		"location": "Startit, Savska 5, Belgrade, Serbia"
	}
	RETURNS
		(200 OK) a single updated meetup object
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

DELETE /meetups/1235-4315-f31f-gsm134fa
	RETURN
		(204 No content) an empty response body
        {}
```

## What

Your first task is to create a mock API -- the one that will not have any real functionalities, but it will have the same methods as the final API and return some predefined data.

You need a mock API to be able to develop a frontend application that acts similar to the final production-ready application. Once the final API is ready, your team will simply switch mock API to the production-ready API and the app should just work. At least that's the plan that your client and project manager are pushing for.

## How

You have several friends mentioning some new cloud computing concept called _serverless_. From their story, it seems that serverless thingy simplifies the work on the backend, and can help you to develop your mock API.

Well, you don't have anything to lose, let's try it!