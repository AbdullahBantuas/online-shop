module.exports = {
    trailingSlash: true,
    output: 'export',
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true, // Allow to bypass types validation during building
    },
    modularizeImports: {
        '@mui/material': {
            transform: '@mui/material/{{member}}',
        },
        '@mui/lab': {
            transform: '@mui/lab/{{member}}',
        },
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });
        return config;
    },
};

//sasasas