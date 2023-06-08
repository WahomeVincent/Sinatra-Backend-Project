class AddHouseIdToCharacters < ActiveRecord::Migration[6.1]
  def change
    add_reference :characters, :house, foreign_key: true
  end
end
