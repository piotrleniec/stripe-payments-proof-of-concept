require 'sinatra'

get '/' do
  send_file File.join(__dir__, 'public', 'index.html')
end
