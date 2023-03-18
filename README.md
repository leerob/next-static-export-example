# Next.js Static Export

- Component level data fetching
- i18n routes support (no runtime detection)
- Dynamic routes (`/post/[id]`)
- Image optimization (uses Cloudinary)

## Static Export

```bash
next build
next export
```

Then, you can deploy the `out` directory to any static hosting provider.

You can also run it locally using a tool like `serve`:

```bash
npm install -g serve
serve out
```
