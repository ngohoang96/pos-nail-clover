import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  ScrollView,
  FlatList,
  Animated,
  Easing,
  PanResponder,
  TouchableHighlight,
  Alert,
} from 'react-native';
import {iconsScroll} from '../../../../assets';
import themes from '../../../../config/themes';
import {normalize} from '../../../../themes/FontSize';

import TechnicianRepander from '../../../../Components/InitScreen/TechnicianRepander';
import {ToastLib, Logg} from '../../../../utils';
import {TextCmp, Metrics, Colors} from '../../../../themes';
import ItemTech from '../../../../Components/InitScreen/itemTech';
import {connect} from 'react-redux';
import {actions, selectors} from '../../../../stores';
import DraggableFlatList from 'react-native-draggable-dynamic-flatlist';
import TechnicianDetail from '../../modal/technician-detail/TechnicianDetail';

class TechnicianTurn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowModal: false,
      technicianDetail: null,
    };
  }

  toogleTechnicianDetail = (value, detail) => {
    this.setState({
      isShowModal: value,
      technicianDetail: detail,
    });
  };

  selectTechnician = item => {
    if (this.props.listTechnicianSelected.length > 0) {
      ToastLib.show('Please select services!');
    } else {
      this.props.update({name: item.name, idTechnician: item.idTechnician});
    }
  };

  renderItem = ({item, index}) => {
    Logg.info('item', item);
    return (
      <TechnicianRepander
        key={index}
        name={item.name}
        updateDropZone={() => this.selectTechnician(item)}
        style={{marginHorizontal: 5}}>
        <TouchableOpacity onPress={() => this.selectTechnician(item)}>
          <ItemTech
            nameTechnician={item.name}
            toogleTechnicianDetail={() =>
              this.toogleTechnicianDetail(true, item.technicianDetail)
            }
          />
        </TouchableOpacity>
      </TechnicianRepander>
    );
  };

  render() {
    const {nailTechDropZone, listTechnician} = this.props;
    const {technicianDetail, isShowModal} = this.state;
    return (
      <View style={styles.fx09}>
        <View style={styles.wrapper_title}>
          <TextCmp style={styles.txtCenter}>Technician Turn</TextCmp>
        </View>
        <View style={styles.fx1}>
          <FlatList
            data={listTechnician}
            keyExtractor={(item, index) => index.toString()}
            renderItem={this.renderItem}
          />
        </View>
        {isShowModal && technicianDetail && (
          <TechnicianDetail
            toogleModal={this.toogleTechnicianDetail}
            isShow={isShowModal}
            technicianDetail={technicianDetail}
          />
        )}
      </View>
    );
  }
}
const mapDispatchToProps = dispatch => {
  const update = params => {
    let id = new Date().getTime();
    params.id = id;
    dispatch(actions.home.updateListTechnicianSelected(params));
  };
  return {update};
};

const mapStateToProps = state => ({
  dataService: selectors.home.getDataService(state),
  listTechnicianSelected: selectors.home.selectListTechnicianSelected(state),
});
export default connect(mapStateToProps, mapDispatchToProps)(TechnicianTurn);
const styles = StyleSheet.create({
  wrapper_title: {
    height: '7%',
    width: '100%',
    // paddingRight: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 0.5,
    borderRightColor: 'gray',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  fx09: {
    flex: 1,
    // overflow: 'scroll',
    backgroundColor: Colors.bgGray,

    // marginBottom: themes.height / 12,
  },
  txtCenter: {
    alignItems: 'center',
    color: 'black',
    fontSize: normalize(5),
  },
  fx1: {
    flex: 1,
    backgroundColor: Colors.orange,
    borderRightWidth: 0.5,
    borderRightColor: '#CECECE',
  },
  tmp: {
    height: Metrics.appHeight / 20,
  },
});
