declare module '*.png' {
    const value: import('react-native').ImageSourcePropType;
    export default value;
  }
  
  declare module '*.jpg' {
    const value: string;
    export default value;
  }
  
  declare module '*.jpeg' {
    const value: string;
    export default value;
  }
  
  declare module '*.svg' {
    const content: any;
    export default content;
  }
  declare module 'expo-permissions' {
    export const ACTIVITY_RECOGNITION: string;
  }
  