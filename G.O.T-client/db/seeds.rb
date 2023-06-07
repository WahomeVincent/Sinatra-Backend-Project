# db/seeds.rb

require 'net/http'
require 'json'
# require '.../app/models/house'
# require '../models/character'

puts "Start seeding"

# Make a request to the external API
response = Net::HTTP.get_response(URI('https://thronesapi.com/api/v2/Characters'))
data = JSON.parse(response.body)

# data.each do |item|
#     House.find_or_create_by(
#         name: item['family']
#     )
# end

data.each do |item|
    Character.find_or_create_by(
        first_name: item['firstName'],
        last_name: item['lastName'],
        title: item['title']
    )
end

puts 'Seeding complete!'
