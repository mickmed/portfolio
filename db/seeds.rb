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
    {name: 'SASS', icon_url:'sass3.png'},
    {name: 'HTML', icon_url:'html5.png'},
    {name: 'Mapbox',icon_url:'mapbox.png'},
    {name: 'AmCharts', icon_url:'amcharts.png'},
    {name: 'Ruby on Rails', icon_url:'rubyonrails.png'},
    {name: 'PostgreSQL', icon_url:'postgresql.png'},
    {name: 'Webpack', icon_url:'webpack.png'},

   

    

])

projects = Project.create!([
    {
        name: 'NYC Trees', 
        subtitle: 'Discover the trees of NYC streets',  
        site_url: 'https://psychedelic-plantation.surge.sh', 
        github_url:'https://github.com/mickmed/mental-math-master', 
        img_url:'nyc-trees1.png',
        technologies:[Technology.first, Technology.last],
        description: '<p> Discover the tress of the New York City streets. Users can search by address, neighborhood, or zipcode. Find out the species, health, size, and other aspects about the tree.<p>' '<p>This was my second project as a student at General Assembly\'s Web Development Immersive Cohort in 2018.</p>'
        
    },
    {
        name: 'Mick\'s Math Mental', 
        subtitle: 'Test your mental arithmetic against the timer', 
        site_url: 'http://micks-mental-math.surge.sh',  
        github_url:'https://github.com/mickmed/mental-math-master', 
        img_url:'math-game1.png',
        technologies:[Technology.first, Technology.last],
        description:'<p> Test your mental arithmetic abilities in this fun math game. You\'ll be up against a timer, so pressure\'s on!!!</p>' '<p>This was my first project as a student at General Assembly\'s Web Development Immersive Cohort in 2018.</p>'
    },

])

user = User.create!([{username:'mickmed', email:'mick@mick.com', password:'password'}])