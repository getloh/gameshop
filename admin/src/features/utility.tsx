import moment from 'moment';
import { orderDataDetailType, orderProperties } from './interfaces';

export const genDayLabels = (days : number) => {
    let arr = [moment().format('dddd Do')];
    for (let i = 1; i < days; i++){
        let x = moment().subtract(i, 'days').format('ddd Do');
        arr.push(x)
    }

    return arr.reverse();
}

export const findFrequencyOfTitle = (array : orderDataDetailType[]) => {
    let store = [];

    for (let object of array){
        let storeIndex = store.findIndex(x => x.title === object.title);
        if (storeIndex !== -1){ // if found
            store[storeIndex].hits += object.quantity
        }
        else {
            const payload = {
                title: object.title,
                hits: object.quantity}
            store.push(payload)
        }
    }
    let storeSorted = store.sort((x, y) => {return x.hits - y.hits}).reverse()
return storeSorted
}

type modType = 'older' | 'newer';

//? Takes `/api/orders` and 'older' or 'newer' and returns array of orders in timeframe relating to 7d
export const find7Days = (array : orderProperties[], mod : modType) => {
    let store : orderProperties[] = [];
    if (mod === "older"){
    store = array.filter(x => moment(x.order_date).unix() < moment().subtract(7, "days").unix())
}
    else if(mod === "newer"){
        store = array.filter(x => moment(x.order_date).unix() > moment().subtract(7, "days").unix())
    }
return store
};


  //? Gets the price for orders made from api/orders
 export const getPricePerOrder = (orders: orderProperties[]) => {
    let costArray = []
    for (let order of orders) {   // process all orders
        let pushMe = {
            value: order.price * order.quantity,
            order_date: order.order_date.slice(0,10),
            quantity: order.quantity
        }
        costArray.push(pushMe);
    }
    return costArray
  }