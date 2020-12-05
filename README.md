# lovebird types

Typings to allow [lovebird](https://github.com/rxi/lovebird) to be used with LOVE 2D.

Available via NPM.

```bash
yarn add -D hazzard993/lovebird-types
yarn add rxi/lovebird
```

Resolution should pick up lovebird.lua if you're using [love-typescript-template](https://github.com/hazzard993/love-typescript-template).

Add these declarations to types.

```json
{
  "compilerOptions": {
    "types": [
      "lovebird-types"
    ]
  }
}
```

Now define how to import these types (this may change depending on your project setup),

```ts
// allows `import lovebird = require("lovebird")` to be written
// tells TypeScript that such a line imports everything from lovebird-types
declare module "lovebird" {
    export * from "lovebird-types";
}
```