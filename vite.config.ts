import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(({ mode }) => {
  /**
   * Common Server Options
   */
  const serverOptions = {
    proxy: {
      "/api": {
        target: process.env.VITE_PUBLIC_API_SERVER,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  };

  /**
   * Common Build Options
   */
  const buildOptions = {
    outDir: "dist",
    assetsDir: "assets",
  };

  /**
   * Production Mode
   */
  if (mode === "production") {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    Object.assign(serverOptions, {
      host: "0.0.0.0",
      port: 3000,
    });

    Object.assign(buildOptions, {
      sourcemap: false,
      manifest: true,
    });
  }

  /**
   * Development Mode
   */
  if (mode === "development") {
    Object.assign(serverOptions, {
      host: "localhost",
      port: 3000,
    });

    Object.assign(buildOptions, {
      sourcemap: true,
    });
  }

  return {
    plugins: [tsconfigPaths(), react()],

    base: "/",
    publicDir: "./public",

    server: serverOptions,
    build: buildOptions,
    preview: {
      port: 3000,
    },
  };
});
