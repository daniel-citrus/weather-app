/**
 * Return icon source link
 * @param {integer} code - weather code
 * @param {boolean} period - day or night
 */
export function getIcon(code, period) {
    period = period ? 'day' : 'night';

    let key = dictionary[code][period];

    if (key) {
        return animated_icons[key];
    }

    // No animated icon, so we will get the base icon
    key = dictionary[code]['icon'];

    if (period === day) {
        return base_day_icons[key];
    }

    return base_night_icons[key];
}

export function getAnimatedIcon(name) {
    return animated_icons[name];
}

function importAll(r) {
    let images = {};

    r.keys().map((item) => {
        images[item.replace('./', '').replace(/\.(png|jpe?g|svg)$/, '')] =
            r(item);
    });

    return images;
}

const animated_icons = importAll(
    require.context(
        '../style/icons/animated_icons/',
        false,
        /\.(png|jpe?g|svg)$/
    )
);

const base_day_icons = importAll(
    require.context(
        '../style/icons/base_icons/day/',
        false,
        /\.(png|jpe?g|svg)$/
    )
);

const base_night_icons = importAll(
    require.context(
        '../style/icons/base_icons/night/',
        false,
        /\.(png|jpe?g|svg)$/
    )
);

/**
 * Dictionary to translate response codes into icon names
 * https://github.com/basmilius/weather-icons
 *
 * <response code> : {
 *      day:   <day animated icon key>
 *      night: <night animated icon key>
 *      icon:  <base icon key>
 * }
 */
const dictionary = {
    1000: {
        day: 'clear-day',
        night: 'clear-night',
        icon: 113,
    },
    1003: {
        day: 'partly-cloudy-day',
        night: 'partly-cloudy-night',
        icon: 116,
    },
    1006: {
        day: 'cloudy',
        night: 'cloudy',
        icon: 119,
    },
    1009: {
        day: 'overcast-day',
        night: 'overcast-night',
        icon: 122,
    },
    1030: {
        day: 'mist',
        night: 'mist',
        icon: 143,
    },
    1063: {
        day: 'partly-cloudy-day-rain',
        night: 'partly-cloudy-night-rain',
        icon: 176,
    },
    1066: {
        day: 'partly-cloudy-day-snow',
        night: 'partly-cloudy-night-snow',
        icon: 179,
    },
    1069: {
        day: 'partly-cloudy-day-sleet',
        night: 'partly-cloudy-night-sleet',
        icon: 182,
    },
    1072: {
        day: null,
        night: null,
        icon: 185,
    },
    1087: {
        day: 'thunderstorms-day',
        night: 'thunderstorms-night',
        icon: 200,
    },
    1114: {
        day: null,
        night: null,
        icon: 227,
    },
    1117: {
        day: null,
        night: null,
        icon: 230,
    },
    1135: {
        day: 'fog-day',
        night: 'fog-night',
        icon: 248,
    },
    1147: {
        day: null,
        night: null,
        icon: 260,
    },
    1150: {
        day: 'drizzle',
        night: 'drizzle',
        icon: 263,
    },
    1153: {
        day: 'drizzle',
        night: 'drizzle',
        icon: 266,
    },
    1168: {
        day: 'drizzle',
        night: 'drizzle',
        icon: 281,
    },
    1171: {
        day: null,
        night: null,
        icon: 284,
    },
    1180: {
        day: 'partly-cloudy-day-rain',
        night: '	partly-cloudy-night-rain',
        icon: 293,
    },
    1183: {
        day: 'rain',
        night: 'rain',
        icon: 296,
    },
    1186: {
        day: 'partly-cloudy-day-rain',
        night: 'partly-cloudy-night-rain',
        icon: 299,
    },
    1189: {
        day: 'rain',
        night: 'rain',
        icon: 302,
    },
    1192: {
        day: 'partly-cloudy-day-rain',
        night: 'partly-cloudy-day-rain',
        icon: 305,
    },
    1195: {
        day: 'rain',
        night: 'rain',
        icon: 308,
    },
    1198: {
        day: null,
        night: null,
        icon: 311,
    },
    1201: {
        day: null,
        night: null,
        icon: 314,
    },
    1204: {
        day: 'sleet',
        night: 'sleet',
        icon: 317,
    },
    1207: {
        day: 'sleet',
        night: 'sleet',
        icon: 320,
    },
    1210: {
        day: 'partly-cloudy-day-snow',
        night: 'partly-cloudy-night-snow',
        icon: 323,
    },
    1213: {
        day: 'snow',
        night: 'snow',
        icon: 326,
    },
    1216: {
        day: 'partly-cloudy-day-snow',
        night: 'partly-cloudy-night-snow',
        icon: 329,
    },
    1219: {
        day: 'snow',
        night: 'snow',
        icon: 332,
    },
    1222: {
        day: 'partly-cloudy-day-snow',
        night: 'partly-cloudy-night-snow',
        icon: 335,
    },
    1225: {
        day: 'snow',
        night: 'snow',
        icon: 338,
    },
    1237: {
        day: 'hail',
        night: 'hail',
        icon: 350,
    },
    1240: {
        day: 'partly-cloudy-day-rain',
        night: 'partly-cloudy-night-rain',
        icon: 353,
    },
    1243: {
        day: 'partly-cloudy-day-rain',
        night: 'partly-cloudy-night-rain',
        icon: 356,
    },
    1246: {
        day: 'rain',
        night: 'rain',
        icon: 359,
    },
    1249: {
        day: 'partly-cloudy-day-sleet',
        night: 'partly-cloudy-night-sleet',
        icon: 362,
    },
    1252: {
        day: 'partly-cloudy-day-sleet',
        night: 'partly-cloudy-night-sleet',
        icon: 365,
    },
    1255: {
        day: 'partly-cloudy-day-snow',
        night: 'partly-cloudy-night-snow',
        icon: 368,
    },
    1258: {
        day: 'partly-cloudy-day-snow',
        night: 'partly-cloudy-night-snow',
        icon: 371,
    },
    1261: {
        day: 'partly-cloudy-day-hail',
        night: 'partly-cloudy-night-hail',
        icon: 374,
    },
    1264: {
        day: 'partly-cloudy-day-hail',
        night: 'partly-cloudy-night-hail',
        icon: 377,
    },
    1273: {
        day: 'thunderstorms-day-rain',
        night: 'thunderstorms-night-rain',
        icon: 386,
    },
    1276: {
        day: 'thunderstorms-rain',
        night: 'thunderstorms-rain',
        icon: 389,
    },
    1279: {
        day: 'thunderstorms-day-snow',
        night: 'thunderstorms-night-snow',
        icon: 392,
    },
    1282: {
        day: 'thunderstorms-snow',
        night: 'thunderstorms-snow',
        icon: 395,
    },
};
