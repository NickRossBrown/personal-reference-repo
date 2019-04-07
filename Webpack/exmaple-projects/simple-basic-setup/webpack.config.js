const path = require ('path');
//  the path module has a function on it called resolve.
// this helper is a part of node.js.
// This result function will take in the path to a file and make sure that the file path is correctly specified no matter which operating system run, be it Windows or OSX. So really the true reason that we're using path.resolve right here is to make sure that our webpack config file can safely be executed on Windows, or OSX, or Linux.

const config = {
    // where to start
    entry: './src/index.js',
    // this says, whenever webpack runs, save the file, call it bundle.js inside of a path of our project directory in a file called build.
    output: {
        // for this output path, we must specify an absolute file reference sothe entire fully qualified file path on our hard drive.
        // Underscore underscore is a constant in node.js and it is a reference to the current working directory.
        path: path.resolve(__dirname, 'build'),
        // While the file name is what webpack should call the actual file that gets created.
        // by convention we usually call this thing bundle.js,
        filename: 'bundle.js'
    }
};

module.exports = config;