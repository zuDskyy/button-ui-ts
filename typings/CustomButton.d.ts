import { type VariantProps } from 'class-variance-authority';
import React from 'react';
declare const buttonVariant: (props?: {
    variant?: "default" | "destructive" | "deleteX" | "zinc" | "slate";
    size?: "default" | "icon" | "sm" | "lg";
    defaultVariants?: "size" | "variant";
} & import("class-variance-authority/dist/types").ClassProp) => string;
export interface customButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariant> {
    variant: "default" | "destructive" | "zinc" | "slate" | "deleteX";
}
export declare const CustomButton: React.ForwardRefExoticComponent<customButtonProps & React.RefAttributes<HTMLButtonElement>>;
export {};
