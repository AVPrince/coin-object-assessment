console.log("Coin Flip!");

let coin = {
    state: 0,
    flip: function() {
        this.state = 1;
        this.state = Math.floor(Math.random() * 2);
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
        return this.state
    },
    toString: function() {
        this.flip()
        if(this.state === 0){
            return "Heads"
        } else if(this.state === 1){
            return "Tails"
        }
        // 2. Return the string "Heads" or "Tails", depending on whether
        //    "this.state" is 0 or 1.
    },
    toHTML: function() {
        let image = document.createElement('img');
        let heads = "./images/heads.jpg"
        let tails = "./images/tails.jpg"
        this.flip()
        if (this.state === 0) {
            image.src = heads;
         } else if(this.state === 1){
                image.src = tails;
        }
        image.style.height = "100px"
        image.style.width = "100px"
        return image;
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
    }
};
console.log(coin.toString());

let container = document.createElement('div');
container.append(coin.toString())
document.body.append(coin.toHTML())

function display20Flips (){
    for (let i = 0; i < 20; i++) {
        container.append(coin.toString())
    }
    /* Write a function called display20Flips that uses a loop to flip the coin 20 times. Each time the coin flips, display the result of each flip as a string on the page (make use of your toString() method) */
}

function display20Images() {
        for (let i = 0; i < 20; i++) {
            document.body.append(coin.toHTML())
        }
    /* Write a function called display20Images, again using a loop to flip the coin 20 times…but this time instead of displaying the result as a string, display the result of each flip as an HTML IMG element on the page (make use of your toHTML() method).create them dynamically with Javascript and append them to your HTML using document.createElement and ParentNode.append */
}

display20Images();

// let fakeDiv = document.createElement('div');
// fakeDiv.style.backgroundColor = "blue";
// fakeDiv.style.width = '100px';
// fakeDiv.style.height = '100px';