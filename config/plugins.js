// 127144506775-urbch14t4oqipruivbbeqp5spc9nj45r.apps.googleusercontent.com (Client ID)
// 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 (Client Secret)
module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
    // ...
  });