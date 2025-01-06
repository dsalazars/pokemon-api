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

```bash

npm run dev

```

## Ejecutar la aplicación en modo desarrollo

npm run dev

```bash
git clone https://github.com/tu_usuario/search-pokemon.git
```
## Esctructura del proyecto:

![image](https://github.com/user-attachments/assets/d4cc1403-0cc6-46f9-abaa-cfaf03935e46)


## Capturas de pantalla:


![pokemonapp](https://github.com/user-attachments/assets/d1d716e7-91f7-4694-aa1d-bfdf96ae8943)


Gracias por usar Search Pokémon. ¡Disfruta aprendiendo sobre los Pokémon! 🐱‍👓⚡




