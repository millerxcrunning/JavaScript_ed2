let budgetController = (function(){
    
let Expense = function(id, description, value)
{
    this.id = id;
    this.description = description;
    this.value = value;
};

let Income = function(id, description, value)
{
    this.id = id;
    this.description = description;
    this.value = value;
};

let data = 
{
    allItems: 
    {
    inc: [],
    exp: []
    },

    totals: 
    {
        expenses: 0,
        income: 0
    }
}

return {
    addItem: function(type, desc, val)
    {
        let newItem, ID;
        /*
        console.log("type = ", type);
        console.log("desc = ", desc);
        console.log("val = ", val);
        console.log("data.allItems = ", data.allItems);
        console.log("data.allItems[\"inc\"] = ", data.allItems["inc"]);
        console.log("data.allItems[\"exp\"] = ", data.allItems["exp"]);
        */
        while(type !== "inc" && type !== "exp")
        {
            type = prompt("type has to be \"inc\" or \"exp\"");
        }
        // Create new ID
        (data.allItems[type].length > 0) ? (ID = data.allItems[type][data.allItems[type].length - 1].id + 1): ID = 0;
        /*
        if (data.allItems[type].length > 0) {
            ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
        } else {
            ID = 0;
        }*/
        // Create new item based on 'inc' or 'exp' type
        (type === 'exp') ? newItem = new Expense(ID, desc, val) : (type === 'inc') ? newItem = new Income(ID, desc, val) : console.log("item is not of type \"exp\" or \"inc\""); 

        data.allItems[type].push(newItem);

        return newItem;
    },

    testDataStructure: function()
    {
        console.log("data structure: ", data);
    }
};

})();

//cannot call budgetController(5) because budgetController is not a function
//cannot call budgetController.add(5) because budgetController.add() is not a function

let UIController = (function(){

    let DOMStrings = {
        type: '.add__type',
        description: '.add__description',
        value: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list'
    }

    return{
        getInput: function(){
            //returns an Object containing 3 properties
            return{
                type: document.querySelector(DOMStrings.type).value, // either 'inc' or 'exp'
                description: document.querySelector(DOMStrings.description).value,
                value: document.querySelector(DOMStrings.value).value
            };
        },

        addListItem: function(obj, type)
        {
            let html, newHTML, element;
            //Create HTML string with placeholder text
            if (type === "inc")
            {
                element = DOMStrings.incomeContainer;
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div> <div class="right clearfix"><div class="item__value">%val%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }

            else if (type === "exp")
            {
                element = DOMStrings.expensesContainer;
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%val%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }
            //Replace placeholder text with actual data
            newHTML = html.replace('%id%', obj.id);
            //have to use newHTML.replace or it will not be adding to the already edited html. If using html.replace again, you will only have the new edit and not the old edit as well.
            newHTML = newHTML.replace('%description%', obj.description);
            newHTML = newHTML.replace('%val%', obj.value);
            //Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHTML);
        },

        getDOMSTrings: function(){
            return DOMStrings;
        },

        clearFields: function(){
            let fieldsList;
            
            //returns a list and not an array
            fieldsList = document.querySelectorAll(DOMStrings.description + ', ' + DOMStrings.value);

            let fieldsArray = Array.prototype.slice.call(fieldsList);

            //clear '.add__description' & clear '.add__value'
            fieldsArray.forEach(element => {
                element.value = "";
            });

            fieldsArray[0].focus();
        }
    };
})();

let controller = (function(bCtrl, uiCtrl)
{
    let setupEventListeners = function ()
    {
        let DOM = UIController.getDOMSTrings();
        // class selector is .
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function(e)
        {
            if(e.keyCode === 13 || e.which === 13)
            {
                console.log("enter was pressed");
                ctrlAddItem();
            }
        });
    }
    
    let ctrlAddItem = function(){

        let input, newItem;

        console.log("controller adding item");
        //1. get field data
        input = UIController.getInput();
        //console.log("item = ", input);
        //2. add item to budget controller
        newItem = budgetController.addItem(input.type, input.description, input.value);
        //3. add item to UI
        UIController.addListItem(newItem, input.type);
        //4. Clear the fields
        UIController.clearFields();
        //5. calculate budget

        //6. display budget in UI

    }

    return {
        init: function ()
        {
            console.log('budget app has started.')
            setupEventListeners();
        }
    }
    
})(budgetController, UIController);

controller.init();