Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook,
           ENV['FACEBOOK_KEY'],
           ENV['FACEBOOK_SECRET'],
           display: 'popup',
           image_size: 'large',
           client_options: {
             site: 'https://graph.facebook.com/v2.4',
             authorize_url: 'https://www.facebook.com/v2.4/dialog/oauth'
           },
           token_params: {
             parse: :json
           }
end
