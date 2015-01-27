/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule FeedUFI.react
 * @flow
 */

'use strict';

var UFILikeCount = require('UFILikeCount.react');
var React = require('React');

var FeedUFI = React.createClass({
  _renderLikeCount: function(
      feedback: any
  ) {
    var props = {
      className: "",
      key: "",
      feedback: {feedback},
      permalink: "",
    };
    var ignored = <UFILikeCount {...props} />;
    return (
      <UFILikeCount
        className=""
        key=""
        feedback={feedback}
        permalink=""
      />
    );
  },

  render: function(): ?ReactElement<any, any, any> {
    return (
      <div/>
    );
  }

});

module.exports = FeedUFI;
