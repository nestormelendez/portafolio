import { Box, Table as MuiTable } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export interface DataItem {
  RF: string;
  idR: number;
  name: string;
  version: number;
  author: string;
  date: string;
  objective: string;
  requirements: string;
  description: string;
  precondition: string;
  normalSequence: { id: number; step: number; action: string }[];
  exceptions: { id: number; step: number; action: string }[];
  postcondition: string;
  importance: string;
  urgencia: string;
  comments: string;
}

type TableDetalleProps = {
  data: DataItem;
  title: string;
};

export default function TableDetalle({ data, title }: TableDetalleProps) {
  if (!data) {
    return <div>Objeto RF no encontrado</div>;
  }

  return (
    <Box sx={{ overflow: "auto", width: "100%" }}>
      <Box
        sx={{
          position: "sticky",
          p: 1,
          top: 0,
          bgcolor: "#2a2828",
          border: "none",
          boxShadow: 2,
          textAlign: "center",
          width: "95%",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          borderRadius: 1,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            bgcolor: "#383535",
            color: "#f2faf6",
            width: "95%",
            borderRadius: 1,
            height: 35,
          }}
        >
          {title}
        </Typography>
      </Box>
      <TableContainer
        component={Paper}
        sx={{
          width: "90%",
          height: "auto",
          border: "none",
          borderRadius: 1,
          boxShadow: 4,
          bgcolor: "#383535",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          m: 3,
        }}
      >
        <MuiTable sx={{ border: "none", mt: 1 }} aria-label="simple table">
          <TableBody>
            {(Object.keys(data) as (keyof DataItem)[]).map((key) => (
              <TableRow key={key} sx={{ border: "none" }}>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ fontWeight: 500, color: "#e3e3e3", p: 0, pl: 3 }}
                >
                  {(() => {
                    if (key === "normalSequence") {
                      return `Secuencia Normal`;
                    } else if (key === "exceptions") {
                      return `Excepción`;
                    } else if (key === "RF") {
                      return `Requisito funcional`;
                    } else if (key === "idR") {
                      return `Identificador`;
                    } else if (key === "name") {
                      return `Nombre`;
                    } else if (key === "version") {
                      return `versión`;
                    } else if (key === "author") {
                      return `Autores`;
                    } else if (key === "date") {
                      return `Fecha`;
                    } else if (key === "objective") {
                      return `Objetivos asociados`;
                    } else if (key === "requirements") {
                      return `Requisitos asociados`;
                    } else if (key === "description") {
                      return `Descripción`;
                    } else if (key === "precondition") {
                      return `Precondición`;
                    } else if (key === "postcondition") {
                      return `Postcondición`;
                    } else if (key === "importance") {
                      return `Importancia`;
                    } else if (key === "urgencia") {
                      return `Urgencia`;
                    } else if (key === "comments") {
                      return `Comentarios`;
                    } else {
                      return key;
                    }
                  })()}
                </TableCell>
                <TableCell sx={{ textAlign: "left", p: 1, color: "#e3e3e3" }}>
                  {(() => {
                    if (key === "normalSequence") {
                      return data[key].map((item, index) => (
                        <TableRow key={`${key}-${index}`}>
                          <TableCell
                            align="left"
                            sx={{ p: 1, color: "#e3e3e3" }}
                          >
                            Paso: {item.step}
                          </TableCell>
                          <TableCell
                            align="left"
                            sx={{ p: 1, color: "#e3e3e3" }}
                          >
                            Acción: {item.action}
                          </TableCell>
                        </TableRow>
                      ));
                    } else if (key === "exceptions") {
                      return data[key].map((item, index) => (
                        <TableRow key={`${key}-${index}`}>
                          <TableCell
                            align="left"
                            sx={{ p: 1, color: "#e3e3e3" }}
                          >
                            Paso: {item.step}
                          </TableCell>
                          <TableCell
                            align="left"
                            sx={{ p: 1, color: "#e3e3e3" }}
                          >
                            Acción: {item.action}
                          </TableCell>
                        </TableRow>
                      ));
                    } else {
                      return String(data[key] ?? "");
                    }
                  })()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </MuiTable>
      </TableContainer>
    </Box>
  );
}
