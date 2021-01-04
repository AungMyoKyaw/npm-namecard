const ImportJsx = require('import-jsx');
const React = require('react');
const Ink = require('ink');
const { render } = Ink;
const mynameCard = ImportJsx('./ui.js');

function hey(name = 'amk', about = 'amk', items = []) {
  render(
    React.createElement(mynameCard, {
      name: name,
      about: about,
      items: items,
    })
  );
}

module.exports = hey;
