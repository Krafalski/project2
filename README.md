# Express MongoDB EJS Starter Template for hosting on Heroku

Notes
- clone this repo
- cd into the repp
- run `npm install` to install dependencies
- `touch .env`
- in the `.env` file set your local host port (eg `PORT=3000`) and your URI for Mongo/Mongo Atlas `MONGODB_URI=mongo+srv...`
- test locally, if it doesn't work locally, it won't work on heroku
- follow instructions on heroku to finish your deployment
- don't forget to set a config variable in `settings` for `MONGODB_URI` (heroku will handle the `PORT` for you)

- go into the package.json and update the `engines` to match the version of `node` you have on your machine. You can find out your version by typing `node -v` in terminal
