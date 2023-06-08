class ApplicationController < Sinatra::Base
    set default_content_type: "application/json"

    get '/houses' do 
        house = House.all
        house.to_json
    end

    get '/characters' do 
        characters = Character.all
        characters.to_json
    end
    
end