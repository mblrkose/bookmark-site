// ============================================================================
// BOOKMARK YÖNETİM REHBERİ
// ============================================================================
// Yeni bir site eklemek veya mevcut olanları kaldırmak için aşağıdaki listeyi düzenleyin.
//
// FORMAT:
// {
//     name: "Site Adı",
//     url: "https://site-adresi.com",
//     description: "Site açıklaması",
//     date: "Tarih",
//     time: "Saat",
//     favicon: "https://www.google.com/s2/favicons?domain=site-adresi.com"
// },
//
// ÖNEMLİ NOTLAR:
// 1. Her bir site {} süslü parantezleri arasında olmalıdır.
// 2. Her {} bloğundan sonra virgül (,) koymayı unutmayın (sonuncusu hariç).
// 3. Resim (favicon) otomatik gelir, sadece domain kısmını değiştirin.
// ============================================================================

const BOOKMARKS = [
    {
        name: "VirusTotal",
        url: "https://www.virustotal.com/gui/home/upload",
        description: "File and URL security scanner",
        date: "12/20/2025",
        time: "12:15:00 PM",
        favicon: "https://www.google.com/s2/favicons?domain=virustotal.com"
    },
    {
        name: "Flixier",
        url: "https://editor.flixier.com",
        description: "Online video editor",
        date: "12/20/2025",
        time: "12:15:00 PM",
        favicon: "https://www.google.com/s2/favicons?domain=flixier.com"
    },
    {
        name: "Mapify",
        url: "https://mapify.so/",
        description: "Mind mapping tool",
        date: "12/20/2025",
        time: "12:15:00 PM",
        favicon: "https://www.google.com/s2/favicons?domain=mapify.so"
    },
    {
        name: "WPS PDF",
        url: "https://pdf.wps.com/",
        description: "PDF editor online",
        date: "12/20/2025",
        time: "12:15:00 PM",
        favicon: "https://www.google.com/s2/favicons?domain=wps.com"
    },
    {
        name: "Bolt.new",
        url: "https://bolt.new/",
        description: "AI code generator",
        date: "12/20/2025",
        time: "12:15:00 PM",
        favicon: "https://www.google.com/s2/favicons?domain=bolt.new"
    },
    {
        name: "NoteGPT",
        url: "https://notegpt.io",
        description: "AI note-taking assistant",
        date: "12/20/2025",
        time: "12:15:00 PM",
        favicon: "https://www.google.com/s2/favicons?domain=notegpt.io"
    },
    {
        name: "ToffeeShare",
        url: "https://toffeeshare.com/en/",
        description: "Secure file sharing",
        date: "12/20/2025",
        time: "12:15:00 PM",
        favicon: "https://www.google.com/s2/favicons?domain=toffeeshare.com"
    },
    {
        name: "Napkin AI",
        url: "https://app.napkin.ai/",
        description: "AI visual thinking tool",
        date: "12/20/2025",
        time: "12:15:00 PM",
        favicon: "https://www.google.com/s2/favicons?domain=napkin.ai"
    },
    {
        name: "Lovable",
        url: "https://lovable.dev/",
        description: "AI app builder",
        date: "12/20/2025",
        time: "12:15:00 PM",
        favicon: "https://www.google.com/s2/favicons?domain=lovable.dev"
    },
    {
        name: "File.io",
        url: "https://www.file.io/",
        description: "Temporary file sharing",
        date: "12/20/2025",
        time: "12:15:00 PM",
        favicon: "https://www.google.com/s2/favicons?domain=file.io"
    },
    {
        name: "SeriesGraph",
        url: "https://seriesgraph.com/",
        description: "TV show tracker",
        date: "12/20/2025",
        time: "12:15:00 PM",
        favicon: "https://www.google.com/s2/favicons?domain=seriesgraph.com"
    },
    {
        name: "PairDrop",
        url: "https://pairdrop.net/",
        description: "Local file sharing",
        date: "12/20/2025",
        time: "12:15:00 PM",
        favicon: "https://www.google.com/s2/favicons?domain=pairdrop.net"
    },
    {
        name: "Aspose PDF",
        url: "https://products.aspose.app/pdf/remove-watermark",
        description: "Remove PDF watermarks",
        date: "12/20/2025",
        time: "12:15:00 PM",
        favicon: "https://www.google.com/s2/favicons?domain=aspose.app"
    },
    {
        name: "v0",
        url: "https://v0.app/",
        description: "AI UI generator by Vercel",
        date: "12/20/2025",
        time: "12:15:00 PM",
        favicon: "https://www.google.com/s2/favicons?domain=v0.app"
    },
    {
        name: "FMHY",
        url: "https://fmhy.net/",
        description: "Ultimate website directory",
        date: "12/20/2025",
        time: "12:15:00 PM",
        favicon: "https://www.google.com/s2/favicons?domain=fmhy.net"
    },
    {
        name: "Uiverse",
        url: "https://uiverse.io/",
        description: "UI components library",
        date: "12/20/2025",
        time: "12:15:00 PM",
        favicon: "https://www.google.com/s2/favicons?domain=uiverse.io"
    },
    {
        name: "SAT Slayer",
        url: "https://www.satslayer.org/",
        description: "SAT prep resources",
        date: "12/20/2025",
        time: "12:15:00 PM",
        favicon: "https://www.google.com/s2/favicons?domain=satslayer.org"
    },
    {
        name: "OnePrep",
        url: "https://www.oneprep.xyz",
        description: "Test prep platform",
        date: "12/20/2025",
        time: "12:15:00 PM",
        favicon: "https://www.google.com/s2/favicons?domain=oneprep.xyz"
    },
    {
        name: "VidDownloader",
        url: "https://viddownloader.io/",
        description: "Video downloader",
        date: "12/20/2025",
        time: "12:15:00 PM",
        favicon: "https://www.google.com/s2/favicons?domain=viddownloader.io"
    }
];

// Load bookmarks when page loads
document.addEventListener('DOMContentLoaded', loadBookmarks);

function getDomainFromUrl(url) {
    try {
        const domain = new URL(url).hostname;
        return domain.replace('www.', '');
    } catch {
        return url;
    }
}

function loadBookmarks() {
    const bookmarksList = document.getElementById('bookmarksList');
    bookmarksList.innerHTML = '';

    BOOKMARKS.forEach(bookmark => {
        const div = document.createElement('div');
        div.className = 'bookmark-item';

        // Click to open bookmark in new tab
        div.onclick = () => {
            window.open(bookmark.url, '_blank');
        };

        div.innerHTML = `
            <div class="bookmark-content">
                <img src="${bookmark.favicon}" alt="favicon" style="width: 16px; height: 16px; margin-bottom: 8px;">
                <div class="bookmark-title">${bookmark.name}</div>
                <div class="bookmark-url">${bookmark.description || getDomainFromUrl(bookmark.url)}</div>
            </div>
        `;
        bookmarksList.appendChild(div);
    });
}
