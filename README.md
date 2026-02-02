# Spiritstead DB

## DOMCloud deployment script

```sh
source: https://github.com/TimothyRT/spiritstead-db
features:
  - node lts
nginx:
  root: public_html/dist
  locations:
    - match: /
      try_files: $uri $uri/ /index.html
commands:
  - npm install
  - npm run build
```
