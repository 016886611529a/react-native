function isValidEmail(stringEmail) 
{
 return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(stringEmail))
  
}

function isValidPassword(stringPassword) {
    return ( stringPassword.length >=3 );
}

export {isValidPassword, isValidEmail};
