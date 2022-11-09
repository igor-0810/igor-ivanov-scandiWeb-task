import React from "React";

class Spacer extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { width, height } = this.props;
    return <div style={{ height: height, width: width }} />;
  }
}

export default Spacer;
