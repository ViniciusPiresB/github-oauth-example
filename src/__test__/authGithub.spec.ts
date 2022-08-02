import app from "../app";

import request from "supertest";

describe("Render HTML file", () => {
  it("Should return a html page from default route", async () => {
    const response = await request(app).get("/");

    const textOfPage: string = response.text;
    const htmlPageBool: boolean = textOfPage.includes("<!DOCTYPE html>");

    expect(response.statusCode).toBe(200);
    expect(htmlPageBool).toBe(true);
  });
});
