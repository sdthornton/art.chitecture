module PhrasingHelper
  def can_edit_phrases?
    admin_signed_in?
  end
end
