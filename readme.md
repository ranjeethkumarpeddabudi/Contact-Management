### Wordle Clone

- This application will allows to manage contacts, including adding,
  updating, deleting, and viewing them.

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Description

### src/index.js

- It is the root component of the application

### Controllers/contact-controller.js

- It consists of main logic for creating,updating,deleting,viewing the contact details

### lib/db.js

- It consists of logic to connect to mongodb database

### middlewares/validator.js

- validates user input and sends response accordingly

### models/contact-model.js

- consists of Contact Schema that provides the fields that are to be provided

### Routes/contact-route.js

- It handles routing to all the Api end points
