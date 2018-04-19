// @flow
import React, {Component, Fragment} from 'react';
import Image from 'packages/antd-string-image';
import cmsLocale from 'packages/antd-locales';
import {IntlProvider} from 'react-intl';
import {Divider} from 'antd';
import ExamplePrimitiveValueWrapper from '../ExamplePrimitiveValueHoc';
import type {PrimitiveTypes} from '../types';
import RefId from 'canner-ref-id';

@ExamplePrimitiveValueWrapper("https://cdn.canner.io/images/logo/logo-word.png")
class ImageDemo1 extends Component<PrimitiveTypes<string>> {
  render() {
    const {value, onChange} = this.props;
    return (
      <IntlProvider
        locale="en"
        messages={cmsLocale["en"]}>
        <Fragment>
          <Divider>Normal image with image</Divider>
          <Image
            refId={new RefId("image")}
            value={value}
            uiParams={{service: 'imgur'}}
            onChange={onChange}
            />
        </Fragment>
      </IntlProvider>
    );
  }
}

@ExamplePrimitiveValueWrapper()
class ImageDemo2 extends Component<PrimitiveTypes<string>> {
  render() {
    const {value, onChange} = this.props;
    return (
      <IntlProvider
        locale="en"
        messages={cmsLocale["en"]}>
        <Fragment>
          <Divider>Normal image uploader without selected image</Divider>
          <Image
            refId={new RefId("image")}
            value={value}
            uiParams={{service: 'imgur'}}
            onChange={onChange}
            />
        </Fragment>
      </IntlProvider>
    )
  }
}

@ExamplePrimitiveValueWrapper("https://cdn.canner.io/images/logo/logo-word.png")
class ImageDemo3 extends Component<PrimitiveTypes<string>> {
  render() {
    const {value, onChange} = this.props;
    return (
      <IntlProvider
        locale="en"
        messages={cmsLocale["en"]}>
        <Fragment>
          <Divider>Disabled image uploader with image</Divider>
          <Image
            refId={new RefId("image")}
            disabled
            value={value}
            uiParams={{service: 'imgur'}}
            onChange={onChange}
            />
        </Fragment>
      </IntlProvider>
    )
  }
}

@ExamplePrimitiveValueWrapper()
class ImageDemo4 extends Component<PrimitiveTypes<string>> {
  render() {
    const {value, onChange} = this.props;
    return (
      <IntlProvider
        locale="en"
        messages={cmsLocale["en"]}>
        <Fragment>
          <Divider>Disabled image uploader without image</Divider>
          <Image
            refId={new RefId("image")}
            disabled
            value={value}
            uiParams={{service: 'imgur'}}
            onChange={onChange}
            />
        </Fragment>
      </IntlProvider>
    )
  }
}

export default class Demo extends React.Component<{}> {
  render() {
    return (
      <Fragment>
        <ImageDemo1/>
        <ImageDemo2/>
        <ImageDemo3/>
        <ImageDemo4/>
      </Fragment>
    );
  }
}