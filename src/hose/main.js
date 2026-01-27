window.addEventListener("resize", isWindowVerticalRect)


function isWindowVerticalRect()
{
    imgs = document.querySelectorAll('img');

    if (window.innerHeight >= window.innerWidth)
    {
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].style.width = "100%";
        }
    }
    else
    {
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].style.width = "75%";
            imgs[i].style.margin = "auto";
        }
    }
}


setTimeout(isWindowVerticalRect, 5);
