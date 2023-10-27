import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {webpackConfigOptions} from "./types/config";

export const buildLoaders = (options: webpackConfigOptions): webpack.RuleSetRule[] => {
    const { isDev } = options

    const svgLoader: webpack.RuleSetRule = {
        test: /\.svg$/,
        use: ['@svgr/webpack']
    }

    const fileLoader: webpack.RuleSetRule = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
    }

    const tsLoader: webpack.RuleSetRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const cssLoader: webpack.RuleSetRule = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (path: string) => Boolean(path.includes('.module')),
                        localIdentName: isDev ?  "[path][name]__[local]" : "[hash:base64:8]",
                    }
                }
            },
            // Compiles Sass to CSS
            "sass-loader",
        ]
    }

    return [
        fileLoader,
        svgLoader,
        tsLoader,
        cssLoader
    ]
}