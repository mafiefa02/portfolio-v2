/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  singleAttributePerLine: true,
  singleQuote: true,
  jsxSingleQuote: true,
  semi: true,
  plugins: ['prettier-plugin-tailwindcss'],
};

export default config;
