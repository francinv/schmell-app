import * as ScreenOrientation from 'expo-screen-orientation';

export const lockPortrait = async () => {
  await ScreenOrientation.lockAsync(
    ScreenOrientation.OrientationLock.PORTRAIT_UP,
  );
};

export const lockLandscape = async () => {
  await ScreenOrientation.lockAsync(
    ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT,
  );
};
