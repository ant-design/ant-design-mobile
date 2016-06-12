import React, { View } from 'react-native';
import { Button, WhiteSpace, WingBlank } from 'antm';

class BasicButtonExample extends React.Component {

  render() {
    return (
      <View>
        <WhiteSpace />
        <WingBlank style={{ flexDirection: 'row' }}>
            <Button type={'primary'}>
              primary button
            </Button>
            <View style={{ flex: 1 }} />
        </WingBlank>

        <WhiteSpace />
        <WingBlank>
            <Button type={'default'}>
              default button
            </Button>
        </WingBlank>

        <WhiteSpace />
        <WingBlank>
            <Button type={'primary'} goast>
              primary goast button
            </Button>
        </WingBlank>

        <WhiteSpace />
        <WingBlank>
            <Button type={'default'} goast>
              default goast button
            </Button>
        </WingBlank>

        <WhiteSpace />
        <WingBlank>
            <Button type={'primary'} disabled>
              primary disable button
            </Button>
        </WingBlank>

        <WhiteSpace />
        <WingBlank>
            <Button type={'primary'} goast disabled>
              primary goast disable button
            </Button>
        </WingBlank>

        <WhiteSpace />
        <WingBlank>
            <Button type={'default'} disabled>
              default disable button
            </Button>
        </WingBlank>

        <WhiteSpace />
        <WingBlank>
            <Button type={'default'} goast disabled>
              default goast disable button
            </Button>
        </WingBlank>

        <WhiteSpace />
        <WingBlank>
            <Button type={'primary'} size={'small'}>
              primary small button
            </Button>
        </WingBlank>
      </View>
    );
  }
}

export const title = 'Button';
export const description = 'button example';
export const demo = BasicButtonExample;
