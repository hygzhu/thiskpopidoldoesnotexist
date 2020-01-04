Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  #Static pages
  root 'static_pages#home'

  get '/static_pages_controller/refresh_image', to: 'static_pages#refresh_image'

end
