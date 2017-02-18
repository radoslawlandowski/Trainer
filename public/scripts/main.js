requirejs.config({
    baseUrl: 'scripts/',
    paths: {
        'Example': 'application/Example'
    }
});

requirejs(['Example']);