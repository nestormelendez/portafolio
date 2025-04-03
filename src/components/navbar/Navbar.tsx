import NavListDrawer from "./NavListDrawer";
import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

type NavLink = {
  title: string;
  path: string;
  icon: React.ReactElement;
};

type Props = {
  navArrayLinks: NavLink[];
  onclick?: () => void;
};

export default function Navbar({ navArrayLinks, onclick }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar>
        <Toolbar>
          <IconButton
            color="inherit"
            size="large"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "flex", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "left" }}>
            Nestor Melendez
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            {navArrayLinks.map((item) => (
              <Button
                component={NavLink}
                key={item.title}
                color="inherit"
                to={item.path}
                onClick={onclick}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
        <NavListDrawer navArrayLinks={navArrayLinks} setOpen={setOpen} />
      </Drawer>
    </>
  );
}
