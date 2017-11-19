require 'sinatra'
require 'sinatra/reloader' if development?

get '/' do
  send_file File.join(__dir__, 'public', 'index.html')
end
