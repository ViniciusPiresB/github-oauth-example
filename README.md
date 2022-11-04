## Overview

This application makes an authentication with github API and return user token to make searches or save some information of logged user.

## Requirements

To run this project, you'll need to create an OAuth app in (https://github.com/settings/developers) with homepage url: Ex:(http://localhost:8000) and authorization callback url: Ex:(http://localhost:8000/auth/oauth-callback).

After this, create a file named ".env" based on ".env.example" file, use client_id from your OAuth app and generate a client secret in your OAuth app to use in your .env

## Instructions using node

Run the commands bellow

```bash
npm install
npm run dev
```

## Instructions using docker

Run de commands bellow

```bash
docker build -t viniciuspiresb/github-oauth-example:1.0 .
docker run -dp 8000:8000 viniciuspiresb/github-oauth-example:1.0
```

Access your localhost in your browser at port used on .env file or docker port.
