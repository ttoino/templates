import { describe, expect, it } from "vitest";

import { app } from "../src/app";

describe("app", () => {
    it("responds to health check", async () => {
        const response = await app.request("/health");
        expect(response.status).toBe(200);
        const body = await response.json();
        expect(body).toEqual({ status: "ok" });
    });
});
