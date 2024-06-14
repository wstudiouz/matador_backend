module.exports = ({ env }) => ({
  documentation: {
    enabled: true,
    config: {
        info: { version: "1.0.0" },
    },
  },
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        project: {
          field: 'slug', // Slug saqlanadigan maydon nomi
          references: 'title', // Slug yaratish uchun ishlatiladigan maydon nomi
          config: {
            separator: '_', // Example: Use underscore as separator
            lowercase: true, // Example: Keep uppercase
            replacements: {
              ' ': '-',         // Replace space with hyphen
              '&': 'and',      // Replace '&' with 'and'
              'ä': 'ae',        // Replace special characters (optional)
            },
          },
        },
      },
    },
  },
});