const englishCopy = {
    skip: 'Skip to content',
    navigation: 'Main navigation',
    navCatalog: 'Catalog',
    navTools: 'Tools',
    navCalculator: 'Calculator',
    navResources: 'Resources',
    heroKicker: 'STL models and FDM resources',
    heroTitle: '3D printing',
    heroAccent: 'with a Puerto Rican accent.',
    heroDescription: 'Original 3D models, organic design, and custom modeling. Inspired by Puerto Rico and made to print.',
    heroCatalog: 'Explore models',
    heroTools: 'Browse tools',
    garitaHeroAlt: 'Two 3D-printed can holders shaped like Puerto Rican sentry boxes',
    featureLabel: 'Featured model',
    featureTitle: 'Boricua Garita Can Holder',
    catalogTitle: 'Featured designs',
    catalogDescription: 'From Old San Juan’s sentry boxes to the Puerto Rican coquí.',
    allModels: 'See all on Cults3D',
    product1Title: 'Garita Can Holder',
    product1Description: 'A can holder shaped like an Old San Juan sentry box, with a handle, a straw lid, and a Puerto Rican flag. Our best-selling design!',
    product1Alt: 'Boricua garita can holder with a handle and straw lid',
    product2Title: 'Coconut Limber + Moka Cup',
    product2Description: 'A classic Puerto Rican coconut ice and a moka cup with articulated legs. Each prints in one piece without supports.',
    product2Alt: 'Coconut limber and moka cup models with articulated legs',
    product3Title: 'Articulated Coquí Pack',
    product3Description: 'Collectible figures inspired by Puerto Rico’s iconic coquí frog, with functional joints.',
    product3Alt: 'Two articulated coquí frog figures',
    product4Title: 'Boricua Kitchen Combo',
    product4Description: 'A moka pot and a rice cooker with legs, inspired by traditional Puerto Rican kitchens.',
    product4Alt: 'Moka pot and rice cooker models with legs',
    product5Title: 'LED Coquí Lamp',
    product5Description: 'A decorative Puerto Rican coquí lamp with an articulated design that prints without supports.',
    product5Alt: 'Articulated Puerto Rican coquí lamp',
    viewModel: 'View model',
    toolsTitle: '3D printing tools',
    toolsDescription: 'Prepare your STL and 3MF files for printing.',
    holeTitle: 'Hole Generator',
    holeDescription: 'Create holes and adjust tolerances to assemble FDM-printed parts.',
    openHole: 'Open hole generator',
    slicerTitle: 'Scale and cut to size',
    slicerDescription: 'Scale your model and split it automatically for printing on a Bambu Lab printer.',
    openSlicer: 'Open scaler and cutter',
    manualCutter: 'Manual STL and 3MF cutter',
    colorSplitter: 'Split a 3MF file by color',
    texturizer: 'Add texture to STL files',
    calculatorIntro: 'Estimate the price of a print using material, energy, labor, and profit margin.',
    resourcesTitle: 'Resources and community',
    resourcesDescription: 'Learn FDM printing, follow the workshop, and support the project.',
    resourceModels: 'Models on Cults3D',
    resourceGuide: 'Introductory FDM guide',
    resourceCourse: 'Bambu Lab A1 beginner course',
    donateCaption: 'Support the workshop',
    footerNote: '3D design for the maker community.'
};

const homeCopy = [
    ['data-copy', 'textContent'],
    ['data-alt', 'alt'],
    ['data-label', 'aria-label']
].flatMap(([attribute, property]) =>
    Array.from(document.querySelectorAll(`[${attribute}]`), element => ({
        element,
        property,
        spanish: property === 'textContent' ? element.textContent.trim() : element.getAttribute(property),
        english: englishCopy[element.getAttribute(attribute)]
    }))
);

let currentLang = __ls.get('printaplabLanguage') === 'en' ? 'en' : 'es';

function updateThemeButton() {
    const light = document.documentElement.dataset.theme === 'light';
    const button = document.querySelector('.theme-toggle');
    const label = currentLang === 'en'
        ? (light ? 'Switch to dark theme' : 'Switch to light theme')
        : (light ? 'Activar tema oscuro' : 'Activar tema claro');
    document.getElementById('theme-icon').textContent = light ? '☾' : '☀';
    button.setAttribute('aria-label', label);
    button.title = label;
}

function toggleTheme() {
    const theme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = theme;
    __ls.set('theme', theme);
    updateThemeButton();
}

function applyLanguage() {
    const english = currentLang === 'en';
    document.documentElement.lang = currentLang;
    for (const { element, property, spanish, english: translation } of homeCopy) {
        const value = english ? translation : spanish;
        if (property === 'textContent') element.textContent = value;
        else element.setAttribute(property, value);
    }

    const button = document.getElementById('lang-btn');
    button.textContent = english ? 'ES' : 'EN';
    button.lang = english ? 'es' : 'en';
    button.setAttribute('aria-label', english ? 'Ver en español' : 'View in English');
    document.querySelectorAll('[data-catalog-href]').forEach(link => {
        link.href = english
            ? 'https://cults3d.com/en/users/printaplab3d/3d-models'
            : 'https://cults3d.com/es/usuarios/printaplab3d/modelos-3d';
    });
    updateThemeButton();
    updateCalculatorLanguage();
    updateMediaLanguage();
}

function toggleLang() {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    __ls.set('printaplabLanguage', currentLang);
    applyLanguage();
}

document.addEventListener('DOMContentLoaded', applyLanguage);
