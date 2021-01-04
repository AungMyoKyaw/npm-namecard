<h1 align="center">
  <a href="#">
    npm namecard
  </a>
</h1>

> npm name namecard lib

## Usage

```shell
npm i namecard
```

### package.json

```json
.
.
.
"bin": {
  "aungmyokyaw": "./src/index.js"
},
.
.
.
```


### index.js

```javascript
#!/usr/bin/env node

const namecard = require('namecard');
const nameCardConfig = {
  name: 'Aung Myo Kyaw',
  about: 'nothing',
  items: [
    {
      label: 'Github',
      url: 'https://github.com/AungMyoKyaw',
    },
    {
      label: 'Blog',
      url: 'https://blog.aungmyokyaw.com/',
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/aung_myo_kyaw',
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/aungmyokyaw/',
    },
  ],
};
namecard(nameCardConfig.name, nameCardConfig.about, nameCardConfig.items);
```

## Example Repo

[AungMyoKyaw/aungmyokyaw-npm](https://github.com/AungMyoKyaw/aungmyokyaw-npm)

## License

MIT © [Aung Myo Kyaw](https://github.com/AungMyoKyaw)
