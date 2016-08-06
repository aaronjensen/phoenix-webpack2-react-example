# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :test_app,
  ecto_repos: [TestApp.Repo]

# Configures the endpoint
config :test_app, TestApp.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "2V5E3s5yPKaDWFwFBV5RZeTIYRXv71BqnI/aIFUdtXEhFTKQrBIa9Tp5dYXe6sFN",
  render_errors: [view: TestApp.ErrorView, accepts: ~w(html json)],
  pubsub: [name: TestApp.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
