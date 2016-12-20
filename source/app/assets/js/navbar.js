module.exports = function (obj) {
  var listClasses = document.getElementById("acct-menu").classList;
    console.log(listClasses);

    if(listClasses.contains("sublist--disappear")){
      listClasses.remove("sublist--disappear");
      console.log(listClasses);

    }else{
      listClasses.add("sublist--disappear");
      console.log(listClasses);
    }
};