class TechnologiesController < ApplicationController
  before_action :set_technology, only: [:show, :update, :destroy]

  # GET /technologies
  def index
    @technologies = Technology.all
puts @technologies, 'techs'
    render json: @technologies
  end

  # GET /technologies/1
  def show
    render json: @technology
  end

  # POST /technologies
  def create
    @technology = Technology.new(technology_params)

    if @technology.save
      render json: @technology, status: :created, location: @technology
    else
      render json: @technology.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /technologies/1
  def update
    # @project = Project.find(params[:project_id])
    
    # @technology.projects << @project
    if @technology.update(technology_params)
      render json: @technology
    else
      render json: @technology.errors, status: :unprocessable_entity
    end
  end

  # DELETE /technologies/1
  def destroy
    @technology.destroy
  end

  private
    def set_technology
      @technology = Technology.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def technology_params
      params.require(:technology).permit(:name, :icon_url)
    end
end
