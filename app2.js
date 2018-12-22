//Storage Controller

//Item Controller
const ItemCtrl = (function() {
  //Item constructor
  const Item = function(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  //Data Structure / state
  const data = {
    items: [
      {
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
    totalCalories: 0
  };
  //public methods
  return {
    getItems: function() {
      return data.items;
    },

    logData: function() {
      return data;
    },

    addItem: function(name, calorie) {
      console.log(name, calorie);
    }
  };
})();

//UI Controller
const UICtrl = (function() {
  //UI Selectors
  const UISelectors = {
    itemlist: "#item-list",
    addBtn: ".add-btn",
    itemNameInput: "#item-name",
    itemCaloriesInput: "#item-calories"
  };
  //public methods
  return {
    populateItemList: function(items) {
      let html = "";
      items.forEach(function(item) {
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

    getItemsInput: function() {
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value
      };
    },

    getSelectors: function() {
      return UISelectors;
    }
  };
})();

//App Controller
const App = (function(ItemCtrl, UICtrl) {
  //Load Event Listeners
  const loadEventListeners = function() {
    //Get UI Selectors
    const UISelectors = UICtrl.getSelectors();
    //Add item event
    document.querySelector(UISelectors.addBtn);
    document.addEventListener("click", itemAddSubmit);
  };

  //Add item submit
  const itemAddSubmit = function(e) {
    e.preventDefault();
    //Get form input from UI
    const input = UICtrl.getItemsInput();

    //Check for name and calorie input
    if (input.name !== "" && input.calories !== "") {
      //Add Item
      const newItem = ItemCtrl.addItem(input.name, input.calories);
    }
  };

  //init function //Public methods
  return {
    init: function() {
      //Fetch items from data structure
      const items = ItemCtrl.getItems();
      console.log(items);

      //populate list items
      UICtrl.populateItemList(items);

      //Load event listeners
      loadEventListeners();
    }
  };
})(ItemCtrl, UICtrl);

//initialising the app

App.init();

//Storage controller

//Item controller
const ItemCtrl = (function() {
  //Item constructor
  const Item = function(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  //Data Structure /sate
  const data = {
    items: [
      {
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
    totalCalories: 0
  };

  //making it public
  return {
    getItems: function() {
      return data.items;
    },

    logData: function() {
      return data;
    }
  };
})();

//UI controller
const UICtrl = (function() {})();

//App controller
const App = (function(ItemCtrl, UICtrl) {
  console.log(ItemCtrl.logData());

  //Inititialising Public methods
  return {
    init: function() {
      console.log("App is Loading.....");

      //Fetch items from data structure
      const items = ItemCtrl.getItems();
      console.log(items);

      //populate list items
      UICtrl.populateItemList(items);
    }
  };
})(ItemCtrl, UICtrl);

App.init();
