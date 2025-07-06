import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    devToolbar: {
    enabled: false,
    },
    integrations: [tailwind({
        config: {
            applyBaseStyles: true, // Aplica los estilos base de Tailwind
        }
    })]
    
});