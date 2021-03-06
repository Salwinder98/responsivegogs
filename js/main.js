const fFixStructure = () =>{
    $("html").attr("lang", "en");
    $("a.navbar-brand").append(`<h1></h1>`);
    $("a.navbar-brand h1").html($("a.navbar-brand img"));
}

const fChangeImageToPicture = () =>{  
    $("div.gibson-card")[0].id = "first_photo";
    $("div#first_photo img")[0].id = "first_photo_img";
    $("img#first_photo_img").hide();
    $("div#first_photo a").append(`
    <picture>
    <source media="(min-width:990px)" srcset="${$("div#first_photo img").attr("src")}" />
    <img src="img/SlashCore_Refresh_MOBILE.png" alt="Slash with a top hat" />
    </picture>
    `);
    $("img#first_photo_img").remove();
};

document.addEventListener('DOMContentLoaded', () => {
    fChangeImageToPicture();
    fFixStructure();
});