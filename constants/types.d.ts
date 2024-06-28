import 'react-native';
import { ImageSourcePropType } from 'react-native';

declare module 'react-native' {
  interface ViewProps {
    className?: string;
  }
  interface TextProps {
    className?: string;
  }
  interface ImageProps {
    className?: string;
  }

  interface TouchableOpacityProps {
    className?: string;
  }

  
  // Add other component types as needed
}

export type TabIconProps = {
  icon?: ImageSourcePropType;
  color?: string;
  name?: string;
  focused?: boolean;
};

export type CustomButtonProps = {
  title?: string;
  handlePress?: () => void; 
  containerStyles?: string;
  textStyles?: string;
  isLoading?: boolean;

}