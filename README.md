# 🖥️ Hardware Monitor Back end

## 📌 Descripción

**hardware-monitor-api** es una API desarrollada con Node.js que permite el monitoreo y la gestión de métricas de hardware en tiempo real. Esta solución está pensada para integrarse con dispositivos IoT y sistemas de recolección de datos. Utiliza:

- **Express.js** como servidor web.
- **MongoDB** como base de datos, mediante **Mongoose**.
- **Socket.IO** para comunicación en tiempo real.
- **MQTT** para integración con servicios de mensajería IoT.

## 🔗 Proyectos Relacionados

Este proyecto forma parte de un ecosistema de monitoreo de hardware compuesto por tres repositorios:

| Proyecto                                                                                      | Descripción                                                                                                                   |
| --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| [`hardware-monitor-cliente`](https://github.com/DiegoSagredo911/hardware-monitor-cliente)     | Aplicación cliente que se instala en los PCs a monitorear. Se encarga de recolectar métricas y enviarlas a la API vía MQTT.   |
| [`hardware-monitor-back-end`](https://github.com/DiegoSagredo911/hardware-monitor-back-end)   | API que recibe y gestiona los datos de hardware, y los expone mediante WebSockets y endpoints REST.                           |
| [`hardware-monitor-front-end`](https://github.com/DiegoSagredo911/hardware-monitor-front-end) | Interfaz web para administradores. Permite visualizar métricas, consultar el estado de los dispositivos y gestionar reportes. |

> 🔄 Estos tres componentes trabajan en conjunto para brindar un sistema completo de monitoreo en tiempo real.

## 🚀 Tecnologías Utilizadas

- **Node.js**
- **Express.js**
- **Mongoose**
- **Socket.IO**
- **MQTT.js**
- **CORS**
- **Dotenv**
- **Nodemon**

## ⚙️ Instalación

1. **Clonar el repositorio**

```bash
git clone https://github.com/DiegoSagredo911/hardware-monitor-back-end.git
cd hardware-monitor-back-end
```

2. **Instalar las dependencias**

```bash
npm install
```

3. **Configurar variables de entorno**

Crear un archivo `.env` con el siguiente contenido:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/hardware_monitor
MQTT_HOST=localhost
MQTT_PORT=1883
ALLOWEDORIGINS=http://localhost:3000,http://localhost:3001,*
```

## ▶️ Uso

- **Modo desarrollo:**

```bash
npm run dev
```

- **Modo producción:**

```bash
npm start
```

La API estará disponible en:

```
http://localhost:3000
```

## 📁 Estructura del Proyecto

```
hardware-monitor-api/
├── .gitignore
├── LICENSE
├── package.json
├── README.md
└── src/
    ├── index.js
    ├── config/
    ├── services/
    ├── controllers/
    ├── repository/
    ├── routes/
    └── model/
```

## 🧪 Variables de Entorno

| Variable         | Descripción                                |
| ---------------- | ------------------------------------------ |
| `PORT`           | Puerto donde se ejecutará el servidor      |
| `MONGODB_URI`    | URI de conexión a la base de datos MongoDB |
| `MQTT_HOST`      | Dirección del host MQTT                    |
| `MQTT_PORT`      | Puerto del broker MQTT                     |
| `ALLOWEDORIGINS` | Orígenes permitidos para CORS              |

## 📄 Licencia

Este proyecto está licenciado bajo la [Licencia MIT](LICENSE).
