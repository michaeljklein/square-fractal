# Square Fractal

Generate a simple random square fractal.

- Use `[URL]?depth=10` for `10` steps of depth (default is `3`).

- Use `[URL]?stroke=2` for width-`2` line stroke (default is `3`).

- Use `[URL]?uniform=t` for uniform weights (default is off).

- Use `[URL]?midpoint=0.25` to bias the midpoint.
  The default is `0.5`, corresponding to a normal midpoint.
  `0.25` is `25%` of the way from the origin and `75%` of the way from the destination,
  along the shortest path between them.

- Use `[URL]?rectangular=t` to make the starting shape a rectangle that fills the screen. 

## Building

To develop/build:

```bash
npm run type && npm run build
```

## Running

View `index.html`.

