import { Elysia, t } from "elysia";

const app = new Elysia({ prefix: "/api" })
  .get("/", () => "Hello from Next Server")
  .post("/", ({ body }) => body, {
    body: t.Object({
      name: t.String(),
    }),
  });

export const GET = app.handle;
export const POST = app.handle;
