import {StyleSheet} from 'react-native';

const layoutStyles = StyleSheet.create({
  flex_column: {
    display: 'flex',
    flexDirection: 'column',
  },
  flex_row: {
    display: 'flex',
    flexDirection: 'row',
  },
  flex_container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  align_center: {
    alignItems: 'center',
  },
  justify_center: {
    justifyContent: 'center',
  },
  flex_1: {
    flex: 1,
  },
  justify_space: {
    justifyContent: 'space-between',
  },
  flex_center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pos_rel: {
    position: 'relative',
  },
  top_min_20: {
    top: -20,
  },
});

export default layoutStyles;
