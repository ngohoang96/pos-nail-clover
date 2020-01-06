import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View, FlatList, ScrollView } from 'react-native';
import { items } from '../../../../Components/InitScreen/mockData';

import themes from '../../../../config/themes';
import { normalize } from '../../../../themes/FontSize';
import TextCmp from '../../../../themes/TextCmp';
import GridList from 'react-native-grid-list';
import Item from './itemGrid'
import { Logg } from '../../../../utils';
import { Metrics } from '../../../../themes';
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
            this.setState({
                haizz: this.state.haizz + ' a '
            })
        }
    }
    componentDidMount() {
    }

    render() {
        const { listServicesFullMenu, catnameFullMenu } = this.props
        let list = listServicesFullMenu

        Logg.info('___listFullMenu___', catnameFullMenu)
        list = list.filter((e) => e.catname === catnameFullMenu && e.id != -1)
        // Logg.info('___listFullMenu___', JSON.stringify(list.filter((e) => e.catname === catnameFullMenu && e.id != -1)))
        console.log('________' + 'tao ổn')
        return (
            <View test style={styles.fx1PR10}>
                <View style={styles.tmp}>
                    {/* <TextCmp >{this.state.haizz}</TextCmp> */}
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
                                Logg.info(JSON.stringify.listServicesFullMenu)
                                this.props.updateItemLisFullMenu(item)
                                // this.setState({
                                //     haizz: this.state.haizz + ' a '
                                // })
                            }} />
                    )}
                    keyExtractor={item => item.id + item.catname + " "}
                />
                {/* <ScrollView
                    contentContainerStyle={{ width: '100%', backgroundColor: 'red', height: '100%', flexWrap: 'wrap', flexDirection: 'row' }}
                >
                    {listServicesFullMenu.map((item, index) => {
                        return <Item
                            item={item}
                            index={index}
                            onPress={() => Logg.info(JSON.stringify.listServicesFullMenu)} />
                    })}
                </ScrollView> */}
                {/* <GridList
                    showSeparator
                    data={listServicesFullMenu}
                    numColumns={2}
                    renderItem={({ item, index }) => {
                        return (
                            <Item
                                item={item}
                                index={index}
                                onPress={() => Logg.info(JSON.stringify.listServicesFullMenu)} />
                        )
                    }}
                    separatorBorderWidth={5}
                    showSeparator={true}>

                </GridList> */}
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
        // backgroundColor: 'red',
        flexWrap: 'wrap',
    },
});
