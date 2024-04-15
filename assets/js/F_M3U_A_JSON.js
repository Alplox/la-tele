export function M3U_A_JSON(m3u) {
    const lines = m3u.split('\n').filter(line => line.trim() !== ''); // Separar las líneas del archivo y filtrar las líneas vacías
    const channels = [];

    for (let i = 1; i < lines.length; i += 2) {
        const attributes = {};

        const info = lines[i].match(/([^\s]+)="([^"]+)"/g); // Extraer los atributos de la línea

        info.forEach(attr => {
            const [key, value] = attr.split('=');
            attributes[key.replace(/"/g, '')] = value.replace(/"/g, '');
        });

        const id = Math.floor(i / 2) + 1; // Corregimos el cálculo del ID

        const title = attributes['group-title'];
        const name = lines[i].match(/,(.+)$/)[1];

        channels.push({
            id: id,
            ...attributes,
            "title": name,
            m3u8_url: lines[i + 1]
        });
    }
    return channels;
}