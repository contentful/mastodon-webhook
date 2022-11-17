# Contentful webhook for Mastodon


This uses the Contentful API to create a webhook to cross-post your published entries to Mastodon. See the [blog post](https://www.contentful.com/blog/create-bot-rss-webhooks-mastodon-twitter-alternative/) for more details.

Everything that the code does can be done using the UI.

## Installation

1. Install dependencies: `npm install`
2. Rename `.env.example` and add the environment variables required. See the [blog post](https://www.contentful.com/blog/create-bot-rss-webhooks-mastodon-twitter-alternative/) for more information.

## Run it

`node index.js`

You only it need to run it **once**, this is just to help you automated the repeated parts of the webhook creation and make it easier to reproduce in another space.
