// @flow
import * as React from 'react';
import {fromJS} from 'immutable';
import RefId from 'canner-ref-id';
import Picker from 'packages/antd-share-relation';
import {Divider, Button} from 'antd';
import ExamplePrimitiveValueWrapper from '../ExamplePrimitiveValueHoc';
import type {PrimitiveTypes} from '../types';

let list = fromJS([{
  _id: 'item1',
  title: 'item1'
}, {
  _id: 'item2',
  title: 'item2'
}, {
  _id: 'item3',
  title: 'item3'
}, {
  _id: 'item4',
  title: 'item4'
}, {
  _id: 'item5',
  title: 'item5'
}]);

const rtnCtx = {
  response: {
    pagination: {
      goTo: () => {
        return {}
      },
      totalPage: 10,
      page: 1,
    },
    body: list
  }
}

@ExamplePrimitiveValueWrapper(fromJS([{
  _id: 'item1',
  title: 'item1'
}, {
  _id: 'item2',
  title: 'item2'
}]))
export class RelationPickerDemo1 extends React.Component<PrimitiveTypes<string>, {visible: boolean}> {
  state = {
    visible: false
  }

  trigger = () => {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    const {visible} = this.state;
    const {value} = this.props;
    return (
      <React.Fragment>
        <Divider>share relatio picker - multi select</Divider>
        <Button onClick={this.trigger}>Trigger</Button>
        <Picker
          fetch={() => Promise.resolve(rtnCtx)}
          fetchRelation={() => {}}
          title="選擇你要的物件"
          visible={visible}
          onOk={this.trigger}
          onCancel={this.trigger}
          pickOne={false}
          // $FlowFixMe
          pickedIds={[value && value.getIn([0, "_id"])]}
          columns={[{
            title: 'Title',
            dataIndex: 'title'
          }]}
          refId={new RefId('picker')}
          relation={{
            relationTo: 'posts'
          }}
        />
      </React.Fragment>
    );
  }
}


@ExamplePrimitiveValueWrapper(fromJS([{
  _id: 'item1',
  title: 'item1'
}]))
export class RelationPickerDemo2 extends React.Component<PrimitiveTypes<string>, {visible: boolean}> {
  state = {
    visible: false
  }

  trigger = () => {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    const {visible} = this.state;
    const {value} = this.props;
    return (
      <React.Fragment>
        <Divider>share relatio picker - single select</Divider>
        <Button onClick={this.trigger}>Trigger</Button>
        <Picker
          fetch={() => Promise.resolve(rtnCtx)}
          fetchRelation={() => {}}
          title="選擇你要的物件"
          visible={visible}
          onOk={this.trigger}
          onCancel={this.trigger}
          pickOne={true}
          // $FlowFixMe
          pickedIds={[value && value.getIn([0, "_id"])]}
          columns={[{
            title: 'Title',
            dataIndex: 'title'
          }]}
          refId={new RefId('picker')}
          relation={{
            relationTo: 'posts'
          }}
        />
      </React.Fragment>
    );
  }
}

export default class Demo extends React.Component<{}> {
  render() {
    return (
      <React.Fragment>
        <RelationPickerDemo1 />
        <RelationPickerDemo2 />
      </React.Fragment>
    )
  }
}