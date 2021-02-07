Rails.application.routes.draw do
  resources :courses
  root 'static_pages#landing_page'
  # get 'static_pages/landing_page
  # get 'static_pages/privacy_policy'
  get 'privacy_policy', to: 'static_pages#privacy_policy'
end
