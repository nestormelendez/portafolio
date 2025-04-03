import * as React from "react";
import {
  TransitionContext,
  useTransitionStateManager,
  useTransitionTrigger,
} from "@mui/base/useTransition";
import { ListItemIcon, ToggleButton, Box} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import NavListDrawerDocs from "./NavListDrawerDocs";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ScatterPlotIcon from "@mui/icons-material/ScatterPlot";
type PropsDocs = {
  title: string;
  path: string;
  icon: React.ReactElement;
};
const navArrayDocs: PropsDocs[] = [
  {
    title: "Casos de uso",
    path: "/docs",
    icon: <ScatterPlotIcon />,
  },
  {
    title: "Ventas",
    path: "/login",
    icon: <LoginIcon />,
  },
  {
    title: "Inventario",
    path: "/register",
    icon: <AppRegistrationIcon />,
  },
  {
    title: "Trabajos",
    path: "/works",
    icon: <AppRegistrationIcon />,
  },
  {
    title: "Formulario",
    path: "/form",
    icon: <AppRegistrationIcon />,
  },
  {
    title: "Clima",
    path: "/weather",
    icon: <AppRegistrationIcon />,
  },
  {
    title: "Skeletor",
    path: "/skeletor",
    icon: <AppRegistrationIcon />,
  },
];

type Props = {
  setOpen: (open: boolean) => void;
  navArrayDocs?: PropsDocs[];
};

export default function TransitionHooks({ setOpen }: Props) {
  return (
    <Trivia
      label={
        <ListItemIcon sx={{ color: "white" }}>
          {" "}
          Documentación <ArrowDropDownIcon />{" "}
        </ListItemIcon>
      }
    >
      <SlideDown>
        <NavListDrawerDocs navArrayDocs={navArrayDocs} setOpen={setOpen} />
      </SlideDown>
    </Trivia>
  );
}

interface TriviaProps {
  label: React.ReactNode;
  children: React.ReactNode;
}

function Trivia(props: TriviaProps) {
  const { label, children } = props;
  const [open, setOpen] = React.useState(false);
  const { contextValue } = useTransitionTrigger(open);
  const containerId = React.useId();

  return (
    <div>
      <ToggleButton
        value="toggle"
        type="button"
        aria-controls={containerId}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        sx={{
          p: 1,
          borderRadius: 1,
          transition: "all 150ms ease",
          cursor: "pointer",
          border: "none",
          boxShadow: 4,
          display: "block",
          width: "100%",
          textTransform: "capitalize",
          fontSize: 16,

          "&:hover": {
            // Estilos para hover
            bgcolor: "#f40f0f0", // Cambia el color de fondo al hacer hover
            boxShadow: 1, // Aumenta la sombra al hacer hover
          },
          "&:focus": {
            // Estilos para focus
            outline: "none", // Agrega un borde al hacer focus
            boxShadow: 3, // Aumenta la sombra al hacer focus
          },
        }}
      >
        {label}
      </ToggleButton>
      <TransitionContext.Provider value={contextValue}>
        <Box id={containerId} aria-hidden={!open} sx={{ p: 1, color: "white" }}>
          {children}
        </Box>
      </TransitionContext.Provider>
    </div>
  );
}

function SlideDownInnerWrapper({
  children,
  sx,
}: {
  children: React.ReactNode;
  sx?: React.CSSProperties;
}) {
  return <div style={sx}>{children}</div>;
}
function SlideDownOuterWrapper({
  children,
  sx,
  className,
  onTransitionEnd,
}: {
  children: React.ReactNode;
  sx?: React.CSSProperties;
  className?: string;
  onTransitionEnd?: (event: React.TransitionEvent<HTMLDivElement>) => void;
}) {
  return (
    <div className={className} style={sx} onTransitionEnd={onTransitionEnd}>
      {children}
    </div>
  );
}

function SlideDown(props: React.PropsWithChildren<object>) {
  const { children } = props;
  const { requestedEnter, onExited } = useTransitionStateManager();

  return (
    <SlideDownOuterWrapper
      sx={{
        display: "grid",
        transition: "grid-template-rows 200ms ease-in-out",
        gridTemplateRows: requestedEnter ? "1fr" : "0fr", // Condición para grid-template-rows
      }}
      className={requestedEnter ? "expanded" : ""}
      onTransitionEnd={(event) => {
        if (event.propertyName === "grid-template-rows") {
          if (!requestedEnter) {
            onExited();
          }
        }
      }}
    >
      <SlideDownInnerWrapper sx={{ overflow: "hidden", color: "white" }}>
        {children}
      </SlideDownInnerWrapper>
    </SlideDownOuterWrapper>
  );
}
