
export const BaseUrl = () => {
    
    return process.env.NODE_ENV === 'production' ? 'https://portfolio-mick-server.herokuapp.com' : 'http://localhost:3000'

}