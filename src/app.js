const fetchData = async (cik) => {
    const response = await fetch(`https://data.sec.gov/api/xbrl/companyconcept/CIK${cik}/dei/EntityCommonStockSharesOutstanding.json`, {
        headers: { 'User-Agent': 'ShareVolume/1.0' }
    });
    const data = await response.json();
    return data;
};

const processData = (data) => {
    const entityName = data.entityName;
    const shares = data.units.shares.filter(entry => entry.fy > '2020' && !isNaN(entry.val));
    const max = shares.reduce((prev, current) => (prev.val > current.val) ? prev : current);
    const min = shares.reduce((prev, current) => (prev.val < current.val) ? prev : current);
    return { entityName, max, min };
};

const updateDOM = (data) => {
    document.title = `${data.entityName} - Share Volume`;
    document.getElementById('share-entity-name').innerText = data.entityName;
    document.getElementById('share-max-value').innerText = data.max.val;
    document.getElementById('share-max-fy').innerText = data.max.fy;
    document.getElementById('share-min-value').innerText = data.min.val;
    document.getElementById('share-min-fy').innerText = data.min.fy;
};

const init = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const cik = urlParams.get('CIK') || '0000009389';
    const data = await fetchData(cik);
    const processedData = processData(data);
    updateDOM(processedData);
};

init();