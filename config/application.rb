require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Template6
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    
 # Ruta donde la libreria I18n debería buscar los archivos de traducción
I18n.load_path += Dir[Rails.root.join('lib', 'locale', '*.{rb,yml}')]

# Traducciones disponibles permitidas por la aplicación
I18n.available_locales = [:en, :es]

# Confirguración regional predeterminada diferente a :en
I18n.default_locale = :es

# Quitar la generación de CSS de los scaffold
config.generators do |g|
  g.stylesheets false
end
config.load_defaults 6.1

    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")
  end
end
