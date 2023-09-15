# FrontendDoorvel
# Clonar el repositorio
git clone https://github.com/KTreviD/FrontendDoorvel

# Instalar dependencias
yarn install

# Iniciar la aplicación
yarn dev
Para acceder a la aplicacion entra a localhost:3000

# Descripción del Proyecto
Este proyecto es una aplicación web que permite gestionar una lista de miembros de la familia y las tareas asignadas a cada miembro. Los usuarios pueden realizar las siguientes acciones:

Agregar Miembros: Los usuarios pueden agregar nuevos miembros de la familia proporcionando su nombre.

Eliminar Miembros: Los usuarios pueden eliminar miembros de la familia de la lista.

Ver Detalles de Miembros: Al hacer clic en un miembro de la lista o poner su nombre como parametro ejemplo: localhost:3000/Carlos, los usuarios pueden ver los detalles de ese miembro, incluido su nombre y las tareas asignadas.

Asignar Tareas: Los usuarios pueden asignar tareas a los miembros de la familia seleccionados.

Eliminar Tareas: Los usuarios pueden eliminar tareas previamente asignadas a los miembros.

Además, el proyecto utiliza un contexto global para administrar los datos de los miembros y las tareas, lo que permite que los cambios se reflejen en tiempo real en toda la aplicación.

# Tecnologías y Librerías Utilizadas
Este proyecto utiliza las siguientes tecnologías y librerías:

React: Una biblioteca de JavaScript para construir interfaces de usuario interactivas.

Next.js: Un marco de desarrollo de React que facilita la creación de aplicaciones web modernas.

Material-UI: Una biblioteca de componentes de interfaz de usuario de React que proporciona un diseño y aspecto visual consistentes.

Context API: La API de contexto de React se utiliza para administrar el estado global de la aplicación.

localStorage: Se utiliza para almacenar datos localmente en el navegador del usuario.
