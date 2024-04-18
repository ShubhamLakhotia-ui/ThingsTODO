ThingsTODO - An Event Management Application

This Event Management Application is designed for both admin and user roles, allowing for seamless event creation, booking, and management. It offers a robust platform for managing events, user queries, and bookings, complete with user authentication and exclusive experiences.


Features:

Common Features
1, User Authentication: Secure login and signup processes for users and administrators.
2, Interactive Dashboard: Users and admins have access to customized dashboards tailored to their needs.
3, Responsive Design: The application is fully responsive, ensuring a seamless experience on both desktop and mobile devices.

User-Specific Features
1, Event Booking: Users can book events through an intuitive interface, with details pre-filled based on their selection.
2, Exclusive Experiences: Users can browse through exclusive experiences, such as adventure, birthday, and date night events.
3, Query Submission: Users can submit queries which are directly handled by administrators, ensuring a high level of support.

Admin-Specific Features
1, Event Management: Admins can add, edit, and delete events, with the ability to upload images and specify event details.
2, User Management: Admins have access to a comprehensive dashboard showing user activities, event bookings, and other relevant metrics.
3, Query Management: Admins can view and respond to user queries, managing them through an efficient admin panel.
4, Booking Overview: Admins can view a list of all bookings, with detailed information about each booking readily available.

Technical Features
1, React Framework: Built with React, utilizing functional components and hooks for state management.
2, Material-UI Components: Uses Material-UI for styled components that are both functional and aesthetic.
3, Backend Integration: Integrates with a custom backend via axios for RESTful API calls.
4, Security Features: Implements basic security features in user authentication and data management.



Function Descriptions

1, User Interface Functions

handleChange(e)
Purpose: Updates the form data state when input fields change.
Parameters: e (event object from the input field).
Usage: Attached to all form input elements to ensure the state is updated with the user's input.

handleImageChange(e)
Purpose: Handles the file input change to read and store an image in base64 format.
Parameters: e (event object from the file input field).
Usage: Used in forms where image data is required, updating the state with the encoded image data.

handleDeleteImage()
Purpose: Clears the image data from the form state.
Usage: Provides users the ability to remove a previously selected image before submitting a form.

handleSubmit(e)
Purpose: Submits the form data to the server.
Parameters: e (event object to prevent default form submission behavior).
Usage: Used in various forms across the application to handle data validation and POST requests to the server.

handleCloseNotification()
Purpose: Closes notifications or alerts.
Usage: Attached to alerts and notifications to allow users to manually dismiss them.


2, Networking Functions

fetchUsers()
Purpose: Retrieves a list of users from the server.
Usage: Called on component mount in admin dashboards to display user data.

handleSubmitResponse(query)
Purpose: Submits an admin response to a user query.
Parameters: query (data object containing query details).
Usage: Allows admins to respond directly to user queries through the admin panel.


3, Authentication and Session Management

login(userData)
Purpose: Logs the user in and updates the context with user data.
Parameters: userData (object containing user details).
Usage: Used in login forms to update global user state and local storage.

logout()
Purpose: Clears the user session and user data from context and local storage.
Usage: Attached to logout buttons within the application.

handleLogout()
Purpose: Clears session data and redirects to the login page.
Usage: Used across multiple components to ensure a clean logout process.


4, Utility Functions

handleImageUpload(file)
Purpose: Converts an image file to a base64 string.
Parameters: file (File object from input).
Usage: Used in forms where images are uploaded to convert the image for easy storage and retrieval.

validateFormData(formData)
Purpose: Validates form data before submission.
Parameters: formData (object containing form values).
Returns: Boolean indicating whether the data is valid.
Usage: Called before form submissions to ensure all data meets application requirements.

5, React Effect Hooks

useEffect()
Purpose: Used to perform side effects in function components.
Usage: Runs after every render by default, but can be configured to run when certain values change. Used extensively to fetch data on component mount, listen for changes, or synchronize with external data sources.
