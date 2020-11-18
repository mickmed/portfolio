# Be sure to restart your server when you modify this file.

# ActiveSupport::Reloader.to_prepare do
#   ApplicationController.renderer.defaults.merge!(
#     http_host: 'example.org',
#     https: false
#   )
# end


SECRET_KEY = Rails.application.secrets.secret_key_base.to_s

def encode(payload, exp = 24.hours.from_now)
  payload[:exp] = exp.to_i
  JWT.encode(payload, SECRET_KEY)
end

def decode(token)
  decoded = JWT.decode(token, SECRET_KEY)[0]
  HashWithIndifferentAccess.new decoded
end
