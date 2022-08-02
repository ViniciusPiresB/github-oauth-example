import app from "../app";

import request from "supertest";

describe("Route /", () => {
  it("Should return a success phrase from route response", async () => {
    const response = await request(app).get("/");

    expect(response.text).toStrictEqual("AuthGithub is working.");
    expect(response.statusCode).toBe(200);
  });
});
