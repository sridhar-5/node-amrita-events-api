# Project: Amrita-Events-Api

Backend Rest API for Amrita Events Android App

## End-point: Welcome

### Description:

### Welcome Page of Amrita Events Api. Never Used. (For Testing Purposes)

### Endpoint: `/`

### Method: `GET`

> ```
> https://amrita-events.herokuapp.com/
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Login

### Description:

### Endpoint: `/api/login`

### Method: `POST`

### Body (JSON):

```
{
    "username" : "<your-username-here>",
    "password" : "<your-password-here>"
}
```

> ```
> https://amrita-events.herokuapp.com/api/login
> ```

### Body (**raw**)

```json
{
  "username": "Justtotest",
  "password": "justtotest"
}
```

### Postman tests performed:

```
    pm.test("Checking Login endpoint status code", function(){
        pm.response.to.have.status(200);
    });
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: RegisterUser

### Description:

### EndPoint: `/api/register`

### Method : `POST`

### Body: (JSON Only)

```
{
    "Name" : "<name-here>",
    "email" : "<your-email-here>",
    "username": "<Roll-No-as-username-here>",
    "password": "<Your-password-here>"
}
```

> ```
> https://amrita-events.herokuapp.com/api/register
> ```

### Body (**raw**)

```json
{
  "Name": "sridhar",
  "email": "justtotest.students.college.edu",
  "username": "justtotest",
  "password": "justtotest"
}
```

### Postman tests performed:

```
    pm.test("Checking Register endpoint status code", function(){
        pm.response.to.have.status(200);
    });
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point-name: AllEvents

## Endpoint: `/api/all-events`

## Method: `GET`

## Usage: 
`if the user is authenticated then this endpoint responds with list of all the events with sufficient information for the card view`

### Note: 
`This Endpoint is only for Non-admin Authenticated Users.`


> ```
> https://amrita-events.herokuapp.com/api/all-events
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point-name: ParticularEvent

## Endpoint: `/api/all-events/:selectedEvent`

## Method: `GET`

## Usage: 
`if the user is authenticated then this endpoint responds with the completed details of the event corresponding to the id given in the request parameters`

### Note: 
`This endpoint is only for the Non-Admin authenticated users`


> ```
> https://amrita-events.herokuapp.com/api/all-events/6125250abb7921a16d0b6ae7
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point-name: AllEventsAdminUsers

## Endpoint: `/api/admin-users-portal`

## Method: `GET`

## Usage : 
`if the user is authenticated and is an admin then this endpoint responds with the list of all the events in the database`

## Note: 
`This endpoint is only for Authenticated Admin Users`


> ```
> https://amrita-events.herokuapp.com/api/admin-users-portal
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point-name: AddEventForAdmins


## Endpoint: `/api/admin-users-portal`

## Method: `POST`

## Usage:
`If the user is an authenticated Admin and all the validation on that request's body satisfy then this endpoint responds with "Event Created Successfully..! Message`

## Body (JSON format) :

```
{
    "ImageUrl": "<image-url>",
    "Title": "<Title-of-the-event>",
    "Caption": "<caption-event>",
    "Description": "<What-is-the-event-about>",
    "OrganizingClub": "<club-organizing>",
    "Date": "<date-2018-01-24T21:46:25.551Z->",
    "Venue": "<-Venue-of-the-event>",
    "RegistrationLink": "<Registration-Link>",
    "Note": "<any-additional-note-on-event>",
    "ContactDetails": <-array-of-objects-of-all-the-contacts>
}
```

## Example:

```
{
    "ImageUrl": "www.goog",
    "Title": "some random",
    "Caption": "request.body.Caption",
    "Description": "request.body.Description",
    "OrganizingClub": "request.body.OrganizingClub",
    "Date": "2018-01-24T21:46:25.551Z",
    "Venue": "request.body.Venue",
    "RegistrationLink": "request.body.RegistrationLink",
    "Note": "request.body.Note",
    "ContactDetails": [{
        "Name" : "Nirmal",
        "Phone" : "7569353633"
    },{
        "Name" : "Sridhar",
        "Phone" : "7569353633"
    }]
}
```

### Note: 
`This Endpoint is only for the Authenticated Admin Users.`


> ```
> https://amrita-events.herokuapp.com/api/admin-users-portal
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point-name: DeleteEventOnlyForAdmins


## Endpoint: `/api/admin-users-portal/:eventId`

## Method: `DELETE`

## Params: `EventId`

## Usage: 
`If the user is an authenticated Admin and the id of the evnt is given in the database then this endpoint successfully deleted the event and responds with the deleted event object.`

### Note: 
`This endpoint is only for the Authenticated Admin users `.


> ```
> https://amrita-events.herokuapp.com/api/admin-users-portal/6125250abb7921a16d0b6ae7
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
