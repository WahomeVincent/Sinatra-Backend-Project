class ApplicationController < Sinatra::Base
    set default_content_type: "application/json"


    before do
        response.headers['Access-Control-Allow-Origin'] = '*'
    end

    options '*' do
        response.headers['Access-Control-Allow-Methods'] = '*'
    end

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

    post "/houses" do
        house = House.create(
            name: params[:name]
        )
        house.to_json
    end


    #character routes
    get '/characters' do 
        characters = Character.all
        characters.to_json
    end

    get '/characters/:id' do
        character = Character.find(params[:id])
        character.to_json
    end

    # get '/api/characters' do
    #     characters = Character.includes(:house).all
    #     json characters.to_json(include: :house)
    #   end

    post '/characters' do
        character = Character.create(
            first_name: params[:first_name],
            last_name: params[:last_name],
            title: params[:title],
            seasons: params[:seasons]
        )
    end
    
end