class ConceptDesignsController < ApplicationController
  def index
  end

  def ultra_master_bath
    render "shared/image_gallery", locals: {
      title: "Ultra Master Bath",
      image_count: 85,
      category: "concepts",
      path: "ultramasterbath"
    }
  end

  def ultra_great_room
    render "shared/image_gallery", locals: {
      title: "Ultra Great Room",
      image_count: 89,
      category: "concepts",
      path: "ultragreatroom"
    }
  end

  def ultra_master_suites
    render "shared/image_gallery", locals: {
      title: "Ultra Master Suites",
      image_count: 88,
      category: "concepts",
      path: "ultramastersuites"
    }
  end

  def ultra_closet
    render "shared/image_gallery", locals: {
      title: "Ultra Closet",
      image_count: 41,
      category: "concepts",
      path: "ultracloset"
    }
  end

  def ultra_outdoor_living
    render "shared/image_gallery", locals: {
      title: "Ultra Outdoor Living",
      image_count: 45,
      category: "concepts",
      path: "ultraoutdoor"
    }
  end

  def ultra_kitchen
    render "shared/image_gallery", locals: {
      title: "Ultra Kitchen",
      image_count: 110,
      category: "concepts",
      path: "ultrakitchen"
    }
  end

  def before_and_after
    render "shared/image_gallery", locals: {
      title: "Before & After",
      image_count: 32,
      category: "concepts",
      path: "conceptbeforeafter"
    }
  end

  def exterior
    render "shared/image_gallery", locals: {
      title: "Exteriors",
      image_count: 48,
      category: "concepts",
      path: "conceptexterior"
    }
  end

  def interior
    render "shared/image_gallery", locals: {
      title: "Interiors",
      image_count: 111,
      category: "concepts",
      path: "conceptinterior"
    }
  end

  def floating_ceiling_panels
  end

end
