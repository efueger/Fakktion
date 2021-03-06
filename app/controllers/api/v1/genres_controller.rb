class Api::V1::GenresController < ApplicationController
  respond_to :json # default to Active Model Serializers | 
  
  def index
    respond_with Genre.all
  end

  def show
    respond_with genre
  end

  def create
    respond_with :api, :v1, Genre.create(genre_params)
  end

  def update
    respond_with genre.update(genre_params)
  end

  def destroy
    respond_with genre.destroy
  end

  private
  
  def genre
    Genre.find(params[:id])
  end
  
  def genre_params
    params.require(:genre).permit(:name, :usage_count) # only allow these for now
  end
end
