console.log(process.env.NODE_ENV);

module.exports = {
  reactStrictMode: true,
  // Add webpack configuration if needed

  // Set up environment variables
  env: {
    APOLLO_CLIENT_URI:
      process.env.NODE_ENV === "development"
        ? process.env.APOLLO_CLIENT_URI_LOCAL // Local development
        : process.env.APOLLO_CLIENT_URI_PROD, // Production
  },

  // Export the Apollo Client for use in your components
  // This allows you to access the client from any component
  webpack: (config) => {
    config.resolve.alias["@apollo/client"] = require.resolve("@apollo/client");

    // Add a rule to handle GraphQL files using graphql-tag/loader
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: "graphql-tag/loader",
        },
      ],
    });

    return config;
  },
  // Configure the domains allowed for images
  images: {
    domains: ["wordpress-starter.local", "wordpress-starter.flywheelsites.com"], // Add your image domain(s) here
  },
};
