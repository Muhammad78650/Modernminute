// Set cookie
document.cookie = "username=John Doe; path=/; expires=Fri, 31 Dec 2024 23:59:59 GMT";

// Get cookie
let username = document.cookie.replace(/(?:(?:^|.*;\s*)username\s*=\s*([^;]*).*$)|^.*$/, "$1");
console.log(username); // Output: John Doe
