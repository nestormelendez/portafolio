import { Table as MuiTable, TableHead } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { DataItem } from "./TableListDetail"; // Importar DataItem
import Modal from "./Modal";
import TableDetalle from "./TableListDetail";

interface TableProps {
  data: DataItem[]; // Cambiar RF a data
  title: string;
}

export default function TableLista({ data, title }: TableProps) {
  return (
    <TableContainer
      component={Paper}
      sx={{
        width: "100%",
        bgcolor: "#383535",
        height: "60vh",
        overflow: "auto",
      }}
    >
      <TableHead sx={{ p: 2 }}>
        <TableCell
          sx={{ color: "#f2faf6", p: 2, width: 300, }}
        >
          Requisitos funcionales
        </TableCell>{" "}
      </TableHead>
      <MuiTable sx={{}} aria-label="simple table">
        <TableHead sx={{ p: 2 }}>
          <TableRow sx={{}}>
            <TableCell sx={{ color: "#f2faf6", p: 2 }}>RF</TableCell>
            <TableCell sx={{ color: "#f2faf6" }}>Nombre</TableCell>
            <TableCell sx={{ color: "#f2faf6" }}>Acción</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.RF}>
              <TableCell
                component="th"
                scope="row"
                sx={{ p: 2, width: "25%", color: "#f2faf6" }}
              >
                {item.RF}
              </TableCell>
              <TableCell
                align="left"
                sx={{ p: 1, width: "55%", color: "#f2faf6" }}
              >
                {item.name}
              </TableCell>
              <TableCell align="left" sx={{ p: 1, width: "10%" }}>
                <Modal>
                  <TableDetalle data={item} title={title} />
                </Modal>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
}
