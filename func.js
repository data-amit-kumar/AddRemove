var form= document.querySelector('#addForm');
var itemList=document.querySelector('#items');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', delItem);
// itemList.addEventListener('click', editItem);

function addItem(e){
    e.preventDefault();

    var newItem= document.querySelector('#item').value;

    var li= document.createElement('li');
    li.className= 'list-group-item';
    li.appendChild(document.createTextNode(newItem));

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



