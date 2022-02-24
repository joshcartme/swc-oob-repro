# Repro

1. `npm install`
2. build `test_plugin`
3. update the path to the test plugin in `.swcrc`
4. `npx swc ./fun/stuff/swc-repro.js`

# notes

- If you delete `fun/test.js` compiling `fun/stuff/swc-repro.js` works.
- There are some comments inside of `fun/stuff/swc-repro.js` that tell other ways to get compilation to work.
- With this trivial plugin, adding `--release` to the build and using that causes it to compile.  In my much more complicated repo with more complicated plugins this is not the case.
