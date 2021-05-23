(() => {
    let language;
    getLanguage = () => {
        (localStorage.getItem('language') == null) ? setLanguage('uz') : false;
        $.ajax({
            url: '/language/' + localStorage.getItem('language') + '.json',
            dataType: 'json', async: false, dataType: 'json',
            success: function (lang) { language = lang }
        });
    }

    setLanguage = (lang) => {
        localStorage.setItem('language', lang);
    }
})();