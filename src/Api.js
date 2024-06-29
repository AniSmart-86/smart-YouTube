export const API_KEY = 'AIzaSyCI6C7U2aUs_w_nVLBrQHRGzNB9F861tgY';

export const converter = (value) =>{
    if(value >= 1000000) {
        return Math.floor(value/1000000) + "M";
    }
    else if(value >= 1000){
        return Math.floor(value/1000) + "K";
    }
    else{
        return value;
    }
}



