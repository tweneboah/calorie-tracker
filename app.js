//Storage Controller
const StorageCtrl = (() => {

})()



//---------Item Controller------------

const ItemCtrl = (() => {
    //Item constructor
    const Item = function (id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    };

    //Data Structure / state
    const data = {
        items: [{
            id: 0,
            name: "Steak Dinner1",
            calorie: 1200
        },
        {
            id: 1,
            name: "Steak Dinner2",
            calorie: 400
        },
        {
            id: 2,
            name: "Steak Dinner3",
            calorie: 300
        }
        ],
        currentItem: null,
        totalCalories: 0,
    };

    //public methods
    return {
        getItems: () => {
            return data.items
        },

        logData: () => {
            console.log(data)
        }
    }
})()
//---------END Item Controller------------





//---------------UI Controller-------------------
const UICtrl = (() => {
    //UI Selectors
    const UISelectors = {
        itemlist: "#item-list",
        addBtn: ".add-btn",
        itemNameInput: "#item-name",
        itemCaloriesInput: "#item-calories"
    };

    //public method
    return {
        populateItemList: function (items) {
            let html = "";
            items.forEach(function (item) {
                html += `<li class="collection-item" id="item-${item.id}">
        <strong>${item.name}: </strong> <em>${item.calorie}</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      </li>`;
            });

            //Insert List items
            document.querySelector(UISelectors.itemlist).innerHTML = html;
        },
        getSelectors: function () {
            return UISelectors;
        }
    }
})()
//--------------- END UI Controller-------------------



//---------APP Controller-----------
const App = ((ItemCtrl, UICtrl) => {




    //public methods
    return {
        init: () => {
            console.log("Initializing");

            //fetch item from the data structure
            const items = ItemCtrl.getItems();

            //Populate item list
            UICtrl.populateItemList(items)

        }
    }
})(ItemCtrl, UICtrl);

App.init();

//---------END APP Controller-----------