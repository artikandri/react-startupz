import { defineConfig } from "vite";
import RubyPlugin from "vite-plugin-ruby";
import react from "@vitejs/plugin-react";
import vitePlugin from "vite-plugin-react-js-support";

const fs = require("fs");

export default defineConfig({
  esbuild: { loader: "jsx", include: /src\/.*\.jsx?$/, exclude: [] },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        {
          name: "load-js-files-as-jsx",
          setup(build) {
            build.onLoad({ filter: /src\/.*\.js$/ }, async (args) => {
              return {
                loader: "jsx",
                contents: await fs.readFile(args.path, "utf8"),
              };
            });
          },
        },
      ],
    },
  },
  plugins: [
    RubyPlugin(),
    react({ include: /\.(mdx|js|jsx|ts|tsx)$/ }),
    vitePlugin([], { jsxInject: true }),
  ],
});
