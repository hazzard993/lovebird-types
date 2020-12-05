# lovebird types

Typings to allow [lovebird](https://github.com/rxi/lovebird) to be used with LOVE 2D.

Available via NPM.

```bash
yarn add -D hazzard993/lovebird-types
yarn add rxi/lovebird
```

Set your paths.

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "lovebird": ["./node_modules/lovebird-types"]
    }
  }
}
```