import webpack from "webpack";
import {webpackConfigOptions} from "./types/config";
import path from "path";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";

export const buildWebpackConfig = (options: webpackConfigOptions): webpack.Configuration => {
    return {
        mode: options.mode,
        entry: options.paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: options.paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(),
        devtool: options.isDev ? 'inline-source-map' : undefined,
        devServer: options.isDev ? buildDevServer(options) : undefined
    };
}