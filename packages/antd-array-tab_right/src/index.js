// @flow

import React, { Component } from "react";
import Tab from "@tracoco/antd-array-tabs";
import type {ArrayDefaultProps} from 'types/ArrayDefaultProps';

type Props = ArrayDefaultProps<{[string]: any}> & {
  uiParams: {[string]: any}
};
export default class TabRight extends Component<Props> {
  render() {
    const { uiParams } = this.props;
    return (
      <Tab {...this.props} uiParams={{ ...uiParams, position: "right" }} />
    );
  }
}
