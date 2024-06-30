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
// New types for SignIn component and FormField
export type SignInFormState = {
  email: string;
  password: string;
};

export type SignUpFormState = {
  username: string;
  email: string;
  password: string;
};

export type FormFieldProps = {
  title?: string;
  value?: string;
  placeholder?: string;
  handleChangeText?: (text: string) => void;
  otherStyles?: string;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'password';
};

export type TrendingProps = {
  posts: { id: number }[]; 
  id?: any;
}

export type EmptyStateProps ={
  title?: string;
  subtitle?: string;
}