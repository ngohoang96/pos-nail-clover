import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {selectors} from '../../../../stores';
import ListServicesItem from './list-service-item';
import {Logg} from '../../../../utils';

class ListServices extends Component {
  shouldComponentUpdate({listServices: newListServices}) {
    return newListServices !== this.props.listServices;
  }
  render() {
    const {
      listServices,
      deleteSelectedService,
      openModalChangeTechnician,
      openModalChangeService,
    } = this.props;
    return (
      <ScrollView style={styles.container}>
        {listServices.map((item, index) => (
          <ListServicesItem
            key={index}
            index={index}
            quantity={item.quantity}
            amount={item.amount}
            tip={item.tip}
            deleteSelectedService={deleteSelectedService}
            openModalChangeTechnician={openModalChangeTechnician}
            idTechnician={item.idTechnician}
            serviceId={item.serviceId}
            openModalChangeService={openModalChangeService}
          />
        ))}
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
const mapStateToProps = state => ({
  listServices: selectors.home.selectListServices(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ListServices);
