# db/seeds.rb

require 'net/http'
require 'json'
# require '.../app/models/house'
# require '../models/character'

puts "Start seeding"

# Make a request to the external API
response = Net::HTTP.get_response(URI('https://thronesapi.com/api/v2/Characters'))
data = JSON.parse(response.body)

data.each do |item|
    House.create(
        name: item['family']
    )
end


puts 'Seeding complete!'
