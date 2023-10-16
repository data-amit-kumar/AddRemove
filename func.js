var form= document.querySelector('#addForm');
var itemList=document.querySelector('#items');
var filter=document.querySelector('#filter');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', delItem);
// itemList.addEventListener('click', editItem);
filter.addEventListener('keyup', filterItems);


function addItem(e){
    e.preventDefault();

    var newItem= document.querySelector('#item').value;

    var li= document.createElement('li');
    li.className= 'list-group-item';
    

    var des=document.querySelector('#itemdes').value;
    var textNode = document.createTextNode(newItem + ' - ' + des);
    li.appendChild(textNode);

    var del= document.createElement('button');
    del.className = 'btn btn-danger btn-sm float-right delete';
    del.appendChild(document.createTextNode('X'));
    li.appendChild(del);

    var EDIT= document.createElement('button');
    EDIT.className = 'btn-edit float-right';
    EDIT.appendChild(document.createTextNode('EDIT'));
    li.appendChild(EDIT);

    itemList.appendChild(li);
}

    function delItem(e){
        if(e.target.classList.contains('delete')){
            if(confirm("Are you sure")){
                var li= e.target.parentElement;
                itemList.removeChild(li);
            }
        }
    }

    function filterItems(e){
        var text= e.target.value.toLowerCase();
        var items = itemList.querySelectorAll('#items li');

        Array.from(items).forEach(function(item){
            var itemName = item.firstChild.textContent;
            if(itemName.toLowerCase().indexOf(text) != -1){
                item.style.display='block;'
            }
            else{
                item.style.display='none';
            }
        })
    }



