export function M3U_A_JSON(m3u) {
    const channels = {};
    const lines = m3u.split('\n').filter(line => line.trim() !== '');

    for (let i = 1; i < lines.length; i++) {
        const channelInfo = lines[i].match(/([^\s]+)="([^"]+)"/g);
        if (channelInfo) {
            const attributes = channelInfo.reduce((acc, attr) => {
                const [key, value] = attr.split('=');
                acc[key.replace(/"/g, '')] = value.replace(/"/g, '');
                return acc;
            }, {});

            // Extraer el nombre del canal correctamente, incluso si hay atributos extra antes de la coma
            const NOMBRE_CANAL = lines[i].substring(lines[i].lastIndexOf(',') + 1).trim() || 'Nombre canal no encontrado';

            const LOGO_IMG = attributes['tvg-logo'] ?? "";
            const GROUP_TITLE_ID = attributes['group-title']?.toLowerCase() ?? "";

            const TVG_ID = attributes['tvg-id'] ?? `canal-m3u8-${i}.`;
            let [NOMBRE_CANAL_PARA_ID, COUNTRY_ID = ""] = TVG_ID.toLowerCase().split('.');
            if (COUNTRY_ID.includes('@')) {
                COUNTRY_ID = COUNTRY_ID.split('@')[0];
            }

            // Buscar la URL m3u8 saltando líneas #EXTVLCOPT
            let m3u8_url = "";
            let j = i + 1;
            while (j < lines.length) {
                if (!lines[j].startsWith('#')) {
                    m3u8_url = lines[j].trim();
                    break;
                }
                j++;
            }

            channels[NOMBRE_CANAL_PARA_ID] = {
                "nombre": NOMBRE_CANAL,
                "logo": LOGO_IMG,
                "señales": {
                    "iframe_url": [],
                    "m3u8_url": [m3u8_url],
                    "yt_id": "",
                    "yt_embed": "",
                    "yt_playlist": "",
                    "twitch_id": ""
                },
                "sitio_oficial": "",
                "categoría": GROUP_TITLE_ID,
                "país": COUNTRY_ID,
            };
        }
    }
    return channels;
}