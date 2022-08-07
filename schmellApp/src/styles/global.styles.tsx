import {StyleSheet} from 'react-native';

const globalStyles = StyleSheet.create({
  border_radius_4: {
    borderRadius: 4,
  },
  border_radius_8: {
    borderRadius: 8,
  },
  border_radius_10: {
    borderRadius: 10,
  },
  border_radius_20: {
    borderRadius: 20,
  },
  border_radius_100: {
    borderRadius: 100,
  },
  border_bottom_10: {
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
  },
  border_top_10: {
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  border_top_20: {
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },
  border_top_end_30: {
    borderTopEndRadius: 30,
  },
  border_top_start_30: {
    borderTopStartRadius: 30,
  },
  opacity_50: {
    opacity: 0.5,
  },
  opacity_100: {
    opacity: 1,
  },
  boxShadow: {
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: {width: 4, height: 4},
    shadowRadius: 4,
  },
  modalView: {
    backgroundColor: '#FFD700',
    borderRadius: 20,
    paddingVertical: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '60%',
  },
  carouselView: {
    position: 'absolute',
    top: 60,
    bottom: 80,
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    zIndex: -100,
    left: 0,
  },
  modalButton: {
    top: 0,
    right: 5,
    position: 'absolute',
  },
  leftAbsolute: {
    top: 0,
    left: 0,
    position: 'absolute',
  },
  rightAbsolute: {
    top: 0,
    right: 0,
    position: 'absolute',
  },
  iconLeftTop: {
    top: 11,
    left: 5,
    position: 'absolute',
  },
  iconRightTop: {
    top: 2,
    right: 5,
    position: 'absolute',
  },
  z_100: {
    position: 'relative',
    zIndex: 100,
  },
  z_1: {
    zIndex: 1,
  },
  z_10: {
    zIndex: 10,
  },
});

export default globalStyles;
