 var config = {
   entry: './main.js',
	
   output: {
      path:'C:\\Users\\Administrator\\Desktop\\网龙\\第一周\\thirdWeek(react)',
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 7777
   },
	
   module: {
      rules: [ 
               {
            test:/\.css$/,
            loader:'style-loader!css-loader'
         },
         {
            test:/\.(png|jpg|gif|jpeg)$/,
            loader:'url-loader?2048'
         },
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',		
            query: {
               presets: ['es2015', 'react']
            }
         }

      ]
   }
	
};

module.exports = config;