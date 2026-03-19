
// Simple VidSrc provider — returns embed URLs only (no scraping)

async function getStreamContent(imdbId, mediaType, seasonNum = null, episodeNum = null) {
    try {
        let url;

        if (mediaType === 'movie') {
            // Correct movie endpoint
            url = `https://vidsrc.to/embed/movie/${imdbId}`;
        } else {
            if (!seasonNum || !episodeNum) {
                console.log(`[VidSrc] Missing season/episode for TV.`);
                return [];
            }

            // Correct TV endpoint
            url = `https://vidsrc.to/embed/tv/${imdbId}/${seasonNum}/${episodeNum}`;
        }

        return [
            {
                meta: { countryCodes: ["multi"] },
                url
            }
        ];
    } catch (err) {
        console.error(`[VidSrc] Error building embed URL: ${err.message}`);
        return [];
    }
}

module.exports = { getStreamContent };
