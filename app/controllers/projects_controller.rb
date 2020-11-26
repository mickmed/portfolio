# frozen_string_literal: true

class ProjectsController < ApplicationController
  before_action :set_project, only: %i[show update destroy]

  # GET /projects
  def index
    @projects = Project.all
    @sorted = @projects.sort_by {|k| k['build_date']}
    # sorted = @projects

    # puts 'sorted', sorted
    render json: @sorted.reverse, include: :technologies
  end

  # GET /projects/1
  def show
    render json: @project, include: :technologies
  end

  # POST /projects
  def create
    @project = Project.new(project_params)

    if @project.save
      if params.key?(:technologies)
        @project.technologies.clear
        params[:technologies].each do |i|
          @project.technologies << Technology.find(i)
        end
      end
      render json: @project, status: :created, location: @project
    else
      render json: @project.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /projects/1
  def update
    if @project.update(project_params)
      if params.key?(:technologies)
        @project.technologies.clear
        params[:technologies].each do |i|
          @project.technologies << Technology.find(i)
        end
      end
      render json: @project
    else
      render json: @project.errors, status: :unprocessable_entity
    end
  end

  # DELETE /projects/1
  def destroy
    @project.destroy
    render json: @project
  end

  private

  def set_project
    @project = Project.find(params[:id])
  end

  def project_params
    params.require(:project).permit(:name, :subtitle, :img_url, :site_url, :github_url, :build_date, :description, technologies: [])
  end
end
