class ProjectsController < ApplicationController

  def index
  end

  def contemporary
  end

  def french_country
  end

  def modern_mediterranean
  end

  def nw_traditional
  end

  def flat_to_fab
  end

  def project_exteriors
    render "shared/image_gallery", locals: {
      title: "Project Exteriors",
      image_count: 61,
      category: "projects",
      path: "exteriors"
    }
  end

  def project_interiors
    render "shared/image_gallery", locals: {
      title: "Project Interiors",
      image_count: 94,
      category: "projects",
      path: "interiors"
    }
  end

  def remodel_cbrg
    render "shared/image_gallery", locals: {
      title: "Remodel: Cbrg",
      image_count: 24,
      category: "projects",
      path: "remodelcbrg"
    }
  end

  def remodel_eb
    render "shared/image_gallery", locals: {
      title: "Remodel: E-B",
      image_count: 30,
      category: "projects",
      path: "remodeleb"
    }
  end

  def remodel_tig
    render "shared/image_gallery", locals: {
      title: "Remodel: TIG",
      image_count: 20,
      category: "projects",
      path: "tig"
    }
  end

  def renderings
    render "shared/image_gallery", locals: {
      title: "Renderings",
      image_count: 42,
      category: "projects",
      path: "renderings"
    }
  end

  def details
    render "shared/image_gallery", locals: {
      title: "Details",
      image_count: 51,
      category: "projects",
      path: "details"
    }
  end

end
