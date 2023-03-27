# Next.js Static Export

- Component level data fetching
- i18n routes support (no runtime detection)
- Dynamic routes (`/post/[id]`)
- SPA routes (`/spa-post/[id]`)
- Image optimization (uses Cloudinary)
- Route Handlers

## Static Export

Running `pnpm build` will export the site to the `out` directory. Then, you can deploy the `out` directory to any static hosting provider.

You can also run it locally using a tool like `serve`:

```bash
pnpm install -g serve
serve out
```
