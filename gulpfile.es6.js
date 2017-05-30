import fs from 'fs';
import gulp from 'gulp';
import gutil from 'gulp-util';
import insert from 'gulp-insert';
import concat from 'gulp-concat';

const VERSIONS = {
    EASEL: '0.8.2',
    PRELOAD: '0.6.2',
    SOUNDL: '0.6.2',
    TWEEN: '0.6.2',
    CREATE: '0.8.2'
};

const SRC = {
    EASEL: `./vendor_modules/EaselJS-${VERSIONS.EASEL}/lib/easeljs-${VERSIONS.EASEL}.combined.js`,
    PRELOAD: `./vendor_modules/PreloadJS-${VERSIONS.PRELOAD}/lib/preloadjs-${VERSIONS.PRELOAD}.combined.js`,
    SOUND: `./vendor_modules/SoundJS-${VERSIONS.SOUND}/lib/soundjs-${VERSIONS.SOUND}.combined.js`,
    TWEEN: `./vendor_modules/TweenJS-${VERSIONS.TWEEN}/lib/tweenjs-${VERSIONS.TWEEN}.combined.js`
};

const DEST = {
    CREATE: './'
};

function string_src(filename, string) {
    var src = require('stream').Readable({ objectMode: true });
    src._read = function () {
        this.push(new gutil.File({ cwd: '', base: '', path: filename, contents: new Buffer(string) }));
        this.push(null)
    };
    return src
}

gulp.task('compile', () => {
    return gulp.src([
        SRC.EASEL,
        SRC.PRELOAD,
        SRC.SOUND,
        SRC.TWEEN
    ])
        .pipe(concat('createjs.js'))
        .pipe(insert.prepend('var createjs = (this.createjs = (this.createjs || {}));\n'))
        .pipe(insert.append('\nif(typeof module !== "undefined" && typeof module.exports !== "undefined") module.exports = this.createjs;'))
        .pipe(gulp.dest(DEST.CREATE));
});

gulp.task('package', () => {
    let pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
    pkg.version = VERSIONS.CREATE;
    return string_src('package.json', JSON.stringify(pkg, null, 4))
        .pipe(gulp.dest(DEST.CREATE));
});

gulp.task('default', ['compile', 'package']);