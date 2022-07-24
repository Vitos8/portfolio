module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      xs: '13px', 
      base: '17px', 
      lg: '34px', 
      xl: '65px', 
    },
    
    screens: {
      'xxl': {'max': '1400px'},
      'xl': {'max': '1200px'},
      'lg': {'max': '992px'},
      'xm': {'max': '768px'},
      'base': {'max': '640px'},
      'xs': {'max': '480px'},
    },

    container: {
      center: true,
      padding: '20px'
    },

    extend: {
      colors:{
        darkPurlpe: '#90a0d9',
        darkLightPurlpe: '#cdcdff',
        darkBg: '#23283e',
        darkBgCard: '#2a2f4c',
        white: 'rgb(248, 248, 248)',
        black: '#444444',
        blue: '#2978b5'
      },
    },
  },
  plugins: [],
}