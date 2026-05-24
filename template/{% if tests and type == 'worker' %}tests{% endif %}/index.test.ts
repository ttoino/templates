import { createExecutionContext, waitOnExecutionContext } from "cloudflare:test";
import { describe, expect, it } from "vitest";

import app from "../src/app";

describe("app", () => {
    it("responds to health check", async () => {
        const request = new Request("http://localhost/health");
        const ctx = createExecutionContext();
        const response = await app.fetch(request, {}, ctx);
        await waitOnExecutionContext(ctx);
        expect(response.status).toBe(200);
        const body = await response.json();
        expect(body).toEqual({ status: "ok" });
    });
});
