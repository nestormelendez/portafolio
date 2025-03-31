import { Box, List, ListItem, ListItemButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import TransitionHooks from "./Menu";
type NavLink = {
  title: string;
  path: string;
  icon: React.ReactElement;
};
type Props = {
  navArrayLinks: NavLink[];
  setOpen: (open: boolean) => void;
};

export default function NavListDrawer({ navArrayLinks, setOpen }: Props) {
  return (
    <Box
      sx={{
        height:"100%",
        width: 200,
        bgcolor:"#383535",
        color: "white",
      }}
    >
      <nav>
        <List>
          {navArrayLinks.map((item) => (
            <ListItem disablePadding key={item.title}>
              {item.title === "Documentación" ? (
                <TransitionHooks setOpen={setOpen} />
              ) : (
                <ListItemButton
                  sx={{
                    p: 1,
                    borderRadius: 1,
                    color: "white",
                    transition: "all 150ms ease",
                    cursor: "pointer",
                    border: "none",
                    boxShadow: 4,
                    display: "flex",
                    pl: 3.5,
                    justifyContent: "left",
                   
                    "&:hover": {
                      bgcolor: "white",
                      boxShadow: 1,
                    },
                    "&:focus": {
                      outline: "none",
                      boxShadow: 4,
                    },
                  }}
                  component={NavLink}
                  to={item.path}
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  {/*   <ListItemIcon>{item.icon}</ListItemIcon> */}
                  {item.title}
                </ListItemButton>
              )}
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
}
