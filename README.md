# Marvel Wiki Portal

You can [try](https://nastiacooly.github.io/marvel-wiki-portal/) the app deployed on GitHub Pages.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## What is it?

Marvel Wiki Portal is a web-app about Marvel characters and comics.

This is my SPA for practicing React skills.

## What can it do?

Marvel Wiki Portal provides the following features:
- Learning more about random Marvel character and getting links to their homepage and wiki;
- Learning more about all characters by loading and clicking their cards;
- Learning more about comics mentioning specific character by clicking on a comic title at character's info;
- Learning more about all comics by loading and clicking their cards.

## Where all the information comes from?

All the information about characters and comics is received from [Marvel API](https://developer.marvel.com/).

## Which technologies were used?

Frontend: HTML5, CSS3 (Scss), React.

Backend (API): [Marvel API](https://developer.marvel.com/).

## How to run the app locally with your own Marvel API key?

1. Download files from repo.

2. Install required packages with `npm i` command.

3. Register on [Marvel API](https://developer.marvel.com/) to get your API key.

4. Create 'api-key.js' file in src/services folder with the following code:
    ```
    const publicApiKey = "Your Marvel API public key here";
    export default publicApiKey;
    ```

5. Run the app with `npm start` command.

6. Enjoy!