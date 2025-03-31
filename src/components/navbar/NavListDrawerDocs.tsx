import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import { NavLink } from "react-router-dom";
type PropsDocs = {
  title: string;
  path: string;
  icon: React.ReactElement;
};
type Props = {
  navArrayDocs: PropsDocs[];
  setOpen: (open: boolean) => void;
};

export default function NavListDrawerDocs({ navArrayDocs, setOpen }: Props) {
  return (
    <Box
      sx={{
        width: 250,
      }}
    >
      <nav>
        <List>
          {navArrayDocs.map((item) => (
            <ListItem disablePadding key={item.title}>
              <ListItemButton
                component={NavLink}
                to={item.path}
                onClick={() => {
                  setOpen(false);
                }}
              >
                <ListItemIcon sx={{ color: "white" }}>
                  {" "}
                  {item.icon}
                </ListItemIcon>
                {item.title}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
}
