# Search Pokémon

**Search Pokémon** es una aplicación web construida con **Vue 3** que consume la API pública de Pokémon para buscar información sobre diferentes Pokémon. La app utiliza dos endpoints principales de la API de Pokémon para obtener una lista de Pokémon y detalles específicos de cada uno.

## Tecnologías

- **Vue 3** - Framework para construir la interfaz de usuario.
- **Pinia** - Estado centralizado para gestionar los datos.
- **Vite** - Herramienta de construcción para un desarrollo rápido.
- **Tailwind CSS** - Framework de CSS para un diseño rápido y responsivo.
- **Axios** - Cliente HTTP para interactuar con la API de Pokémon.
- **Vitest** - Framework de pruebas para asegurar la calidad del código.

## Funcionalidades

### Buscar Pokémon

Puedes ver una lista de Pokémon utilizando el siguiente endpoint:

- `GET https://pokeapi.co/api/v2/pokemon`

Este endpoint devuelve una lista de Pokémon, de la cual podrás buscar por nombre.

### Información específica de un Pokémon

Para obtener información detallada de un Pokémon específico, utiliza el siguiente endpoint:

- `GET https://pokeapi.co/api/v2/pokemon/${name}`

Sustituye `${name}` por el nombre del Pokémon para obtener sus detalles, como habilidades, estadísticas, y tipos.

## Instalación

### Clonar el repositorio

git clone https://github.com/tu_usuario/search-pokemon.git

## Instalar Dependencias

npm run dev

## Ejecutar la aplicación en modo desarrollo

npm run dev

## Esctructura del Proyecto:

search-pokemon/
├── src/
│   ├── assets/           # Archivos estáticos (imágenes, íconos, etc.)
│   ├── components/       # Componentes reutilizables
│   ├── stores/           # Pinia stores
│   ├── views/            # Vistas principales
│   ├── App.vue           # Componente principal de Vue
│   └── main.ts           # Archivo principal de entrada
├── public/               # Archivos públicos
│   └── index.html        # Archivo HTML principal
├── package.json          # Dependencias y scripts del proyecto
└── vite.config.ts        # Configuración de Vite

