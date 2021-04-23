const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { HotModuleReplacementPlugin } = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
    //our index file
    // entry: path.resolve(__dirname, "src/index.tsx"),
    entry:  "./src/index.tsx",
    //Where we put the production code
    output: {
        path: path.resolve(__dirname, "dist"),
        // path: path.jpin(__dirname,'dist'),
        // filename: "bundle.[contenthash].js",
        filename: "bundle.js",
        publicPath: "/",
    },
    // This says to webpack that we are in development mode and write the code in webpack file in different way
    mode: "development",
    devtool: 'inline-source-map',
    module: {
        rules: [
        
            //Allows use javascript
            // {
            //     test: /\.(js|jsx)$/,
            //     exclude: /node_modules/, //don't test node_modules folder
            //     use: {
            //         loader: "babel-loader",
            //         // loader: "ts-loader",
            //     },
            //     resolve: {
            //         extensions: [".js", ".jsx"],
            //     },
            // },
            //
            // {
            //     test: /\.(ts|tsx|js)$/,
            //     exclude: /node_modules/, //don't test node_modules folder
            //     use: {
            //         // loader: "babel-loader",
            //         loader: "ts-loader",
            //     },
                
            //     resolve: {
            //         extensions: [".ts",".tsx",".js"],
            //     },
            // },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
              },
            //Allows use of CSS
            {
                test: /\.css$/i,
                use: [
                  
                    "style-loader",
                    "css-loader?url=false",
                    
                ],
            },
         
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates style nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader?url=false",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
              },
            //Allows use of images,fonts,files
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: 'assets/fonts/[name].[ext]',
                    publicPath: '/'
                },
            },
            {
                test:  /\.(jpg|jpeg|png|gif)$/i,
                loader: 'file-loader',
                // include: path.join(__dirname, 'assets/img'),
                options: {
                    name: 'assets/images/[name].[ext]',
                    publicPath: '../',
                },
            },
          
            {
                test:  /\.(svg)$/i,
                loader: 'file-loader',
               
            },
        
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      },
    plugins: [
        //Allows remove/clean the build folder
        // new CleanWebpackPlugin(),
        //Allows update react components in real time
        new HotModuleReplacementPlugin(),
        //Allows to create an index.html in our build folder
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html"), //we put the file that we created in public folder
        }),
        //This get all our css and put in a unique file
        new MiniCssExtractPlugin({
            filename: "styles.css",
            // filename: "styles.[contentHash].css",
        }),
        new Dotenv(),
    ],
    //Config for webpack-dev-server module
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, "dist"),
        hot: true,
        port: 8000,
    },
};