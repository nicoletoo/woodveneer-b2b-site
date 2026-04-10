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

const products = defineCollection({
  type: 'content',
  schema: z.object({
    product_name: z.string(),
    slug: z.string(),
    featured_image: z.string().optional(),
    gallery_images: z.array(z.string()).optional(),
    short_description: z.string().optional(),
    thickness: z.string().optional(),
    width: z.string().optional(),
    length: z.string().optional(),
    backing_options: z.string().optional(),
    customization_options: z.string().optional(),
    applications: z.array(z.string()).optional(),
    seo_title: z.string().optional(),
    meta_description: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    project_name: z.string(),
    slug: z.string(),
    featured_image: z.string().optional(),
    gallery_images: z.array(z.string()).optional(),
    project_type: z.string().optional(),
    veneer_type: z.string().optional(),
    short_description: z.string().optional(),
    seo_title: z.string().optional(),
    meta_description: z.string().optional(),
  }),
});

export const collections = { news, products, projects };
