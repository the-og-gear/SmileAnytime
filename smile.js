// Anonymous function, so we don't screw with globals
(()=>{
    // Get location of the window, as a string
    // We know it's amazon already, because we only run on amazon pages
    let loc = window.location.toString();

    // Attempt a standard replace.
    loc = loc.replace('www', 'smile');

    // Ensure we actually replaced
    if (!loc.includes('smile.amazon')) {
        // We didn't. :(
        loc = window.location.protocol +
            '//smile.amazon.com' +
            window.location.pathname;
        // We still need to pull the parameters to ensure completeness.
        // This ensures we don't somehow add null or undefined.
        let params = window.location.toString().split("?");
        if (params.length > 1) {
            loc += `?${params[1]}`;
        }
    }

    // No matter what, our URL is built. Set the window location to it!
    window.location.replace(loc);
})();