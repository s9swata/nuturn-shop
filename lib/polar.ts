import { Polar } from "@polar-sh/sdk";

const accessToken = process.env.POLAR_ACCESS_TOKEN;
const server = process.env.NEXT_PUBLIC_POLAR_SERVER || "sandbox";

if (!accessToken) {
  console.warn("POLAR_ACCESS_TOKEN is not set. Checkout will not work.");
}

export const polar = accessToken
  ? new Polar({
      accessToken,
      server: server === "production" ? "production" : "sandbox",
    })
  : null;

export const isPolarConfigured = !!polar;
