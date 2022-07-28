let totalBasketballScore = (freethrows, midrange, threepointers) => {
    if(typeof freethrows === 'number' && typeof midrange === 'number' && typeof threepointers === 'number') {
        return ((freethrows * 1) + (midrange * 2) + (threepointers * 3));
    } else {
        console.log('Sorry, all entries must be numbers!');
    }
};
console.log(totalBasketballScore(2,3,4));

/*challenge 2*/
let itemPrice = (item) => {
    let price = 0;
       if(typeof item === 'string')
        switch (item) {
            case 'computer':
                price += 500;
                break;
            case 'mouse':
                 price += 10;
                 break;
            case 'tablet':
                price = 250;
                break;
            case 'case':
                 price = 25;
                 break;
            case 'router':
                price = $100 ;
                break;
                default:
                    console.log('Sorry, all entries must be string!');
                    break;
    } else {
        console.log('Sorry, all entries must be string');
    } 
    return price
     
};
console.log('$' + itemPrice('case'));

/*challenge3*/
const restaurants = ['Applebees', 'Panera Bread', 'Popeyes', 'Chopt', 'Chick-fil-A', 'Cheesecake Factory', 'Five Guys']
let randomRestaurant = numOfRestaurants => {
let randomRestaurantList = [];
for(let i=0; i<numOfRestaurants; i++) {
    /*if (typeof numOfRestaurants === 'number') {*/
        randomRestaurantList.push(restaurants[Math.floor(Math.random() * 7)]);
    /*}*/
    
}
    return randomRestaurantList;
};
console.log(randomRestaurant(3));

/*challenge4*/
const isLeapYear = year => {
    if(year >= 1 && year %4 === 0 || year % 400 === 0) {
        return true;
    } else {
            return false;
        }
        return year;
};
console.log(isLeapYear(2000));