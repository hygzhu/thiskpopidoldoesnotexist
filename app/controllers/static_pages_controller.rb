class StaticPagesController < ApplicationController

    def home
    end

    def refresh_image
        render :partial => "static_pages/image_card"
     end

end
