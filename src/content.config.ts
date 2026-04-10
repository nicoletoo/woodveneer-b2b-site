import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publish_date: z.string(),
    summary: z.string(),
    featured_image: z.string().optional(),
    seo_title: z.string().optional(),
    meta_description: z.string().optional(),
  }),
});

export const collections = { news };
