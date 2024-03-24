function toggleCardContent(contentId) {
    var content = document.getElementById(contentId);
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    }
}