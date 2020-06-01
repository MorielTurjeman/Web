
var categories = ['Action and adventure' , 'Art' , 'Alternate history','Autobiography','Anthology','Biography','Chick lit','Book review',"Children's",'Cookbook','Comic book','Diary','Coming-of-age','Dictionary','Crime','Encyclopedia','Drama','Guide','Fairytale','Health','Fantasy','History','Graphic novel','Journal','Historical fiction','Math','Horror','Memoir','Mystery','Prayer','Paranormal romance','Religion and New age','Picture book','Textbook','Poetry','Review','Political thriller','Science','Romance','Self help','Satire','Travel','Science fiction','True crime','Short story','Suspense', 'Thriller' , 'Young adult'];
var used_categories = [];
var name_pic_relation = [
    {name : "Bad Boys" , src : "includes/images/images (5).jpg"} , 
    {name : "Many Waters(A Wrinkle In Time)" , src: "includes/images/51J-OKyODgL._SX258_BO1,204,203,200_.jpg"},
    {name : "Brazil" , src : "includes/images/965-420-264-6b.jpg"} , 
    {name : "Harry Potter and the Goblet of Fire" , src : "includes/images/9781408845677.jpg"} , 
    {name : "Ronaldo" , src : "includes/images/42919300100099408492no.jpg"} , 
    {name : "A Song of Ice and Fire" , src : "includes/images/A_Song_of_Ice_and_Fire_book_collection_box_set_cover.jpg"} , 
    {name : "World History" , src : "includes/images/bookpic.jpg"} , 
    {name : "פינוקיו" , src : "includes/images/download (4).jpg"} , 
    {name : "דירה להשכיר" , src : "includes/images/download (5).jpg"} , 
    {name : "Easy Korean Cook Book" , src : "includes/images/download (6).jpg"} , 
    {name : "איה פלוטו" , src : "includes/images/download (7).jpg"} , 
    {name : "מעשה בחמישה בלונים" , src : "includes/images/download (8).jpg"} , 
    {name : "אליעזר והגזר" , src : "includes/images/download (9).jpg"} , 
    {name : "A Girl Like Her" , src : "includes/images/download (11).jpg"} , 
    {name : "The Boy Most Likely To" , src : "includes/images/download (12).jpg"} , 
    {name : "Someone Like Me" , src : "includes/images/download (13).jpg"} , 
    {name : "הסתערות של תשוקה" , src : "includes/images/download (14).jpg"} , 
    {name : "הכול הכול" , src : "includes/images/download (15).jpg"} , 
    {name : "World History" , src : "includes/images/download (16).jpg"} , 
    {name : "The Books of The Bible" , src : "includes/images/download (17).jpg"} , 
    {name : "An Orphan's War" , src : "includes/images/download (18).jpg"} , 
    {name : "The Age of Light" , src : "includes/images/download (19).jpg"} , 
    {name : "מאחורי הכריכה" , src : "includes/images/download (20).jpg"} , 
    {name : "נסיכת האפר" , src : "includes/images/download (21).jpg"} , 
];

/* ----- Rand and insert categories and pics -----*/
$(document).ready(function(){
    
    randPicsTo($("#recommended > section"));
    //while(used_categories.length != categories.length)
    for(var i = 0; i < 20; i++)
    {
        var category = categories[Math.floor(Math.random() * categories.length)];
        if(!used_categories.includes(category))
        {
            used_categories += category;
            category_fixed= category.replace(" " , "-").replace("'" , "-" ).replace(" " , "-").replace(" " , "-");
            $("#to_push_categories").append('<section class="category bg-dark" name="' + category_fixed + '"><b>' + category +'</b><section></section><span>See All</span></section>');
            randPicsTo($("[name='" + category_fixed + "'] > section"));
        }
    }
    
});

var addedBook = false;

function randPicsTo(div)
{

    
        if(!addedBook && sessionStorage.getItem("book")){
            var bookAdded= JSON.parse(sessionStorage.getItem("book"));
            name_pic_relation.push(bookAdded);
            addedBook = true;
        }
        var used_imgs = [];
        for(var j = 0; j < 20; j++)
        {
            var rand_pos_of_imgs = Math.floor(Math.random() * name_pic_relation.length);
            var img_name = name_pic_relation[rand_pos_of_imgs].name;
            if(!used_imgs.includes(img_name))
            {
                used_imgs += img_name;
                div.append("<img class='book' name='" + name_pic_relation[rand_pos_of_imgs].name + "' src='" + name_pic_relation[rand_pos_of_imgs].src + "'></img>");
            }
        }
}