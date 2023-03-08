class str{
   static stringLength = string => {
   if(string.length > 10 || string.length === 0) {throw new Error('string is either too long or too short!');}
    return  string.length;
}

static reverseString = string => {

    return string.split('').reverse().join('');
}

static capitalise = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

}


module.exports = str;


console.log(str.capitalise('fuad'));