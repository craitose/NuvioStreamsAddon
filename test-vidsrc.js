// test-vidsrc.js
// Simple test script for the new VidSrc provider

const { getStreamContent } = require('./providers/vidsrcextractor.js');

async function test() {
    const args = process.argv.slice(2);

    if (args.length < 2) {
        console.log("Usage:");
        console.log("  node test-vidsrc.js <imdbId> <type> [season] [episode]");
        console.log("");
        console.log("Examples:");
        console.log("  node test-vidsrc.js tt0111161 movie");
        console.log("  node test-vidsrc.js tt4771108 tv 13 28");
        process.exit(1);
    }

    const imdbId = args[0];
    const type = args[1]; // "movie" or "tv"
    const season = args[2] ? Number(args[2]) : null;
    const episode = args[3] ? Number(args[3]) : null;

    console.log(`Testing VidSrc for:`);
    console.log(`  IMDb: ${imdbId}`);
    console.log(`  Type: ${type}`);
    if (type === "tv") {
        console.log(`  Season: ${season}`);
        console.log(`  Episode: ${episode}`);
    }
    console.log("");

    try {
        const result = await getStreamContent(imdbId, type, season, episode);

        console.log("Result:");
        console.log(JSON.stringify(result, null, 2));
    } catch (err) {
        console.error("Error:", err.message);
    }
}

test();
