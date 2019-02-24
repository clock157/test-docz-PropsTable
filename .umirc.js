export default {
  plugins: [
    [
      'umi-plugin-library', {
        doc: {
          typescript: true
        },
        sourcemap: true,
        umd: false,
        cssModules: {
          camelCase: true
        }
      }
    ]
  ],
}
