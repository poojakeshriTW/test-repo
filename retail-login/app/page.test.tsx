import assert from "node:assert/strict";
import test from "node:test";
import { renderToStaticMarkup } from "react-dom/server";
import { LoginPage } from "./page";

test("renders the retail login form and responsive layout classes", () => {
  const html = renderToStaticMarkup(<LoginPage />);

  assert.match(html, /Email Address/i);
  assert.match(html, /Password/i);
  assert.match(html, /Sign in/i);
  assert.match(html, /sm:px-6/);
  assert.match(html, /lg:grid-cols-\[1\.2fr_0\.8fr\]/);
});
