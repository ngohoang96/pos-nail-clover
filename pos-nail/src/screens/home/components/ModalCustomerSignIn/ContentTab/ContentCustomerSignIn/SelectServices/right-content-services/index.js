import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ItemRight from './ItemRight'
import { Metrics } from '../../../../../../../../themes'
export class index extends Component {
    render() {
        const { getlistDataServices, catnameCustomerServices, onPress } = this.props
        let list = getlistDataServices
        list = list.filter((e) => e.catname === catnameCustomerServices && e.id != -1)
        return (
            <FlatList
                showsVerticalScrollIndicator={false}
                numColumns={2}
                style={styles.containerListRightContent}
                data={list}
                renderItem={({ item, index }) => (
                    <ItemRight
                        item={item}
                        index={index}
                        onPress={() => {
                            onPress(item)
                        }} />
                )}
                keyExtractor={item => item.id + item.catname + " "}
            />
        );
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(index)

const styles = StyleSheet.create({
    containerBottomModal: {
        width: Metrics.appWidth * 0.8,
        height: Metrics.appHeight * 0.1,
        backgroundColor: '#397DA4',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
})