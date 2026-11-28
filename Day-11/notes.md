// status codes

// 1XX -> Informational
// 2XX -> Success
// 3XX -> Redirection
// 4XX -> Client
// 5xx-> Server

// 200 -> jab apki request success ho for example apko koi data chaiye getApi se and apke pass woh data aa jata hein toh aap 200 status code k sath user ko message bhejoge

// 201 -> Jab bhi mujhe new entry create karni hein yaani post method mein

// 204 -> No content -> ki abh yeah resource exist nahi karta hein

// 301 ->. Move Permanently

// 302 -> Temporary

// 400 -> Bad Request -> jab koi yha client galti kar raha hein jaise ki validation wali galtiya
// for example -> apne kaha Enter the username and user ne apna naam eshe likh diya 4554656 toh user ka naam kabhi bhi number mein nahi ho sakta hein and yeah ushne itentionally galat diya toh hum data base mein entry create nahi karenge and eshi request mein hum return karenge status code 400 in short jab bhi user jaan kar galti kar raha hein yha anjane mein ho rahi hein

// 401 -> unauthorized access -> bina identity k access karna

// 403 -> forbidden -> apke pass identity lekin hein lekin apke pass permission nahi hein

// 404 -> Not found

//409 -> Conflicts -> email already exist

// 422 -> Unprocess data -> Age limit -18 -> 16

// 500 -> Internal Server error

// 503 -> Under maintance
