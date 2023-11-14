if(window.matchMedia("(max-width:1024px").matches){ //Verifica se é um dispositivo mobile.
    const hambMenuIcon = document.getElementById('hamb-menu-icon');
    const listMenu = document.getElementById('list-menu');
    
    hambMenuIconListener();

    function toggleHambMenu(){ 
        const classListHambMenu = Array.from(hambMenuIcon.classList);   
        if(IsThereMenuClickedClass(classListHambMenu)){
            hideMenuList();
            removeMenuClickedClass(hambMenuIcon);
        } else if (!IsThereMenuClickedClass(classListHambMenu)){
            showMenuList();
            addMenuClickedClass(hambMenuIcon);
        };
    };

    function IsThereMenuClickedClass(classList){
        return classList.includes('menu-clicked');
    };

    function showMenuList(){
        listMenu.style.display = 'flex';
        listMenu.style.gap = '20px';
        listMenu.style.backgroundColor = 'var(--main-text-color)';
        listMenu.style.width = '100%';
        listMenu.style.padding = '0.5em';
        listMenu.style.marginTop = '0.5em';
    };

    function hideMenuList(){
        listMenu.style.display = 'none';
    };

    function addMenuClickedClass(hambMenuIcon){
        hambMenuIcon.classList.add('menu-clicked');
    };

    function removeMenuClickedClass(hambMenuIcon){
        hambMenuIcon.classList.remove('menu-clicked');
    };

    function hambMenuIconListener(){
        hambMenuIcon.addEventListener('click', ()=>{
            toggleHambMenu();
        });
    };
};