require 'sinatra'
require 'sinatra/reloader' if development?

get '/' do
  erb :index, locals: { env: ENV['APP_ENV'] }
end
