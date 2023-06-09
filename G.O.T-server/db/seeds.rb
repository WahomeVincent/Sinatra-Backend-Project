# db/seeds.rb

require 'net/http'
require 'json'
# require '.../app/models/house'
# require '../models/character'

puts 'Start seeding'

# Make a request to the external API
response = Net::HTTP.get_response(URI('https://thronesapi.com/api/v2/Characters'))
data = JSON.parse(response.body)

data.each do |item|
  house = House.find_or_create_by(name: item['family'])

  Character.find_or_create_by(
    first_name: item['firstName'],
    last_name: item['lastName'],
    title: item['title'],
    house_id: house.id, # Assign the house_id to the character
    seasons: SecureRandom.random_number(8) + 1 # Generate a random number between 1 and 9 for seasons
  )
end

puts 'Seeding complete!'







