import { Button as MuiButton } from "@mui/material";
import { ButtonHTMLAttributes, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "text" | "contained" | "outlined";
  href?: string;
  children: ReactNode
};

export  const Button = ({ children, variant = "text", href }: Props) => {
  return (
    <MuiButton variant={variant} href={href}>
      {children} 
    </MuiButton>
  );
};
