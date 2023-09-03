import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "z7ckonfh",
  dataset: "production",
  apiVersion: "2023-09-03",
  useCdn: true,
  token: skVOrVMwQ6s1si24JNHrN9T14BhDLql8J7hT4jUbnkm9KzaL2rTyg3tTqSkMT6PVcXWdgzMeeXsY1jJC66cjGvp90ZZ3Wa9K7VqFSAexC5cgcVPKXOOQhbuXvii85cKq6F3dp1SuAQNK7U8NeYzjSJ6lvIKlTHKdw3cNdt4G9j22KrxTCfS8,
});

const buider = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
