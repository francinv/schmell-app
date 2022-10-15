import {StyleSheet} from 'react-native';

const homeStyle = StyleSheet.create({
  img: {
    width: '90%',
    marginTop: 10,
    maxHeight: 70,
  },
  detailView: {
    width: '90%',
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    paddingVertical: 10,
    paddingBottom: 20,
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(159, 162, 180, 0.2)',
  },
  detailImg: {
    width: 200,
    height: 200,
  },
  detailTitle: {
    fontSize: 30,
    textAlign: 'center',
    color: '#FFFFFF',
    width: '90%',
    fontFamily: 'CCBiffBamBoomW00-Regular',
  },
  detailDescription: {
    textAlign: 'center',
    fontFamily: 'Artifika-Regular',
    color: '#FFFFFF',
    fontSize: 16,
    width: '90%',
    marginTop: 5,
  },
  checkBoxView: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginTop: 10,
    width: '60%',
  },
  checkBoxText: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Artifika-Regular',
    color: '#FFFFFF',
  },
});

export default homeStyle;
