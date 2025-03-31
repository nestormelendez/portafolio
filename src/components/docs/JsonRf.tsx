export type RFProps = {
  id: number;
  RF: string;
  name: string;
  author: string;
  date: string;
  objective: string;
  requirements: string;
  description: string;
  precondition: string;
  version: number;
  normalSequence: { id: number; step: number; action: string }[];
  exceptions: { id: number; step: number; action: string }[];
  postcondition: string;
  importance: string;
  urgencia: string;
  comments: string;
};
export type Props = {
  id: string;
  titulo: string;
  descripcion: string;
  imagen: string;
  rfLista: RFProps[];
};
export const RfDetalle: Props[] = [
  {
    id: "001",
    titulo: "Ingresar al sistema",
    descripcion:
      "Gestiona el acceso de usuarios, permitiendo el inicio de sesión para usuarios registrados, el registro de nuevas cuentas y la recuperación de contraseñas olvidadas, asegurando la seguridad y facilidad de uso.",
    imagen: "src/assets/ingresar-sistema-dark.jpg",
    rfLista: [
      {
        RF: "RF-0001",
        id: 1,
        name: "Acceso Aplicacion",
        version: 1,
        author: "Henry",
        date: "2025-03-28",
        objective: "Permitir el acceso a usuarios registrados.",
        requirements: "Usuario y contraseña válidos.",
        description: "Iniciar sesión con un usuario.",
        precondition: "Usuario registrado en el sistema.",
        normalSequence: [
          {
            id: 1,
            step: 1,
            action:
              "El usuario ingresa sus credenciales (nombre de usuario/correo electrónico y contraseña).",
          },
          {
            id: 2,
            step: 2,
            action: "El sistema verifica las credenciales en la base de datos.",
          },
          {
            id: 3,
            step: 3,
            action:
              "Si las credenciales son correctas, el sistema inicia la sesión del usuario.",
          },
          {
            id: 4,
            step: 4,
            action: "El sistema muestra la interfaz principal del sistema.",
          },
        ],
        exceptions: [
          {
            id: 1,
            step: 2.1,
            action:
              "Credenciales incorrectas: El sistema muestra un mensaje de error y vuelve al paso 1.",
          },
          {
            id: 2,
            step: 2.2,
            action:
              "Cuenta bloqueada: El sistema muestra un mensaje de cuenta bloqueada.",
          },
        ],
        postcondition: "El usuario tiene una sesión activa en el sistema.",
        importance: "Alta",
        urgencia: "Alta",
        comments:
          "Implementar medidas de seguridad para proteger las contraseñas.",
      },
      {
        RF: "RF-0002",
        id: 2,
        name: "Recuperar contraseña",
        version: 1,
        author: "Henry",
        date: "2025-03-28",
        objective: "Recuperación de acceso.",
        requirements: "Gestión de contraseña",
        description: "Permite al usuario restablecer su contraseña.",
        precondition: "El usuario debe haber olvidado su contraseña.",
        normalSequence: [
          {
            id: 1,
            step: 1,
            action: "El usuario solicita la recuperación de contraseña.",
          },
          {
            id: 2,
            step: 2,
            action: "El sistema solicita el correo electrónico del usuario.",
          },
          {
            id: 3,
            step: 3,
            action:
              "El sistema envía un enlace de restablecimiento al correo electrónico del usuario.",
          },
          {
            id: 4,
            step: 4,
            action: "El usuario accede al enlace y crea una nueva contraseña.",
          },
        ],
        exceptions: [
          {
            id: 1,
            step: 2.1,
            action:
              "Correo electrónico no encontrado: El sistema muestra un mensaje de error y vuelve al paso 2.",
          },
          {
            id: 2,
            step: 4.1,
            action:
              "Enlace inválido o expirado: El sistema muestra un mensaje de error y vuelve al paso 1.",
          },
          {
            id: 3,
            step: 4.2,
            action:
              "Contraseña no cumple con las políticas: El sistema muestra un mensaje de error y vuelve al paso 4.",
          },
        ],
        postcondition: "El usuario tiene una sesión activa en el sistema.",
        importance: "Alta",
        urgencia: "Alta",
        comments:
          "Implementar medidas de seguridad para el enlace de restablecimiento.",
      },
      {
        RF: "RF-0003",
        id: 3,
        name: "Actualizar contraseña",
        version: 1,
        author: "Henry",
        date: "2025-03-28",
        objective: "Gestión de contraseñas.",
        requirements: "Gestión de contraseñas.",
        description: "Permite al usuario cambiar su contraseña.",
        precondition:
          "El usuario debe haber sido autentificado mediante OTP o iniciar sesión",
        normalSequence: [
          {
            id: 1,
            step: 1,
            action: "El usuario accede a la opción de cambiar contraseña.",
          },
          {
            id: 2,
            step: 2,
            action:
              "El sistema solicita la contraseña actual y la nueva contraseña.",
          },
          {
            id: 3,
            step: 3,
            action: "El sistema verifica la contraseña actual.",
          },
          {
            id: 4,
            step: 4,
            action: "El usuario introduce y confirma una contraseña.",
          },
          {
            id: 5,
            step: 5,
            action:
              "El sistema valida la nueva contraseña según las políticas de seguridad.",
          },
          {
            id: 6,
            step: 6,
            action: "El sistema actualiza la contraseña en la base de datos.",
          },
        ],
        exceptions: [
          {
            id: 1,
            step: 3.1,
            action:
              "Contraseña actual incorrecta: El sistema muestra un mensaje de error y vuelve al paso 2.",
          },
          {
            id: 2,
            step: 4.1,
            action:
              "Nueva contraseña no cumple con las políticas: El sistema muestra un mensaje de error y vuelve al paso 4.",
          },
        ],
        postcondition: "La contraseña del usuario se actualiza.",
        importance: "Alta",
        urgencia: "Alta",
        comments:
          "Implementar medidas de seguridad para la actualización de contraseñas.",
      },
      {
        RF: "RF-0004",
        id: 4,
        name: "Bloqueo de usuario.",
        version: 1,
        author: "Henry",
        date: "2025-03-28",
        objective: "Protección de acceso al sistema.",
        requirements:
          "Invalidad la autenticación de usuarios mas de tres intentos.",
        description:
          "El usuario puede equivocar al menos tres veces el ingreso de sus credenciales en el inicio de sesión, de ser asi el usuario será bloqueado por medida de seguridad y se requerirá un mecanismo de recuperación de contraseña para  activar nuevamente el usuario.",
        precondition: "El usuario debe tener una cuenta registrada.",
        normalSequence: [
          {
            id: 1,
            step: 1,
            action:
              "El usuario ingresa sus credenciales (nombre de usuario/correo electrónico y contraseña). de forma invalidad.",
          },
          {
            id: 2,
            step: 2,
            action:
              "El sistema consulta las credenciales del usuario con la base de datos obteniendo un resultado negativo.",
          },
          {
            id: 3,
            step: 3,
            action:
              "El sistema genera un mensaje al usuario indicando que sus credenciales no son validas.",
          },
          {
            id: 4,
            step: 4,
            action:
              "Al repetir al proceso anterior mas de tres veces, El sistema genera el bloqueo del usuario por medida de seguridad.",
          },
          {
            id: 5,
            step: 5,
            action:
              "El sistema genera un mensaje al usuario indicando que supero el número de intentos inválidos permitidos por tal motivo el usuario fue bloqueado por seguridad",
          },
        ],
        exceptions: [
          {
            id: 1,
            step: 1.1,
            action:
              "El usuario ingresa sus credenciales (nombre de usuario/correo electrónico y contraseña). de forma correcta al segundo intento.",
          },
          {
            id: 2,
            step: 1.2,
            action:
              "El usuario ingresa sus credenciales (nombre de usuario/correo electrónico y contraseña). de forma correcta al tercer intento.",
          },
          {
            id: 3,
            step: 1.3,
            action:
              "El usuario ingresa sus credenciales (nombre de usuario/correo electrónico y contraseña). de forma incorrecta al segundo intento. pero no realiza un tercer intento.",
          },
        ],
        postcondition:
          "El usuario se encuentra bloqueado por medidas de seguridad.",
        importance: "Alta",
        urgencia: "Alta",
        comments:
          "Tener en cuenta un lapso temporal para reiniciar el conteo de intentos inválidos, de esta forma el usuario puede intentar nuevamente teniendo al menos tres oportunidades nuevamente de ingresar sus credenciales.",
      },
      {
        RF: "RF-0005",
        id: 5,
        name: "Iniciar sesión con Gecko",
        version: 1,
        author: "Henry",
        date: "2025-03-28",
        objective: "Acceso al sistema.",
        requirements: "Autenticación de usuarios.",
        description:
          "Permite al usuario acceder al sistema mediante sus credenciales.",
        precondition: "El usuario debe tener una cuenta registrada.",
        normalSequence: [
          {
            id: 1,
            step: 1,
            action:
              "El usuario ingresa sus credenciales (nombre de usuario/correo electrónico y contraseña).",
          },
          {
            id: 2,
            step: 2,
            action: "El sistema verifica las credenciales en la base de datos.",
          },
          {
            id: 3,
            step: 3,
            action:
              "Si las credenciales son correctas, el sistema inicia la sesión del usuario.",
          },
          {
            id: 4,
            step: 4,
            action: "El sistema muestra la interfaz principal del sistema.",
          },
        ],
        exceptions: [
          {
            id: 1,
            step: 2.1,
            action:
              "Credenciales incorrectas: El sistema muestra un mensaje de error y vuelve al paso 1.",
          },
          {
            id: 2,
            step: 2.2,
            action:
              "Cuenta bloqueada: El sistema muestra un mensaje de cuenta bloqueada.",
          },
        ],
        postcondition: "El usuario tiene una sesión activa en el sistema.",
        importance: "Alta",
        urgencia: "Alta",
        comments:
          "Implementar medidas de seguridad para proteger las contraseñas.",
      },
      {
        RF: "RF-0006",
        id: 6,
        name: "Iniciar sesión con Gmail",
        version: 1,
        author: "Henry",
        date: "2025-03-28",
        objective: "Acceso al sistema mediante autenticación de Gmail.",
        requirements:
          "Autenticación de usuarios, RI-10: Integración con servicios de terceros.",
        description:
          "Permite al usuario iniciar sesión en el sistema utilizando su cuenta de Gmail.",
        precondition: "El usuario debe tener una cuenta de Gmail activa.",
        normalSequence: [
          {
            id: 1,
            step: 1,
            action: "El usuario selecciona la opción Iniciar sesión con Gmail.",
          },
          {
            id: 2,
            step: 2,
            action:
              "El sistema redirige al usuario a la página de autenticación de Google.",
          },
          {
            id: 3,
            step: 3,
            action: "El usuario introduce su dirección de correo electrónico.",
          },
          {
            id: 4,
            step: 4,
            action:
              "El usuario introduce sus credenciales de Gmail y autoriza el acceso a la aplicación.",
          },
          {
            id: 5,
            step: 5,
            action:
              "Google verifica las credenciales y redirige al usuario de vuelta a la aplicación con un token de autenticación.",
          },
          {
            id: 6,
            step: 6,
            action:
              "El sistema verifica el token de autenticación y obtiene la información del usuario desde Google.",
          },
          {
            id: 7,
            step: 7,
            action: "El sistema muestra la interfaz principal del sistema.",
          },
        ],
        exceptions: [
          {
            id: 1,
            step: 3.1,
            action:
              "Autenticación fallida en Google: El sistema muestra un mensaje de error y vuelve al paso 1.",
          },
          {
            id: 2,
            step: 4.1,
            action:
              " Token de autenticación inválido: El sistema muestra un mensaje de error y vuelve al paso 1.",
          },
          {
            id: 3,
            step: 5.1,
            action:
              "Error al obtener información del usuario desde Google: El sistema muestra un mensaje de error y vuelve al paso 1.",
          },
        ],
        postcondition:
          "El usuario tiene una sesión activa en el sistema utilizando su cuenta de Gmail.",
        importance: "Alta",
        urgencia: "Alta",
        comments:
          "Implementar medidas de seguridad para proteger el token de autenticación y la información del usuario.",
      },
      {
        RF: "RF-0007",
        id: 7,
        name: "Registrar Cuenta ",
        version: 1,
        author: "Henry",
        date: "2025-03-28",
        objective: "Creación de nuevas cuentas.",
        requirements: "Gestión de usuarios.",
        description:
          "Permite a nuevos usuarios crear una cuenta en el sistema.",
        precondition: "El usuario no debe tener una cuenta existente.",
        normalSequence: [
          {
            id: 1,
            step: 1,
            action: "El usuario accede al formulario de registro.",
          },
          {
            id: 2,
            step: 2,
            action:
              "El usuario ingresa la información requerida (nombre, correo electrónico, contraseña y confirmación de contraseña.).",
          },
          {
            id: 3,
            step: 3,
            action: "El sistema valida la información ingresada.",
          },
          {
            id: 4,
            step: 4,
            action:
              "Si la información es válida, el sistema envía correo electrónico de confirmación  con un código de validación",
          },
          {
            id: 5,
            step: 5,
            action:
              "El usuario ingresa el código de validación en el sistema mediante un formulario",
          },
          {
            id: 6,
            step: 6,
            action:
              "Si el código de validación es correcto, el sistema crea la nueva cuenta en la base de datos del sistema.",
          },
          {
            id: 7,
            step: 7,
            action: "El sistema muestra un mensaje de confirmación.",
          },
          {
            id: 8,
            step: 8,
            action:
              "El sistema redirige al usuario a la página de inicio de sesión.",
          },
        ],
        exceptions: [
          {
            id: 1,
            step: 3.1,
            action:
              "Información inválida: El sistema muestra un mensaje de error y vuelve al paso 2.",
          },
          {
            id: 2,
            step: 3.2,
            action:
              "Correo electrónico ya registrado: El sistema muestra un mensaje de error y vuelve al paso 2.",
          },
          {
            id: 3,
            step: 5.1,
            action:
              "El usuario ingresa un código de validación incorrecto en el sistema, El sistema muestra un mensaje de error y vuelve al paso 5.",
          },
          {
            id: 4,
            step: 5.2,
            action:
              "El usuario no ingresa el código de validación durante el lapso de tiempo establecido, El sistema no concluye la creación de la cuenta.",
          },
        ],
        postcondition: "El usuario tiene una nueva cuenta activa.",
        importance: "Alta",
        urgencia: "Alta",
        comments: "Permitir registro con proveedores externos ( Gmail ).",
      },
      {
        RF: "RF-0008",
        id: 8,
        name: "Registrar Cuenta con Gecko ",
        version: 1,
        author: "Henry",
        date: "2025-03-28",
        objective: "Creación de nuevas cuentas.",
        requirements: "Gestión de usuarios.",
        description:
          "Permite a nuevos usuarios crear una cuenta en el sistema Gecko.",
        precondition: "El usuario no debe tener una cuenta existente.",
        normalSequence: [
          {
            id: 1,
            step: 1,
            action: "El usuario accede al formulario de registro.",
          },
          {
            id: 2,
            step: 2,
            action:
              "El usuario ingresa la información requerida (nombre, correo electrónico, contraseña y confirmación de contraseña.).",
          },
          {
            id: 3,
            step: 3,
            action: "El sistema valida la información ingresada.",
          },
          {
            id: 4,
            step: 4,
            action:
              "Si la información es válida, el sistema envía correo electrónico de confirmación  con un código de validación",
          },
          {
            id: 5,
            step: 5,
            action:
              "El usuario ingresa el código de validación en el sistema mediante un formulario",
          },
          {
            id: 6,
            step: 6,
            action:
              "Si el código de validación es correcto, el sistema crea la nueva cuenta en la base de datos del sistema.",
          },
          {
            id: 7,
            step: 7,
            action: "El sistema muestra un mensaje de confirmación.",
          },
          {
            id: 8,
            step: 8,
            action:
              "El sistema redirige al usuario a la página de inicio de sesión.",
          },
        ],
        exceptions: [
          {
            id: 1,
            step: 3.1,
            action:
              "Información inválida: El sistema muestra un mensaje de error y vuelve al paso 2.",
          },
          {
            id: 2,
            step: 3.2,
            action:
              "Correo electrónico ya registrado: El sistema muestra un mensaje de error y vuelve al paso 2.",
          },
          {
            id: 3,
            step: 5.1,
            action:
              "El usuario ingresa un código de validación incorrecto en el sistema, El sistema muestra un mensaje de error y vuelve al paso 5.",
          },
          {
            id: 4,
            step: 5.2,
            action:
              "El usuario no ingresa el código de validación durante el lapso de tiempo establecido, El sistema no concluye la creación de la cuenta.",
          },
        ],
        postcondition: "El usuario tiene una sesión activa en el sistema.",
        importance: "Alta",
        urgencia: "Alta",
        comments: "ninguno.",
      },
      {
        RF: "RF-0009",
        id: 9,
        name: "Registrar cuenta con Gmail",
        version: 1,
        author: "Henry",
        date: "2025-03-28",
        objective: "Registro con Gmail.",
        requirements: "Gestión de usuario",
        description: "Permite el registro usando credenciales de Gmail.",
        precondition: "El usuario debe tener cuenta de Gmail.",
        normalSequence: [
          {
            id: 1,
            step: 1,
            action: "El usuario selecciona Registrar con Gmail.",
          },
          {
            id: 2,
            step: 2,
            action: "El sistema redirige a Google para autenticación.",
          },
          {
            id: 3,
            step: 3,
            action: "Google autentica y devuelve información.",
          },
          {
            id: 4,
            step: 4,
            action: "El sistema crea la cuenta con la información recibida.",
          },
        ],
        exceptions: [
          {
            id: 1,
            step: 2.1,
            action:
              "Autenticación fallida en Google: El sistema muestra un mensaje de error.",
          },
        ],
        postcondition:
          "El usuario tiene una nueva cuenta activa validada por la API de Google.",
        importance: "Alta",
        urgencia: "Alta",
        comments: "Integrar la API de Google.",
      },
      {
        RF: "RF-0010",
        id: 10,
        name: "Ver pantalla de Bienvenida ",
        version: 1,
        author: "Henry",
        date: "2025-03-28",
        objective: "Presentación de bienvenida inicial al usuario.",
        requirements: "Interfaz de usuario.",
        description:
          "Muestra la pantalla de bienvenida al usuario antes de la página de inicio de sesión.",
        precondition: "El usuario accede a la aplicación o sitio web.",
        normalSequence: [
          {
            id: 1,
            step: 1,
            action: "El usuario accede a la aplicación o sitio web.",
          },
          {
            id: 2,
            step: 2,
            action: "El sistema carga la pantalla de bienvenida.",
          },
          {
            id: 3,
            step: 3,
            action: "El sistema muestra la pantalla de bienvenida al usuario.",
          },
          {
            id: 4,
            step: 4,
            action:
              "El usuario tiene la opción de proceder a la página de inicio de sesión o registrarse. ",
          },
        ],
        exceptions: [
          {
            id: 1,
            step: 2.1,
            action:
              "Error al cargar la pantalla de bienvenida: El sistema muestra un mensaje de error genérico.",
          },
        ],
        postcondition:
          "El usuario visualiza la pantalla de bienvenida y tiene la opción de iniciar sesión.",
        importance: "Alta",
        urgencia: "Alta",
        comments:
          "La pantalla de bienvenida debe incluir información sobre la aplicación o sitio web y un botón para proceder al inicio de sesión.",
      },
    ],
  },
  {
    id: "002",
    titulo: "Ventas",
    descripcion:
      "Permite a los usuarios crear, modificar y procesar ventas, incluyendo la adición de productos, clientes y métodos de pago.",
    imagen: "src/assets/ventas-dark.jpg",
    rfLista: [
      {
        RF: "RF-0011",
        id: 11,
        name: "Agregar Producto",
        version: 1,
        author: "Usuario",
        date: "2025-03-28",
        objective: "Permitir la adición de productos a la venta.",
        requirements: "Gestión de productos, búsqueda de productos.",
        description:
          "El sistema permite agregar productos a la venta desde el inventario o mediante un escáner.",
        precondition:
          "El usuario debe estar en la interfaz de creación de venta.",
        normalSequence: [
          {
            id: 1,
            step: 1,
            action: "El usuario selecciona la opción 'Agregar producto'.",
          },
          {
            id: 2,
            step: 2,
            action:
              "El sistema presenta opciones para agregar productos (inventario o escáner).",
          },
          {
            id: 3,
            step: 3,
            action:
              "El usuario selecciona el producto deseado o escanea el código de barras.",
          },
          {
            id: 4,
            step: 4,
            action:
              "El sistema agrega el producto a la lista de productos de la venta.",
          },
        ],
        exceptions: [
          {
            id: 1,
            step: 3.1,
            action:
              "Producto no encontrado: El sistema muestra un mensaje de error y permite al usuario buscar otro producto.",
          },
        ],
        postcondition:
          "El producto se agrega a la lista de productos de la venta.",
        importance: "Alta",
        urgencia: "Alta",
        comments:
          "Debe incluir la opción de buscar productos por nombre o código.",
      },
      {
        RF: "RF-0012",
        id: 12,
        name: "Ordenar Productos",
        version: 1,
        author: "Usuario",
        date: "2025-03-28",
        objective: "Permitir ordenar los productos de la venta.",
        requirements: "Gestión de productos.",
        description:
          "El sistema permite ordenar los productos de la venta por diferentes criterios (nombre, precio, etc.).",
        precondition: "La venta debe tener al menos un producto agregado.",
        normalSequence: [
          {
            id: 1,
            step: 1,
            action: "El usuario selecciona la opción 'Ordenar productos'.",
          },
          {
            id: 2,
            step: 2,
            action:
              "El sistema presenta opciones para ordenar los productos (nombre, precio, etc.).",
          },
          {
            id: 3,
            step: 3,
            action:
              "El usuario selecciona el criterio de ordenamiento deseado.",
          },
          {
            id: 4,
            step: 4,
            action:
              "El sistema ordena los productos de la venta según el criterio seleccionado.",
          },
        ],
        exceptions: [],
        postcondition:
          "Los productos de la venta se ordenan según el criterio seleccionado.",
        importance: "Media",
        urgencia: "Media",
        comments: "Debe permitir ordenar por múltiples criterios.",
      },
      {
        RF: "RF-0013",
        id: 13,
        name: "Ver Lista de Productos",
        version: 1,
        author: "Usuario",
        date: "2025-03-28",
        objective: "Mostrar la lista de productos de la venta.",
        requirements: "Gestión de productos.",
        description:
          "El sistema muestra la lista de productos agregados a la venta, incluyendo información relevante (nombre, precio, cantidad, etc.).",
        precondition: "La venta debe tener al menos un producto agregado.",
        normalSequence: [
          {
            id: 1,
            step: 1,
            action: "El usuario selecciona la opción 'Ver lista de productos'.",
          },
          {
            id: 2,
            step: 2,
            action: "El sistema muestra la lista de productos de la venta.",
          },
        ],
        exceptions: [],
        postcondition: "Se muestra la lista de productos de la venta.",
        importance: "Alta",
        urgencia: "Alta",
        comments: "Debe mostrar información detallada de cada producto.",
      },
      {
        RF: "RF-0014",
        id: 14,
        name: "Crear Venta",
        version: 1,
        author: "Usuario",
        date: "2025-03-28",
        objective: "Crear una nueva venta.",
        requirements: "Gestión de ventas.",
        description:
          "El sistema permite crear una nueva venta, asignarle un cliente y agregarle productos.",
        precondition: "El usuario debe tener permisos para crear ventas.",
        normalSequence: [
          {
            id: 1,
            step: 1,
            action: "El usuario selecciona la opción 'Crear venta'.",
          },
          {
            id: 2,
            step: 2,
            action: "El sistema crea una nueva venta vacía.",
          },
        ],
        exceptions: [],
        postcondition: "Se crea una nueva venta vacía.",
        importance: "Alta",
        urgencia: "Alta",
        comments: "Debe permitir asignar un cliente a la venta.",
      },
      {
        RF: "RF-0015",
        id: 15,
        name: "Agregar Método de Pago",
        version: 1,
        author: "Usuario",
        date: "2025-03-28",
        objective: "Agregar un método de pago a la venta.",
        requirements: "Gestión de pagos.",
        description:
          "El sistema permite agregar un método de pago a la venta (efectivo, tarjeta, etc.).",
        precondition: "La venta debe tener al menos un producto agregado.",
        normalSequence: [
          {
            id: 1,
            step: 1,
            action: "El usuario selecciona la opción 'Agregar método de pago'.",
          },
          {
            id: 2,
            step: 2,
            action:
              "El sistema presenta opciones para agregar métodos de pago (efectivo, tarjeta, etc.).",
          },
          {
            id: 3,
            step: 3,
            action: "El usuario selecciona el método de pago deseado.",
          },
          {
            id: 4,
            step: 4,
            action: "El sistema agrega el método de pago a la venta.",
          },
        ],
        exceptions: [],
        postcondition: "Se agrega el método de pago a la venta.",
        importance: "Alta",
        urgencia: "Alta",
        comments: "Debe permitir agregar múltiples métodos de pago.",
      },
      {
        RF: "RF-0016",
        id: 16,
        name: "Pagar",
        version: 1,
        author: "Usuario",
        date: "2025-03-28",
        objective: "Procesar el pago de la venta.",
        requirements: "Gestión de pagos, gestión de ventas.",
        description:
          "El sistema procesa el pago de la venta utilizando el método de pago seleccionado.",
        precondition:
          "La venta debe tener al menos un producto agregado y un método de pago seleccionado.",
        normalSequence: [
          {
            id: 1,
            step: 1,
            action: "El usuario selecciona la opción 'Pagar'.",
          },
          {
            id: 2,
            step: 2,
            action:
              "El sistema procesa el pago utilizando el método de pago seleccionado.",
          },
          {
            id: 3,
            step: 3,
            action: "El sistema genera un comprobante de pago.",
          },
        ],
        exceptions: [
          {
            id: 1,
            step: 2.1,
            action:
              "Pago rechazado: El sistema muestra un mensaje de error y permite al usuario intentar nuevamente o seleccionar otro método de pago.",
          },
        ],
        postcondition:
          "Se procesa el pago de la venta y se genera un comprobante.",
        importance: "Alta",
        urgencia: "Alta",
        comments:
          "Debe permitir imprimir o enviar el comprobante por correo electrónico.",
      },
      {
        RF: "RF-0017",
        id: 17,
        name: "Agregar Cliente",
        version: 1,
        author: "Usuario",
        date: "2025-03-28",
        objective: "Asignar un cliente a la venta.",
        requirements: "Gestión de clientes, gestión de ventas.",
        description:
          "El sistema permite asignar un cliente a la venta, ya sea existente o nuevo.",
        precondition:
          "El usuario debe estar en la interfaz de creación de venta.",
        normalSequence: [
          {
            id: 1,
            step: 1,
            action: "El usuario selecciona la opción 'Agregar cliente'.",
          },
          {
            id: 2,
            step: 2,
            action:
              "El sistema presenta opciones para buscar un cliente existente o crear uno nuevo.",
          },
          {
            id: 3,
            step: 3,
            action:
              "El usuario selecciona el cliente deseado o ingresa la información del nuevo cliente.",
          },
          {
            id: 4,
            step: 4,
            action: "El sistema asigna el cliente a la venta.",
          },
        ],
        exceptions: [
          {
            id: 1,
            step: 3.1,
            action:
              "Cliente no encontrado: El sistema muestra un mensaje de error y permite al usuario buscar otro cliente o crear uno nuevo.",
          },
        ],
        postcondition: "Se asigna el cliente a la venta.",
        importance: "Media",
        urgencia: "Media",
        comments:
          "Debe permitir buscar clientes por nombre, identificación o correo electrónico.",
      },
      {
        RF: "RF-0018",
        id: 18,
        name: "Filtrar Productos",
        version: 1,
        author: "Usuario",
        date: "2025-03-28",
        objective: "Filtrar la lista de productos de la venta.",
        requirements: "Gestión de productos.",
        description:
          "El sistema permite filtrar la lista de productos de la venta por diferentes criterios (nombre, precio, categoría, etc.).",
        precondition: "La venta debe tener al menos un producto agregado.",
        normalSequence: [
          {
            id: 1,
            step: 1,
            action: "El usuario selecciona la opción 'Filtrar productos'.",
          },
          {
            id: 2,
            step: 2,
            action:
              "El sistema presenta opciones para filtrar los productos (nombre, precio, categoría, etc.).",
          },
          {
            id: 3,
            step: 3,
            action: "El usuario selecciona el criterio de filtrado deseado.",
          },
          {
            id: 4,
            step: 4,
            action:
              "El sistema filtra la lista de productos de la venta según el criterio seleccionado.",
          },
        ],
        exceptions: [],
        postcondition:
          "Se filtra la lista de productos de la venta según el criterio seleccionado.",
        importance: "Media",
        urgencia: "Media",
        comments: "Debe permitir filtrar por múltiples criterios.",
      },
      {
        RF: "RF-0019",
        id: 19,
        name: "Buscar Productos",
        version: 1,
        author: "Usuario",
        date: "2025-03-28",
        objective: "Buscar productos en la lista de productos de la venta.",
        requirements: "Gestión de productos.",
        description:
          "El sistema permite buscar productos en la lista de productos de la venta por nombre o código.",
        precondition: "La venta debe tener al menos un producto agregado.",
        normalSequence: [
          {
            id: 1,
            step: 1,
            action:
              "El usuario ingresa el nombre o código del producto a buscar.",
          },
          {
            id: 2,
            step: 2,
            action:
              "El sistema muestra los productos que coinciden con la búsqueda.",
          },
        ],
        exceptions: [
          {
            id: 1,
            step: 2.1,
            action:
              "Producto no encontrado: El sistema muestra un mensaje de error.",
          },
        ],
        postcondition:
          "Se muestran los productos que coinciden con la búsqueda.",
        importance: "Alta",
        urgencia: "Alta",
        comments: "Debe permitir buscar productos por nombre o código.",
      },
    ],
  },
  {
    id: "003",
    titulo: "Inventario",
    descripcion:
      "Permite a los usuarios gestionar el inventario de productos, incluyendo la creación, visualización, ordenación, filtrado, búsqueda, edición, eliminación y ocultación de productos.",
    imagen: "src/assets/inventario-dark.jpg",
    rfLista: [
      {
        RF: "RF-0020",
        id: 20,
        name: "Crear Producto",
        version: 1,
        author: "Usuario",
        date: "2025-03-28",
        objective: "Permitir la creación de nuevos productos en el inventario.",
        requirements: "Gestión de productos.",
        description:
          "El sistema permite crear nuevos productos en el inventario, incluyendo información relevante (nombre, descripción, precio, cantidad, etc.).",
        precondition: "El usuario debe tener permisos para crear productos.",
        normalSequence: [
          {
            id: 1,
            step: 1,
            action: "El usuario selecciona la opción 'Crear producto'.",
          },
          {
            id: 2,
            step: 2,
            action:
              "El sistema presenta un formulario para ingresar la información del nuevo producto.",
          },
          {
            id: 3,
            step: 3,
            action:
              "El usuario ingresa la información del producto y guarda los cambios.",
          },
        ],
        exceptions: [
          {
            id: 1,
            step: 3.1,
            action:
              "Información inválida: El sistema muestra un mensaje de error y permite al usuario corregir la información.",
          },
        ],
        postcondition: "Se crea el nuevo producto en el inventario.",
        importance: "Alta",
        urgencia: "Alta",
        comments: "Debe incluir la opción de cargar una imagen del producto.",
      },
      {
        RF: "RF-0021",
        id: 21,
        name: "Ver Lista de Productos",
        version: 1,
        author: "Usuario",
        date: "2025-03-28",
        objective: "Mostrar la lista de productos del inventario.",
        requirements: "Gestión de productos.",
        description:
          "El sistema muestra la lista de productos del inventario, incluyendo información relevante (nombre, descripción, precio, cantidad, etc.).",
        precondition:
          "El usuario debe tener permisos para ver la lista de productos.",
        normalSequence: [
          {
            id: 1,
            step: 1,
            action: "El usuario selecciona la opción 'Ver lista de productos'.",
          },
          {
            id: 2,
            step: 2,
            action: "El sistema muestra la lista de productos del inventario.",
          },
        ],
        exceptions: [],
        postcondition: "Se muestra la lista de productos del inventario.",
        importance: "Alta",
        urgencia: "Alta",
        comments: "Debe permitir ordenar y filtrar la lista de productos.",
      },
      {
        RF: "RF-0022",
        id: 22,
        name: "Ordenar Productos",
        version: 1,
        author: "Usuario",
        date: "2025-03-28",
        objective: "Permitir ordenar los productos del inventario.",
        requirements: "Gestión de productos.",
        description:
          "El sistema permite ordenar los productos del inventario por diferentes criterios (nombre, precio, cantidad, etc.).",
        precondition: "El usuario debe tener permisos para ordenar productos.",
        normalSequence: [
          {
            id: 1,
            step: 1,
            action: "El usuario selecciona la opción 'Ordenar productos'.",
          },
          {
            id: 2,
            step: 2,
            action:
              "El sistema presenta opciones para ordenar los productos (nombre, precio, cantidad, etc.).",
          },
          {
            id: 3,
            step: 3,
            action:
              "El usuario selecciona el criterio de ordenamiento deseado.",
          },
          {
            id: 4,
            step: 4,
            action:
              "El sistema ordena los productos del inventario según el criterio seleccionado.",
          },
        ],
        exceptions: [],
        postcondition:
          "Los productos del inventario se ordenan según el criterio seleccionado.",
        importance: "Media",
        urgencia: "Media",
        comments: "Debe permitir ordenar por múltiples criterios.",
      },
      {
        RF: "RF-0023",
        id: 23,
        name: "Filtrar Productos",
        version: 1,
        author: "Usuario",
        date: "2025-03-28",
        objective: "Filtrar la lista de productos del inventario.",
        requirements: "Gestión de productos.",
        description:
          "El sistema permite filtrar la lista de productos del inventario por diferentes criterios (nombre, precio, categoría, etc.).",
        precondition: "El usuario debe tener permisos para filtrar productos.",
        normalSequence: [
          {
            id: 1,
            step: 1,
            action: "El usuario selecciona la opción 'Filtrar productos'.",
          },
          {
            id: 2,
            step: 2,
            action:
              "El sistema presenta opciones para filtrar los productos (nombre, precio, categoría, etc.).",
          },
          {
            id: 3,
            step: 3,
            action: "El usuario selecciona el criterio de filtrado deseado.",
          },
          {
            id: 4,
            step: 4,
            action:
              "El sistema filtra la lista de productos del inventario según el criterio seleccionado.",
          },
        ],
        exceptions: [],
        postcondition:
          "Se filtra la lista de productos del inventario según el criterio seleccionado.",
        importance: "Media",
        urgencia: "Media",
        comments: "Debe permitir filtrar por múltiples criterios.",
      },
      {
        RF: "RF-0024",
        id: 24,
        name: "Buscar Productos",
        version: 1,
        author: "Usuario",
        date: "2025-03-28",
        objective: "Buscar productos en el inventario.",
        requirements: "Gestión de productos.",
        description:
          "El sistema permite buscar productos en el inventario por nombre o código.",
        precondition: "El usuario debe tener permisos para buscar productos.",
        normalSequence: [
          {
            id: 1,
            step: 1,
            action:
              "El usuario ingresa el nombre o código del producto a buscar.",
          },
          {
            id: 2,
            step: 2,
            action:
              "El sistema muestra los productos que coinciden con la búsqueda.",
          },
        ],
        exceptions: [
          {
            id: 1,
            step: 2.1,
            action:
              "Producto no encontrado: El sistema muestra un mensaje de error.",
          },
        ],
        postcondition:
          "Se muestran los productos que coinciden con la búsqueda.",
        importance: "Alta",
        urgencia: "Alta",
        comments: "Debe permitir buscar productos por nombre o código.",
      },
      {
        RF: "RF-0025",
        id: 25,
        name: "Editar Producto",
        version: 1,
        author: "Usuario",
        date: "2025-03-28",
        objective:
          "Permitir editar la información de un producto del inventario.",
        requirements: "Gestión de productos.",
        description:
          "El sistema permite editar la información de un producto del inventario, incluyendo nombre, descripción, precio, cantidad, etc.",
        precondition: "El usuario debe tener permisos para editar productos.",
        normalSequence: [
          {
            id: 1,
            step: 1,
            action: "El usuario selecciona la opción 'Editar producto'.",
          },
          {
            id: 2,
            step: 2,
            action:
              "El sistema muestra la información del producto seleccionado en un formulario editable.",
          },
          {
            id: 3,
            step: 3,
            action:
              "El usuario modifica la información del producto y guarda los cambios.",
          },
        ],
        exceptions: [
          {
            id: 1,
            step: 3.1,
            action:
              "Información inválida: El sistema muestra un mensaje de error y permite al usuario corregir la información.",
          },
        ],
        postcondition:
          "Se actualiza la información del producto en el inventario.",
        importance: "Alta",
        urgencia: "Alta",
        comments: "Debe permitir editar todos los campos del producto.",
      },
      {
        RF: "RF-0026",
        id: 26,
        name: "Eliminar Producto",
        version: 1,
        author: "Usuario",
        date: "2025-03-28",
        objective: "Permitir eliminar un producto del inventario.",
        requirements: "Gestión de productos.",
        description: "El sistema permite eliminar un producto del inventario.",
        precondition: "El usuario debe tener permisos para eliminar productos.",
        normalSequence: [
          {
            id: 1,
            step: 1,
            action: "El usuario selecciona la opción 'Eliminar producto'.",
          },
          {
            id: 2,
            step: 2,
            action:
              "El sistema solicita confirmación para eliminar el producto.",
          },
          {
            id: 3,
            step: 3,
            action: "El usuario confirma la eliminación del producto.",
          },
          {
            id: 4,
            step: 4,
            action: "El sistema elimina el producto del inventario.",
          },
        ],
        exceptions: [
          {
            id: 1,
            step: 3.1,
            action:
              "Eliminación cancelada: El usuario cancela la eliminación del producto.",
          },
        ],
        postcondition: "Se elimina el producto del inventario.",
        importance: "Alta",
        urgencia: "Alta",
        comments:
          "Debe mostrar un mensaje de confirmación antes de eliminar el producto.",
      },
      {
        RF: "RF-0027",
        id: 27,
        name: "Ocultar Producto",
        version: 1,
        author: "Usuario",
        date: "2025-03-28",
        objective: "Permitir ocultar un producto del inventario.",
        requirements: "Gestión de productos.",
        description:
          "El sistema permite ocultar un producto del inventario para que no se muestre en la lista de productos.",
        precondition: "El usuario debe tener permisos para ocultar productos.",
        normalSequence: [
          {
            id: 1,
            step: 1,
            action: "El usuario selecciona la opción 'Ocultar producto'.",
          },
          {
            id: 2,
            step: 2,
            action: "El sistema oculta el producto del inventario.",
          },
        ],
        exceptions: [],
        postcondition: "Se oculta el producto del inventario.",
        importance: "Media",
        urgencia: "Media",
        comments:
          "Debe permitir mostrar los productos ocultos en una lista separada.",
      },
      {
        RF: "RF-0028",
        id: 28,
        name: "Mostrar Menú de Opciones de Producto",
        version: 1,
        author: "Usuario",
        date: "2025-03-28",
        objective:
          "Mostrar un menú con opciones para editar, eliminar u ocultar un producto.",
        requirements: "Interfaz de usuario.",
        description:
          "El sistema muestra un menú con opciones para editar, eliminar u ocultar un producto seleccionado.",
        precondition:
          "El usuario debe tener permisos para editar, eliminar u ocultar productos.",
        normalSequence: [
          {
            id: 1,
            step: 1,
            action: "El usuario selecciona un producto de la lista.",
          },
          {
            id: 2,
            step: 2,
            action:
              "El sistema muestra un menú con opciones para editar, eliminar u ocultar el producto.",
          },
          {
            id: 3,
            step: 3,
            action:
              "El usuario selecciona la opción deseada (editar, eliminar u ocultar).",
          },
        ],
        exceptions: [],
        postcondition:
          "Se muestra el menú con opciones para editar, eliminar u ocultar el producto.",
        importance: "Alta",
        urgencia: "Alta",
        comments:
          "El menú debe ser contextual y mostrarse al hacer clic derecho sobre el producto.",
      },
    ],
  },
];
