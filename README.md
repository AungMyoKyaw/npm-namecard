<h1 align="center">
  <a href="#">
    npm namecard
  </a>
</h1>

> It is me

## Usage

```shell
npm i namecard
```

## index.js

```javascript
#!/usr/bin/env node
const namecard = require('namecard')
const nameCardConfig = {
  name: 'Aung Myo Kyaw',
  about: 'nothing',
  items: [
    {
      label: 'Website',
      url: 'https://www.aungmyokyaw.com/',
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/aung_myo_kyaw',
    },
    {
      label: 'Github',
      url: 'https://github.com/AungMyoKyaw',
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/aungmyokyaw/',
    },
    {
      label: 'Blog',
      url: 'https://blog.aungmyokyaw.com/',
    },
  ],
};
namecard(nameCardConfig.name, nameCardConfig.about, nameCardConfig.items)
```

## License

MIT © [Aung Myo Kyaw](https://github.com/AungMyoKyaw)
