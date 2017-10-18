

// document.addEventListener("keydown", function(){
//     console.log(event.which);
//     if (event.which == 8){
//
//        console.log("bekspejs !!!!! " );
//
//
//         pobierz.value = pobierz.value + "@@";
//
//
//     } else {
//         console.log("inny guzik...........");
//     }
// });




function waliduj() {










    var pobierz = document.getElementById("wybierzGodzine");
    var n = pobierz.value.length;


    if (n == 1) {
        console.log("n =>: " + n);

        let res = pobierz.value.substring(0, 1);

        console.log("res =>: " + res);
        let re = new RegExp(/[0-2]/);
        if (res.match(re)) {
        }
        else {
            let res = pobierz.value.substring(0, 0);
            pobierz.value = res;
        }
    }


    else if (n == 2) {
        console.log("n =>: " + n);
        let pierwszaCyfra = pobierz.value.substring(0, 1);

        if (pierwszaCyfra < 2) {
            var res = pobierz.value.substring(1, 2);
            let re = new RegExp(/[0-9]/);
            if (res.match(re)) {
                pobierz.value = pobierz.value + ":";
                // pobierz.value = pobierz.value;


            }
            else {
                console.log("inny znak, pierwszaCyfra < 2");
                pobierz.value = pierwszaCyfra;
            }
        }

        else if (pierwszaCyfra == 2) {
            var res = pobierz.value.substring(1, 2);
            let re = new RegExp(/[0-3]/);
            if (res.match(re)) {
                console.log("dla    H<2   znaki od 0 do 3");
                pobierz.value = pobierz.value + ":";
                // pobierz.value = pobierz.value;


            }
            else {
                console.log("inny znak, pierwszaCyfra == 2");
                pobierz.value = pierwszaCyfra;
            }
        }


    }

    else if (n == 3) {

        console.log("n =>: " + n);
        console.log("#######################################");


        document.addEventListener("keydown", function(){
            console.log(event.which);
            if (event.which == 8){




                console.log("pobierz.value.length  --> " + pobierz.value.length);
                console.log("bekspejs !!!!! " );


                // todo tu te zjadanie dwukropka
                // todo jak juz raz sie lisiner uruchomi to widzi go wszędzie


                var res = pobierz.value.substring(0, pobierz.value.length-1);
                pobierz.value = res;


                console.log("kuku");

            } else {
                console.log("inny guzik...........");
            }
        });




    }

    else if (n === 4) {
        console.log("n =>: " + n);
        var res = pobierz.value.substring(3, 4);
        var re = new RegExp(/[0-5]/);
        if (res.match(re)) {
        }
        else {
            var res = pobierz.value.substring(0, 3);
            pobierz.value = res;
               }




    }







    else if (n == 5) {
        console.log("n =>: " + n);
        var res = pobierz.value.substring(4, 5);
        var re = new RegExp(/[0-9]/);
        if (res.match(re)) {
        }
        else {
            var res = pobierz.value.substring(0, 4);
            pobierz.value = res;
        }
    }
    else if (n > 5) {
        console.log("próba wprowadzenia wiecej niz 5 znaków  #####");
        var res = pobierz.value.substring(0, 5);
        pobierz.value = res;
    }






}


