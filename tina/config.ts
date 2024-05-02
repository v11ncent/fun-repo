import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "f96cad0e-7506-443c-bc5b-a45f84fcabd2", // Get this from tina.io
  token: "264d976272e6b35da8c8223950a0622106f68e6f", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "tina-images",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "videos",
        label: "Videos",
        path: "src/content/videos",
        format: "json",
        ui: {
          // https://tina.io/docs/extending-tina/filename-customization/
          filename: {
            readonly: true,
            slugify: (values) => {
              return `${values?.title
                ?.toLowerCase()
                .replace(/[\/:*?"<>|]/g, "")
                .replace(/ /g, "-")}`;
            },
          },
        },
        defaultItem: () => {
          return {
            image: "/tina-images/hero.png",
            title: "New Video",
            description: "Set a description.",
            link: "https://www.facebook.com/people/Christ-Church-Sedalia/100091224970790/?mibextid=LQQJ4d",
            date: new Date(),
          };
        },
        fields: [
          {
            type: "image",
            name: "image",
            label: "Image",
            required: true,
          },
          {
            type: "string",
            name: "alt",
            label: "Alt Tag (A descriptive description for the image)",
            required: true,
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
            ui: {
              validate: (value) => {
                if (value?.length > 160) {
                  return "Description cannot be more than 160 characters long";
                }
              },
            },
          },
          {
            type: "string",
            name: "link",
            label: "Link",
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
          },
        ],
      },
      {
        name: "events",
        label: "Events",
        path: "src/content/events",
        format: "json",
        ui: {
          filename: {
            readonly: true,
            slugify: (values) => {
              return `${values?.title?.toLowerCase().replace(/ /g, "-")}`;
            },
          },
        },
        defaultItem: () => {
          return {
            image: "/tina-images/hero.png",
            title: "New Event",
            description: "Set a description.",
            link: "https://www.facebook.com/people/Christ-Church-Sedalia/100091224970790/?mibextid=LQQJ4d",
            date: new Date(),
          };
        },
        fields: [
          {
            type: "image",
            name: "image",
            label: "Image",
            required: true,
          },
          {
            type: "string",
            name: "alt",
            label: "Alt Tag (A descriptive decription for the image)",
            required: true,
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
            ui: {
              validate: (value) => {
                if (value?.length > 160) {
                  return "Description cannot be more than 160 characters long";
                }
              },
            },
          },
          {
            type: "string",
            name: "link",
            label: "Link",
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
          },
        ],
      },
    ],
  },
  search: {
    tina: {
      indexerToken: "d38d471c7bb65306ae0e1fb4732b778260b59086",
      stopwordLanguages: ["eng"],
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100,
  },
});
