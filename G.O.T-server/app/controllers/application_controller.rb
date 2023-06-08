class ApplicationController < Sinatra::Base
    set default_content_type: "application/json"

    #houses routes
    get '/houses' do 
        house = House.all
        house.to_json
    end

    get '/houses/:id' do
        house = House.find(params[:id])
        house.to_json
    end

    # get '/houses/:name' do
    #     house = House.find_by(name: params[:name])
    #     house.to_json
    # end


    #character routes
    get '/characters' do 
        characters = Character.all
        characters.to_json
    end

    get '/characters/:id' do
        character = Character.find(params[:id])
        character.to_json
    end
    
end