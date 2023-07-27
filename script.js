const shareButton = document.querySelector('.share-button');
const toggleSocials = () => {
    const socialsWrapper = document.querySelector('.socials-wrapper')
    const shareButtonImage = shareButton.querySelector('img')

    socialsWrapper.classList.toggle('active')

    if(shareButtonImage.src.includes('share')){
        shareButtonImage.src = 'assets/icons8-cancel.svg';
    } else{
        shareButtonImage.src = 'assets/icons8-share (1).svg';
    }
}
shareButton.addEventListener('click', toggleSocials);