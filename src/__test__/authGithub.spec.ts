import app from "../app";

import request from "supertest";

describe("Authentication with github", () => {
  it("Should redirect to github page", async () => {
    const response = await request(app).get("/auth");

    expect(response.statusCode).toBe(302);
  });
});
