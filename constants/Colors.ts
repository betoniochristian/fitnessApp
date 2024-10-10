/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#7c73e6';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    header: 'white',
    header1: 'black',
    text: 'white',
    text2: '#E0E0E0',
    background: '#fff',
    tint: tintColorLight,
    color: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    header: 'white',
    header1: 'white',
    text: 'black',
    text2: 'black',
    background: '#151718',
    tint: tintColorDark,
    color: tintColorLight,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};
