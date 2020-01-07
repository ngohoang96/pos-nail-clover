import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View, FlatList, ScrollView } from 'react-native';
import { items } from '../../../../Components/InitScreen/mockData';

import themes from '../../../../config/themes';
import Item from './itemGrid'
import { Logg } from '../../../../utils';
export default class PaymentCoupon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            haizz: ""
        }

    }
    shouldComponentUpdate({ catnameFullMenu: catnameFullMenu, listServicesFullMenu: newList }) {
        return (
            catnameFullMenu != this.props.catnameFullMenu
            || newList != this.props.listServicesFullMenu
        )
    }
    componentDidUpdate(prevProps) {
        if (prevProps.listServicesFullMenu !== this.props.listServicesFullMenu) {
            Logg.info('___thay đổi rồ mà huhu ____', this.state.haizz)
        }
    }
    componentDidMount() {
    }

    render() {
        const { listServicesFullMenu, catnameFullMenu } = this.props
        let list = listServicesFullMenu

        Logg.info('___listFullMenu___', catnameFullMenu)
        list = list.filter((e) => e.catname === catnameFullMenu && e.id != -1)
        console.log('________' + 'tao ổn')
        return (
            <View test style={styles.fx1PR10}>
                <View style={styles.tmp}>
                </View>
                <FlatList
                    numColumns={2}
                    style={styles.containerListRightContent}
                    data={list}
                    renderItem={({ item, index }) => (
                        <Item
                            item={item}
                            index={index}
                            onPress={() => {
                                this.props.updateItemLisFullMenu(item)
                            }} />
                    )}
                    keyExtractor={item => item.id + item.catname + " "}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    fx1PR10: {
        flex: 1, paddingRight: 10,
        zIndex: -1,
        marginBottom: themes.height / 12,
    },
    tmp: { height: themes.height / 20, marginTop: 7, paddingLeft: 1000 },
    containerListRightContent: {
        width: '100%',
        height: '100%',
        flexWrap: 'wrap',
    },
});
