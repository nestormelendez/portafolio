import { Theme } from "@emotion/react";
import { Button as MuiButton, SxProps } from "@mui/material";
import { ButtonHTMLAttributes, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "text" | "contained" | "outlined";
  href?: string;
  children: ReactNode;
  sx?: SxProps<Theme> | undefined
};

export  const Button = ({ sx ,children, variant = "text", href }: Props) => {
  return (
    <MuiButton sx={sx} variant={variant} href={href}>
      {children} 
    </MuiButton>
  );
};
