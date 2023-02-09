import  { defineConfig } from "cypress";

export default  defineConfig({
  
    e2e: {
      experimentalStudio: true,
      viewportWidth: 2160,
      viewportHeight: 2160
    }
  
});
