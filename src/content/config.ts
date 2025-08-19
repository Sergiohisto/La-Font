// src/content/config.ts

import { defineCollection, z } from 'astro:content';

// 1. Define tu esquema (blueprint) para la colección 'blog'
const blogCollection = defineCollection({
  type: 'content', // 'content' para archivos Markdown/MDX, 'data' para JSON/YAML
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    // Para validar imágenes locales en frontmatter
    image: image().optional(), 
    tags: z.array(z.string()).default([]),
  }),
});

// 2. Exporta todas tus colecciones en el objeto `collections`
export const collections = {
  'blog': blogCollection,
};