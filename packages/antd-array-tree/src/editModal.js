// @flow

import React, { Component } from "react";
import { Modal } from "antd";

import { FormattedMessage } from "react-intl";
import defaultMessage from "@tracoco/antd-locales";
import {Item, ConfirmButton, ResetButton} from 'canner-helpers';
import type {FieldId} from 'types/DefaultProps';

type Props = {
  onChange: (refId: FieldId | {[string]: FieldId}, type: string, value?: any) => Promise<void>
  | (Array<{
    refId: FieldId | {[string]: FieldId},
    type: string,
    value?: any
  }>) => Promise<void>,
  updateKeys?: Array<string>,
  refId: FieldId,
  reset: Function
}

type State = {
  visible: boolean,
  order: number
}

export default class EditModal extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      visible: false,
      order: 0,
    };
  }

  showModal = (i: number) => {
    const {updateShowModal} = this.props;
    updateShowModal(true);
    this.setState({
      visible: true,
      order: i
    });
  }

  closeModalAndReset = () => {
    const {reset, refId, updateShowModal} = this.props;
    updateShowModal(false);
    this.setState({
      visible: false
    }, () => reset(refId));
  }

  handleCancel = () => {
    this.closeModalAndReset();
  }

  render() {
    const { visible, order } = this.state;
    const { refId } = this.props;
    const footer = (
      <div>
        <ConfirmButton
          text={<FormattedMessage
            id="array.table.modal.okText"
            defaultMessage={defaultMessage.en["array.table.modal.okText"]}
          />}
          callback={this.closeModalAndReset}
        />
        <ResetButton
          text={<FormattedMessage
            id="array.table.modal.cancelText"
            defaultMessage={defaultMessage.en["array.table.modal.cancelText"]}
          />}
          callback={this.closeModalAndReset}
        />
      </div>
    );

    return (
      <Modal
        width="80%"
        visible={visible}
        onCancel={this.handleCancel}
        footer={footer}
      >
        {visible && (
          <Item
            refId={refId.child(order)}
          />
        )}
      </Modal>
    );
  }
}