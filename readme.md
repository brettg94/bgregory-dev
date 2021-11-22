# Brett's Resumé Website

[bgregory.dev](https://bgregory.dev)

## Really? Custom software for a resumé website?

Yeah, taking 45 minutes to build this on Wix or SquareSpace would have been far easier. But whenever I was involved with hiring a new developer, I always loved when somebody had open-source (and live) projects that I could poke around and learn from. So that's what this is: a resumé website that also serves as a portfolio piece, with the full source available.

As of right now, this project is in a sort of MVP (minimum viable product) state. It works and gets the job done, but it could be better.

## What will I find here?

- A relatively simple full-stack application running React on the frontend, and Node with Express on the backend.
- TypeScript throughout.
- Simple selection of Redux actions, including a Thunk.
- SCSS modules for locally-scoping styles to individual components.
- Server-side integration with Contentful, which is a content management system that hosts most of the website's textual content and images. In this case, Contentful is playing the role of a traditional database.
- Basic RESTful API for fetching content.
- A small AWS component that utilizes CloudFront as a CDN for static assets (JS/CSS/Images).
- Basic CI/CD built out with GitHub Actions.

## What's in store for the future?

- Server-side memory caching. (Or redis. Either way, I want to deflect unnecessary Contentful API calls)
- Proper unit and integration testing. (I made the conscious decision to defer testing until post-MVP. I'm usually semi-adherant to TDD, believe it or not.)
- Hearty refactoring with better dependency-injection practices server-side.

## Setup

- Requires Node 16.x
- Yarn or NPM

`yarn install` to install dependencies.
`yarn dev:client` to run webpack dev server for client.
`yarn dev:server` to run nodemon for server.

### .env Requirements

The application needs a `.env` file created at the root of the project directory with the following contents:

```
NODE_ENV=["production" or "development"]
CONTENTFUL_SPACE_ID=[Space id here]
CONTENTFUL_ACCESS_TOKEN=[Access token here]
CONTENTFUL_PREVIEW_ACCESS_TOKEN=[Preview access token here (optional)]
CONTENTFUL_USE_PREVIEW_API=[true or false]
CONTENTFUL_ENVIRONMENT=[Environment name here (probably "master")]

ANALYZE_WEBPACK_BUNDLE=["true" if you want to generate a bundle report, otherwise omit]

CDN_URL=[Base URL for the CDN you want to use. Omit for no CDN.]
CDN_BUCKET_NAME=[Used by CDN upload script to transfer assets to S3.]
AWS_ACCESS_KEY_ID=[Used by CDN upload script.]
AWS_SECRET_ACCESS_KEY=[Used by CDN upload script.]
AWS_ACCOUNT_ALIAS=[Used by CDN upload script.]
AWS_REGION=[Used by CDN upload script.]
```

## License

[Creative Commons Attribution 4.0 International Public License](https://creativecommons.org/licenses/by/4.0/)
