# Mr Jam Stack

A Jam Stack all rounder desktop app. `Mr JAM Stack` aims to provide developers a no code / low code approach for creating static websites without compromising one's favourite SSG, CMS or Deployment workflow.

[What is JAM Stack?](https://jamstack.org/)

#### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9080
npm run dev

# build electron application for production
npm run build


```

### Feature Roadmap
1. *SSG:* Hugo, Gridsome, Nuxt
2. *CMS:* NetlifyCMS, Strapi, Contentful and Sanity.
3. *CI:* Github Actions, Circle CI, Netlify CI etc.
4. *Servers:* AWS, Github Pages, Netlify, Vercel, Heroku 

#### Future

1. Support cloudflare, cloudinary, mailchimp SaaS for media and mails management.

### How it works?

1. User selects an SSG, CMS, CI and deployment servers.
Assuming platform to be macOS, Hugo, NetlifyCMS, Github Actions, Github Pages

2. `Mr JAM Stack` generates website source code and converts Step-1 selections into website configuration.

3. User grants access keys to github account

4. `Mr JAM Stack` creates a repository on github, clones it locally and pushes the website code into it.

5. Since the website is generated dynamically on local machine, `Mr JAM Stack` detects and provides Edit, Draft, Push Live or Roll back features with reference to the website.

---

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).