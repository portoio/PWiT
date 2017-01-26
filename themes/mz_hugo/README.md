# MZ Hugo

## Installation instructions
1. [Get Hugo](https://gohugo.io/#action) (theme developed on v0.18)
2. Create a new Hugo project
3. Stick this theme inside */themes*
4. Add content

## Deploy on Netlify
1. Push your Hugo project to Github
2. Make sure this theme is NOT recognized as a submodule (no *.git* directory)
3. [Get a Netlify account](https://app.netlify.com/signup)
4. Choose your Github repository and branch, **use build command `hugo_0.18`** and set *public/* as your Public Folder.

## Activate Netlify CMS
1. Set the correct repo and branch on the provided *static/admin/config.yml*
2. Create a new Github application following [Netlify's instructions](https://www.netlify.com/docs/authentication-providers/#using-an-authentication-provider) - don't forget the `https://api.netlify.com/auth/done` callback URL.
3. Go to your Netlify dashboard, select your site, navigate to Access > Authentication Providers > Install Provider > Github and use the Client ID and Secret generated in step 2.
4. Start using the CMS on **http://[your-website-url]/admin**
