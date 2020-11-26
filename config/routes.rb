Rails.application.routes.draw do
  resources :users
  resources :technologies
  resources :projects


  resources :projects do
    resources :technologies
  end
  
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  
end
