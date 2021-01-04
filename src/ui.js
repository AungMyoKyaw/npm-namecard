const React = require('react');
const PropTypes = require('prop-types');
const Ink = require('ink');
const BigText = require('ink-big-text');
const Link = require('ink-link');

const { Component } = React;
const { Color, Box } = Ink;

class NameCard extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Box
        borderStyle="double"
        borderColor="cyan"
        float="center"
        flexDirection="column"
        padding={1}
      >
        <Box float="center" marginBottom={1}>
          <BigText
            text={this.props.name}
            font="tiny"
            space={false}
            colors={['green']}
            background="blue"
            align="left"
          />
        </Box>
        {this.props.items.map((item, i) => {
          return (
            <Box float="center" marginLeft={1} marginBottom={1} key={i}>
              <Color green>
                <Link url={item.url}>{item.label}</Link>
              </Color>
            </Box>
          );
        })}
      </Box>
    );
  }
}

NameCard.propTypes = {
  name: PropTypes.string.isRequired,
  about: PropTypes.string,
  items: PropTypes.array.isRequired,
};

module.exports = NameCard;
