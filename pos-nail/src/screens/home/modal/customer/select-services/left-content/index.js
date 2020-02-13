import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import Item from './ItemLeft'
export default class index extends Component {
    render() {
        const { mCatName, dataSearchButton, onPress } = this.props
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    width: '33%',
                    height: '100%',
                    // backgroundColor: 'white',

                }}>
                {dataSearchButton.map((item, index) => {
                    if (index != 0) {
                        return (
                            <Item
                                key={index + ''}
                                item={item}
                                mCatName={mCatName}
                                onPress={() => onPress(item)
                                }
                            />
                        );
                    } else {
                        return null
                    }
                })}
            </ScrollView>

        );
    }
}
