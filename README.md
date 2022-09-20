A CRUD application for individuals to easily track their dreams. Indivuals can create an account and then log a dream daily. They can edit or delete their dreams should they wish.

There is a paginated viewing page strictly for viewing dreams, descending from most recently submitted.

The dashboard alerts users if they haven't yet submitted a dream.


The backend is handled using Node.js with Express as a framework, and the app is constructed with MVC architecture for sake of navigability and structure. 

MongoDB and Mongoose used for DB and schema. Journal schema represents dreams and contains the properties of date (submitted), dream title, and the dream content itself.User property contains user ID in order to match them to their entries in the DB.

EJS used to customize UI - uses simple JS logic in order to render the display custom to what each user has in their DB. IE run a foreach method when rendering the dreams in the log page so that each user sees their dreams directly from the DB.

TailwindCSS used for styling.

Has user authentication, done with passport.js middleware.

Server hosted on Heroku.

Images courtesy of unsplashed and Lofi Raccoon. 
