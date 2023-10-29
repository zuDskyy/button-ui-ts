import React from 'react';

// Define the props for your custom button component
export interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // Add any custom props specific to your component
  variant: 'default' | 'destructive' | 'zinc' | 'slate' | 'deleteX';
  size: 'default' | 'sm' | 'lg' | 'icon';
}

// Declare the component using React's forwardRef function
declare const CustomButtons: React.ForwardRefExoticComponent<CustomButtonProps & React.RefAttributes<HTMLButtonElement>>;

export default CustomButtons;