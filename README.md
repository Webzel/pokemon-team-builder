#### Pokémon Team Builder

A fast, responsive, and fun web app for building your ultimate Pokémon team. Built with [Astro](https://astro.build/) and powered by real-time data from the [PokéAPI](https://pokeapi.co/), this project combines performance with interactivity and thoughtful UI design.

###### Overview

This tool allows users to browse Pokémon, view detailed stats and type matchups, and assemble a team of up to 6 Pokémon. It’s designed as an ongoing project to explore client-side state, data visualization, and PWA patterns in a modern web stack.

> 💡 Built as part of my portfolio to showcase frontend skills, API integration, and thoughtful UX.

---

##### Features

- **Astro**-powered static generation for speed and simplicity
- **TypeScript** for type safety and scalable architecture
- High-quality **official Pokémon artwork**
- Dynamic **modals with full stats, weaknesses, resistances, and immunities**
- **Type-based color system** for cards and badges
- **LocalStorage-based team builder** — add Pokémon to a team and persist it across sessions
- Fully **responsive layout**

---

##### Tech Stack

- **Frontend**: Astro, TypeScript, Tailwind CSS (and some vanilla CSS)
- **Data**: [PokéAPI](https://pokeapi.co/)
- **State Management**: LocalStorage (no frameworks)
- **Interactivity**: Vanilla JavaScript (modals, team builder logic)

---

##### Project Structure

src/
├── components/ // Pokémon cards, modal UI, reusable parts
├── layouts/ // Base layout wrapper
├── pages/ // Astro routes
├── lib/ // API logic and data formatting
├── scripts/ // Client-side JS for modals and team builder
└── types/ // TypeScript types for API data

---

##### Roadmap

Add to Team functionality with LocalStorage  
Modal with stats, weaknesses, resistances, immunities  
Type-colored badges system  
Region filtering and type-based search  
Dark mode toggle  
Export/share team feature  
Mobile experience polish

---

##### Known Limitations

- Loads only the first 12 Pokémon (will support pagination soon)
- Region filtering and advanced team tools are under development
- No backend — purely static + client-side state

---

##### License

MIT License — free to use, modify, and contribute.

---

##### Live Preview

Coming soon…  
_This project is actively in development and will be deployed publicly when stable._

---

> Made by [Webzel](https://github.com/Webzel) — ongoing personal project to sharpen skills and explore modern frontend workflows.
