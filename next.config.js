/** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
    typescript: {
      ignoreBuildErrors: true,
    },
    env: {
      AIRTABLE_READ_TOKEN: AIRTABLE_READ_TOKEN,
      AIRTABLE_WRITE_TOKEN: AIRTABLE_WRITE_TOKEN,
    },
  };

  module.exports = nextConfig;
