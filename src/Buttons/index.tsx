
import * as React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.less';

export interface IProps {
  size: string;
  children: () => void;
}

export default class Buttons extends React.Component<IProps, any> {
  public static defaultProps = {
    hello: 1
  }

  public render() {
    return (
      <div
        style={{
          fontSize: this.props.size === 'large' ? 40 : 20,
        }}
      >
        { this.props.children }
        <Button> 啊啊啊</ Button>
      </div>
    );
  }
}
