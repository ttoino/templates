import { expect, test } from "vitest";

test("browser environment is active", async () => {
    const div = document.createElement("div");
    div.textContent = "vitest browser mode";
    document.body.appendChild(div);

    const found = document.querySelector("div");
    expect(found?.textContent).toBe("vitest browser mode");
});
