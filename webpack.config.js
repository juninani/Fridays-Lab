const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const mode = process.env.NODE_ENV || 'development';
const tsConfigPath = path.resolve(__dirname, './tsconfig.json');
module.exports = {
    mode,
    entry: {
        app: path.join(__dirname, 'src', 'index.tsx'),
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        plugins: [new TsconfigPathsPlugin({ configFile: tsConfigPath })],
        extensions: ['.ts', '.tsx', '.js'],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        }, // 콘텐츠를 제공할 경로지정
        compress: true, // 모든 항목에 대해 gzip압축 사용
        hot: true, // HRM(새로 고침 안해도 변경된 모듈 자동으로 적용)
        port: 3000, // 접속 포트 설정
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            templateParameters: {
                env: process.env.NODE_ENV === 'production' ? '' : '[DEV]',
            },
            filename: './index.html',
            favicon: './public/favicon.ico',
            minify:
                process.env.NODE_ENV === 'production'
                    ? {
                          collapseWhitespace: true,
                          removeComments: true,
                      }
                    : false,
        }),
        new CleanWebpackPlugin(),
    ],
};
