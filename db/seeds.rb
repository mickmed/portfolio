# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Technology.destroy_all
Project.destroy_all
User.destroy_all


technologies = Technology.create!([
    {name: 'Javascript', icon_url:'javascript.svg'},
    {name: 'React', icon_url:'reactjs.png'},
    {name: 'CSS', icon_url:'css3.png'},
    {name: 'SASS'},
    {name: 'HTML', icon_url:'html5.png'},
    {name: 'Mapbox',icon_url:'mapbox.png'},
    {name: 'AmCharts'},
    {name: 'Ruby on Rails', icon_url:'rubyonrails.png'},
    {name: 'PostgreSQL', icon_url:'postgresql.png'}

])

projects = Project.create!([
    {
        name: 'NYC Trees', 
        subtitle: 'Discover the trees of NYC streets',  
        site_url: 'https://psychelic-plantation.surge.sh', 
        github_url:'https://github.com/mickmed/mental-math-master', 
        img_url:'nyc-trees1.png' 
    },
    {
        name: 'Mick\'s Math Mental', 
        subtitle: 'Test your mental arithmetic against the timer', 
        site_url: 'https://mickmed.github.io/mental-math-master',  
        github_url:'https://github.com/mickmed/mental-math-master', 
        img_url:'math-game.png' 
    },

])

user = User.create!([{username:'mickmed', email:'mick@mick.com', password:'password'}])