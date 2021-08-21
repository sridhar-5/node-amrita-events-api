# Project: Amrita-Events-Api

Backend Rest API for Amrita Events Android App

## End-point: Welcome

### Description: 
## Welcome Page of Amrita Events Api. Never Used. (For Testing Purposes)

## Endpoint: `/`

## Method: `GET`


> ```
> https://amrita-events.herokuapp.com/
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Login

### Description: 
## Endpoint: `/api/login`

## Method: `POST`

## Body (JSON):

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

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: RegisterUser

### Description: 

## EndPoint: `/api/register`

## Method : `POST`

## Body: (JSON Only)

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

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

---
