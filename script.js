


function crypt() {
    let inputText = document.getElementById('enter-string');
    let outputText = document.getElementById('output-string');
    let key = Number(document.getElementById('select-option').value);
    
    let engAlf = 
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let result = '';
    let idx;


    let toLow = inputText.value;
    toLow = inputText.value.toLowerCase();
    //console.log(toLow);
    
    let invalid = toLow.replace(/\s/g, "");
    //console.log(invalid);

    // Crypt string
    console.log("Initial array is = " + engAlf);
    let cryptString = document.getElementById('crypt-string').value;
        //console.log(cryptString);
        if (cryptString == '')
            console.log('empty');
        else {
            if (cryptString.length < 7) {
                alert('Enter at least 7 characters');
                //location.reload();
            }
            else {
            cryptString = cryptString.toLowerCase().split('');
            let unique = [];
            for (let str of cryptString) {
                if(!unique.includes(str))
                    unique.push(str);
            }
            
            for (let str of engAlf) {
                if(!unique.includes(str))
                    unique.push(str);
            }
            console.log(unique);
            engAlf = unique;
            }
        }
        let info = document.getElementById('info-str');  
        info = engAlf;
        
        console.log("Alfabet array is = " + info);
        


        
    for (let i = 0; i < invalid.length; i++) {
        
        let reg = /[а-яА-Я]/i;
        if ( !isNaN(invalid[i]) || reg.test(invalid) ) {
            alert('No numbers or cyrilic words!!!! Enter letters for A to Z (upper or lowercase)');
            //location.reload();
            break;
            
        }
        
        // Chipfer
        idx = engAlf.indexOf(invalid[i]);
        //console.log(idx);
        
        // fixed
        if (idx + key >= engAlf.length) {
            result += engAlf[(idx + key ) % 26];
            console.log("1 in" + result);
            console.log( "1 idx = " + idx);
        }
        else {
            result += engAlf[idx + key ];
            console.log("2 in " + result);
            console.log( "2 idx = " + idx);
            }
        

    }
    //console.log(result);
    outputText.value = result.toUpperCase();
    return outputText.value;  
}





function decrypt() {
    let inputText = document.getElementById('enter-string');
    let outputText = document.getElementById('output-string');
    let key = Number(document.getElementById('select-option').value);
    
    let engAlf = 
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let result = '';
    let idx;


    let toLow = inputText.value;
    toLow = inputText.value.toLowerCase();
    console.log(toLow);
    
    // Crypt string
    let cryptString = document.getElementById('crypt-string').value;
    
        //console.log(cryptString);
        if (cryptString == '')
            console.log('empty');
        else {
            cryptString = cryptString.toLowerCase().split('');
            let unique = [];
            for (let str of cryptString) {
                if(!unique.includes(str))
                    unique.push(str);
            }
            
            for (let str of engAlf) {
                if(!unique.includes(str))
                    unique.push(str);
            }
            console.log(unique);
            engAlf = unique;
            }
    

    // Decrypt        
    for (let i = 0; i < toLow.length; i++) {
              

        idx = engAlf.indexOf(toLow[i]);
        //console.log(idx);

            if (idx - key < 0 ) {
                result += engAlf[ 26 + (idx - key) % 26];
            }
            else {
                result += engAlf[idx - key];
                }
        
        
        
    }
    
    outputText.value = result.toUpperCase();
    return outputText.value;
} 


console.log( -5 % 26)