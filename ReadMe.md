# scicom-user-microservice

This is an API for user profiles. Users can also raise complaints about the service and give ratings to other users.

### Start server

```
node index.js
```

### Base URL

http://localhost:3000

# API

## Profile

An API for user profiles.

### Register profile

`Post /onboarding/profile`

As you can see, the new profile is added to the database:
![Alt text](/screenshots/createProfile.png)

### Get profile

`GET /onboarding/profile`
(give \_id in req.body)

### Update profile

`PUT /onboarding/profile`
(give \_id in req.body)

### Delete profile

`DELETE /onboarding/profile`
(give \_id in req.body)

## Complaints

An API for complaints made by users. Complaints are initially marked as 'created' but may be updated to be e.g. 'in progress' or 'resolved'.

### Create complaint

`POST /complaints`

### Get complaint or complaints

`GET /complaints`
(give user_id in query params to get all the complaints by that particular user, or complaint_id to get a specific complaint).

![Alt text](/screenshots/complaintsByUser.png)
![Alt text](/screenshots/complaintsByID.png)

### Update complaint

`UPDATE /complaints`
(give \_id in req.body)

### Delete complaint

`DELETE /complaints`
(give \_id in req.body)

## Ratings

Ratings are for users to give other users ratings. Each rating document consists of a user_id (the user making the rating), target_id (the user being rated), a rating out of 5 stars, and a comment.

### Create rating

`POST /ratings`

![Alt text](/screenshots/getRating.png)

### Get rating

`GET /ratings`
(give user_id and target_id in req.body)

### Update rating

`UPDATE /ratings`
(give \_id in req.body)

### Delete rating

`DELETE /ratings`
(give \_id in req.body)
